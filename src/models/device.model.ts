export interface Device {
  id: string;
  name: string;
  type: "television" | "fridge";
  state?: "on" | "off";
  lastTurnedOn?: Date;
  lastTurnedOff?: Date;
  usage?: number;
}
