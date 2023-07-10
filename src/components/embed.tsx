import { h } from "preact"
import clsx from "clsx"
import style from "./embed.css"

const Title = () =>
  <div className={clsx(style['embed-title'])}>
    <h4>Docq Public Chat</h4>
  </div>

const CloseButton = () =>
  <div className={clsx(style['close-button-container'])}>
    <button className={clsx(style['close-button'])} onClick={() => { console.log('close button clicked') }}
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

export const Container = () =>
  <div className={clsx(style['embed-container'])}>
    <div className={clsx(style['embed-header'])}>
      <Title/>
      <CloseButton/>
    </div>
    <div id="docq-data-container" className={clsx(style['embed-body'])}/>
  </div>

