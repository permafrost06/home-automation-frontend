import { defineStore } from "pinia";
import type { Device } from "@/models/Device.model";

export type RootState = {
  devices: Device[];
};

export const useDevicesStore = defineStore("devices", {
  state: () =>
    ({
      devices: [],
    } as RootState),
  actions: {
    createNewDevice(device: Device) {
      if (!device) return;

      device.isDeviceOn = false;

      this.devices.push(device);
    },

    deleteDevice(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.devices.splice(index, 1);
    },

    findIndexById(id: string): number {
      return this.devices.findIndex((device) => device.id === id);
    },

    turnDeviceOn(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.devices[index].isDeviceOn = true;
    },

    turnDeviceOff(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.devices[index].isDeviceOn = false;
    },
  },
});
