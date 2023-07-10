import { h, Fragment } from "preact"
import clsx from "clsx"
import style from "./icon.css"
import icon from "../static/icon.svg"
import { useConfig } from "../context/context";


export const MessageIcon = () => {
  const { setOpened, opened } = useConfig();

  return (
    <Fragment >
      {!opened &&
        <div className={clsx(style['widget-icon'])} onClick={() => setOpened(true)}>
          <img src={icon} alt="docq widget icon" width="45px" height="45px" />
        </div>
      }
    </Fragment>
  )
}
