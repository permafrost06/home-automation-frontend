<script setup lang="ts">
import { useDevicesStore } from "@/store";
import type { Device } from "@/models/device.model";

const devicesStore = useDevicesStore();

const devices = devicesStore.devices as Array<Device>;

const readableTime = (time: Date | undefined) => {
  if (!time) return "No data";
  return time.toLocaleTimeString();
};
</script>

<template>
  <div class="table-container">
    <div class="table">
      <h1 style="color: var(--color-light-1)">Devices</h1>
      <div class="cells">
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
          <div class="col col-4">{{ device.usage }} units</div>
        </div>
      </div>
      <router-link style="text-align: center" :to="{ name: 'Dashboard' }">
        <button>Go to Dashboard</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.table {
  width: 37rem;
  margin-inline: auto;
  text-align: center;

  .col {
    display: inline-block;
    text-align: center;
    padding: 0.25rem;
  }

  .col-1 {
    width: 10rem;
    border-right: 1px solid var(--color-med-1);
  }

  .col-2,
  .col-3 {
    width: 10rem;
    border-right: 1px solid var(--color-med-1);
  }

  .col-4 {
    width: 5rem;
  }

  .row {
    width: 100%;
  }

  .header {
    border-bottom: 1px solid var(--color-med-1);
  }
}
.cells {
  padding: 1rem;
  background: var(--color-light-1);
  border-radius: 1rem;
}
.table .header .col {
  font-weight: 700;
  font-size: 1.2rem;
}
</style>
