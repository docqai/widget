import { h, Fragment } from "preact"
import clsx from "clsx"
import style from "./embed.css"
import { useConfig } from "../context/context";
import { useEmbed } from "../utils/useembed";

/**
 * Embed title
 * @returns JSX.Element
 */
const Title = () =>
  <div className={clsx(style['embed-title'])}>
    <p>Docq Public Chat</p>
  </div>

/**
 * Embed close button
 * @returns JSX.Element
 */
const CloseButton = () => {
  const { setOpened } = useConfig();

  return (
    <Fragment>
      <div className={clsx(style['close-button-container'])}>
        <button className={clsx(style['close-button'])}
          onClick={() => setOpened(false)}
          aria-label="Close">
          &times;
        </button>
      </div>
    </Fragment>
  )
}

/**
 * Embed container, Used to render the iframe
 * @returns JSX.Element
 */
export const Container = () => {
  const { opened } = useConfig();

  useEmbed(opened);

  return (
    <Fragment>
      {opened &&
        <div className={clsx(style['embed-container'])}>
          <div className={clsx(style['embed-header'])}>
            <Title />
            <CloseButton />
          </div>
          <div id="docq-data-container"
            className={clsx(style['embed-body'])}
          >
            Connecting to Docq...
          </div>
        </div>
      }
    </Fragment>
  )
}

