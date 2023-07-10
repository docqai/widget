import { useEffect } from 'preact/hooks'

const dataHost = 'http://172.26.68.148:8401'
export const useEmbed = () => {
  useEffect(() => {
    const win = window as any
    if(!win.Docq){
      throw new Error('Docq is not defined')
    }
  }, [])

  
  useEffect(() => {
    const dataContainer = document.getElementById('docq-data-container') as HTMLElement
    const frame = document.createElement('iframe')
    frame.setAttribute('src', `${dataHost}/widget?embedded=true`)
    frame.setAttribute('style', 'border: none; width: 100%; height: 100%;')
    dataContainer.innerHTML = ''
    dataContainer.appendChild(frame)
  }, [])
}