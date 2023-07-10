import { useEffect } from 'preact/hooks'

export const useEmbed = (opened: boolean) => {
  
  useEffect(() => {
    if (!opened) return
    const win = window as any
    const dataUrl = document.currentScript?.getAttribute('docq-host-url')

    const URL = dataUrl || win.Docq
    if(!URL){
      throw new Error('Docq host url is not defined')
    }
    const dataContainer = document.getElementById('docq-data-container') as HTMLElement
    dataContainer.innerHTML = ''
    const frame = document.createElement('iframe')
    frame.setAttribute('src', `${URL}/widget?embedded=true`)
    frame.setAttribute('style', 'border: none; width: 100%; height: 100%;')
    dataContainer.innerHTML = ''
    dataContainer.appendChild(frame)
  }, [opened])
}
