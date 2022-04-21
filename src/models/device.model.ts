export interface Device {
  id: string;
  name: string;
  type: "television" | "fridge";
  isDeviceOn?: boolean;
  lastTurnedOn?: Date;
  lastTurnedOff?: Date;
  usage?: number;
}
