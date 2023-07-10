import { ComponentChildren } from "preact";


interface WidgetConfig {
  debug: boolean;
  host: string;
  theme: string;
  size: string;
  minimized: boolean;
}
export interface ContextProps {
  config: WidgetConfig;
  element?: HTMLElement;
  children: ComponentChildren;
}
