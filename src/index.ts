
type Position = 'left' | 'right'
type Size = 'small' | 'large'

/**
  * @description: Get the host-url from the script tag and create and append the iframe
  * to the body
  * @param: docq-host: The host url of the docq server
  * @example: <script src="https://docq.io/widget.js" docq-host="https://www.example.com"></script>
  */
class DocqEmbed {

  /* Get the host url from the script tag */
  private readonly docqHost = document.currentScript?.getAttribute('server-address')
  private readonly position: Position = document.currentScript?.getAttribute('position') as Position || 'right'
  private readonly size: Size = document.currentScript?.getAttribute('size') as Size || 'large'
  private readonly debug: boolean = document.currentScript?.getAttribute('debug') === 'true' || false

  /**
   * Setup the widget to use the entire screen
   * @returns {HTMLIFrameElement} widget
   */
  private readonly largeWidget = (): HTMLIFrameElement => {
    const widget = document.createElement('iframe')
    widget.setAttribute('src', `${this.docqHost}/widget?embedded=true`)
    widget.setAttribute(
      'style', `
    position: absolute; top: 0; left: 0; right: 0;
    width: 100%; height: 100%; border: none;
  `)
    return widget
  }

  /**
   * Generate random string to use as the ids of the widget and classes
   */
  private readonly random = (): string => {
    return 'css-entry' + Math.random().toString(36).substring(7)
  }

  /**
   * Setup the widget to use the bottom right or left corner of the screen
   * @param {Position} position - The position of the widget on the screen left or right
   * @returns {HTMLIFrameElement} widget for embedding
   */
  private readonly smallWidget = (position: Position): HTMLIFrameElement => {
    const container = document.createElement('div')
    const widget = document.createElement('iframe')
    widget.setAttribute('src', `${this.docqHost}/widget?embedded=true`)
    widget.setAttribute(
      'style', `
    position: fixed; bottom: 0;
    ${position}: 0; width: 100%;
    height: 100%; border: none;
  `)
    console.log(this.docqHost)
    return widget
  }

  /**
   * Style an embeddable chat widget for placement in the bottom right or left corner of the screen
   * @param {Position} position - The position of the widget on the screen left or right
   */
  private readonly smallWidgetStyle = (position: Position) => {
    const style = document.createElement('style')
    const className = this.random()
    style.innerHTML = `
    .${className} {
      position: fixed;
      bottom: 20px;
      ${position}: 0;
      width: 100%;
      height: 100%;
      border: none;
      max-width: 400px;
      max-height: 600px;
      min-width: 200px;
      min-height: 400px;
    }
    `
    return { style, className }
  }

  /**
   * A default widget to display if the docq server is not available
   * @returns {HTMLElement} widget
   * @private {boolean} debug - If true, display the server address
   * @private {string} docqHost - The host url of the docq server
   * @private {string} defaultWidget - The default widget to display
   */
  private readonly defaultWidget = (): HTMLElement => {
    const widget = document.createElement('div')
    if (this.debug) {
      widget.innerHTML = `
    <p style="color: red;">Error connecting to docq server</p>
    <h4>Debug mode is on</h4>
    <p>Server address: ${this.docqHost}<p>
    `} else {
      widget.innerHTML = `
    <p style="color: red;">Error connecting to docq server<p>
    `
    }
    widget.style.display = 'flex'
    widget.style.justifyContent = 'center'
    widget.style.alignItems = 'center'
    widget.style.flexDirection = 'column'
    widget.style.height = '100%'
    widget.style.width = '100%'
  
    return widget
  }

  private readonly checkDocqHost = (): boolean => {
    if (!this.docqHost) {
      // Set docqHost to use the src attribute of the script tag
      console.error('server-address attribute is required')
      return false
    }
    return true
  }

  private readonly appendWidget = (widget: HTMLElement, container?: HTMLElement): void => {
    if (container) {
      container.appendChild(widget)
      return
    }
    const body = document.body
    if (body) {
      body.appendChild(widget)
      return
    }

    const _body = document.createElement('body')
    _body.style.margin = '0'
    _body.style.padding = '0'
    _body.appendChild(widget)
    document.appendChild(_body)
  }

  public readonly embed = async (): Promise<void> => {
    const container = document.getElementById('docq-widget') as HTMLElement

    if (this.docqHost) {
      if (!this.checkDocqHost()) {
        this.appendWidget(this.defaultWidget(), container)
        return
      }
      const widget = this.size === 'large' ? this.largeWidget() : this.smallWidget(this.position)
      this.appendWidget(widget, container)
    } else {
      this.appendWidget(this.defaultWidget(), container)
    }
  }

  /**
   * Check if the returned page is not a 404
   * if a 404 is returned, return false
   */
  private readonly checkPage = async (): Promise<boolean> => {
    return await fetch(`${this.docqHost}/widget`)
      .then((response) => {
        if (this.debug) {
          const { status, url, redirected } = response
          console.log({ status, url, redirected })
        }
        if (response.status === 404) {
          return false
        }
        return true
      })
      .catch(() => {
        return false
      }
      )
  }

}

const docqEmbed = new DocqEmbed()

window.onload = () => {
  docqEmbed.embed()
}
