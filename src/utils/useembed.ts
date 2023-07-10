import { useEffect } from 'preact/hooks'

export const useEmbed = (opened: boolean) => {

  useEffect(() => {
    if (!opened) return
    const win = window as any
    let __curretScript = document.currentScript
    if (!__curretScript) {
      const scripts = document.getElementsByTagName('script')
      __curretScript = scripts[scripts.length - 1]
      console.log('scripts', scripts)
    }
    const dataUrl = __curretScript.getAttribute('docq-host-url')

    let __URL =  dataUrl
    if (!__URL && !win.__Docq) {
      throw new Error('Docq: host url is not defined')
    }
    if (!__URL) __URL = win.__Docq;
    const dataContainer = document.getElementById('docq-data-container') as HTMLElement
    dataContainer.innerHTML = ''
    const frame = document.createElement('iframe')
    frame.setAttribute('src', `${__URL}/widget?embedded=true`)
    frame.setAttribute('style', 'border: none; width: 100%; height: 100%;')
    dataContainer.innerHTML = ''
    dataContainer.appendChild(frame)
  }, [opened])
}
