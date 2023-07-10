import { h, createContext, ComponentChildren } from "preact";
import { WidgetConfig } from "../models/models";
import { useContext, useState } from "preact/hooks";


const ConfigContext = createContext<WidgetConfig>({
  debug: false,
  opened: false,
  setOpened: () => {},
  size: "small"
} as WidgetConfig);

export const useConfig = () => useContext(ConfigContext);
export const ConfigProvider = ({ children}: { children: ComponentChildren,}) => {
  const [opened, _setOpened] = useState(false);

  const _values = {
    debug: false,
    opened,
    setOpened: (value: boolean) => _setOpened(value),
    size: "small"
  }

  return <ConfigContext.Provider value={_values}>
    {children}
  </ConfigContext.Provider>
}
