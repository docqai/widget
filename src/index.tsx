/**
  * @description: Get the host-url from the script tag and create and append the iframe
  * to the body
  * @param: docq-host: The host url of the docq server
  * @example: <script src="https://docq.io/widget.js" docq-host="https://www.example.com"></script>
  */

const embed = () => {

  /* Get the host url from the script tag */
  const docqHost = document.currentScript?.getAttribute('docq-host')

  /* Create and append the iframe to the body */
  const widget = document.createElement('iframe')
  widget.setAttribute('src', `${docqHost}/widget?embedded=true`)
  widget.setAttribute(
    'style', `
    position: fixed; bottom: 0;
    right: 0; width: 100%;
    height: 100%; border: none;
  `)
  document.body.appendChild(widget)
}

embed()
