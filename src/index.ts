
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
   * Setup the widget to use the bottom right or left corner of the screen
   * @param {Position} position - The position of the widget on the screen left or right
   * @returns {HTMLIFrameElement} widget for embedding
   */
  private readonly smallWidget = (position: Position): HTMLIFrameElement => {
    const widget = document.createElement('iframe')
    widget.setAttribute('src', `${this.docqHost}/widget?embedded=true`)
    widget.setAttribute(
      'style', `
    position: fixed; bottom: 0;
    ${position}: 0; width: 100%;
    height: 100%; border: none;
  `)
    return widget
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
    Error connecting to docq server
    Server address: ${this.docqHost}
    `} else {
      widget.innerHTML = `
    Error connecting to docq server
    `
    }
    return widget
  }

  public readonly embed = (): void => {
    if (this.docqHost) {
      const widget = this.size === 'large' ? this.largeWidget() : this.smallWidget(this.position)
      document.body.appendChild(widget)
    } else {
      document.body.appendChild(this.defaultWidget())
    }
  }
}

const docqEmbed = new DocqEmbed()
docqEmbed.embed()
