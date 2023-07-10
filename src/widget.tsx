import { h } from "preact";
import { Container, MessageIcon } from "./components";
import { ConfigProvider } from "./context/context";



export const Widget = () => {

  return (
    <ConfigProvider>
      <Container />
      <MessageIcon />
    </ConfigProvider>
  )
}
