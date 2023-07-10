import { useEffect } from 'preact/hooks'

export const useEmbed = (opened: boolean) => {
  useEffect(() => {
    const win = window as any
    if(!win.Docq){
      throw new Error('Docq is not defined')
    }
  }, [])

  
  useEffect(() => {
    if (!opened) return
    const win = window as any
    if(!win.Docq){
      throw new Error('Docq is not defined')
    }
    const dataContainer = document.getElementById('docq-data-container') as HTMLElement
    dataContainer.innerHTML = ''
    const frame = document.createElement('iframe')
    frame.setAttribute('src', `${win.Docq}/widget?embedded=true`)
    frame.setAttribute('style', 'border: none; width: 100%; height: 100%;')
    dataContainer.innerHTML = ''
    dataContainer.appendChild(frame)
  }, [opened])
}
