<script setup lang="ts">
import { useDevicesStore } from "@/store";
import type { Device } from "@/models/Device.model";

const devicesStore = useDevicesStore();

const devices = devicesStore.devices as Array<Device>;

const readableTime = (time: Date | undefined) => {
  if (!time) return;
  return time.toLocaleTimeString();
};
</script>

<template>
  <div class="table">
    <router-link :to="{ name: 'Dashboard' }">Go to Dashboard</router-link>
    <h1>Devices</h1>
    <div class="row header">
      <div class="col col-1">Device Name</div>
      <div class="col col-2">Last turned on</div>
      <div class="col col-3">Last turned off</div>
      <div class="col col-4">Usage</div>
    </div>
    <div class="row" v-for="device in devices" :key="device.id">
      <div class="col col-1">{{ device.name }}</div>
      <div class="col col-2">{{ readableTime(device.lastTurnedOn) }}</div>
      <div class="col col-3">{{ readableTime(device.lastTurnedOff) }}</div>
      <div class="col col-4">{{ device.usage }}</div>
    </div>
  </div>
</template>

<style>
.col {
  display: inline-block;
}

.col-1 {
  width: 10rem;
}

.col-2,
.col-3 {
  width: 8rem;
}

.col-4 {
  width: 3rem;
}

.table .header .col {
  font-weight: 700;
}
</style>
