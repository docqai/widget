import { StateUpdater } from "preact/hooks";

export interface WidgetConfig {
  debug?: boolean;
  theme?: string;
  size?: string;
  opened: boolean;
  setOpened: StateUpdater<boolean>;
}
