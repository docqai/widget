import { h } from "preact"
import clsx from "clsx"
import style from "./icon.css"
import icon from "../static/icon.svg"

export const MessageIcon = () => {

  return <div className={clsx(style['widget-icon'])}>
    <img src={icon} alt="docq widget icon" width="45px" height="45px" />
  </div>
}
