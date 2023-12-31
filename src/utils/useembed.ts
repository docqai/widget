import { useEffect } from 'preact/hooks'
import { Session } from './session'


/**
 * A custom hook that embeds the chat widget into the web page.
 * @param opened Chat widget opened state.
 */
export const useEmbed = (opened: boolean) => {

  useEffect(() => {
    if (!opened) return
    const win = window as any
    let __curretScript = document.currentScript
    if (!__curretScript) {
      const scripts = document.getElementsByTagName('script')
      __curretScript = scripts[scripts.length - 1]
    }
    const dataUrl = __curretScript.getAttribute('docq-host-url')
    const docqConfig = __curretScript.getAttribute('docq-config')
    const __session_id = Session();

    let __URL = dataUrl
    if (!__URL && !win.__Docq) {
      throw new Error('Docq: host url is not defined')
    }

    if (!__URL) __URL = win.__Docq;
    const __SID = docqConfig ? docqConfig : !!win.__DocqSID? win.__DocqSID : '1000:1';
  
    const dataContainer = document.getElementById('docq-data-container') as HTMLElement
    dataContainer.innerHTML = ''
    const frame = document.createElement('iframe')
    const [param1, param2] = __SID.split(':')
    frame.setAttribute('src', `${__URL}/widget?embedded=true&session_id=${__session_id}&param1=${param1}&param2=${param2}`)
    frame.setAttribute('style', 'border: none; width: 100%; height: 100%;')
      dataContainer.appendChild(frame)
  }, [opened])
}
