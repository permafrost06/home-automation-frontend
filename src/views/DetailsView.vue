<script setup lang="ts">
import { useDevicesStore } from "@/store";
import type { Device } from "@/models/device.model";
import { ref } from "vue";
import { useUserStore } from "@/store/user";

const user = useUserStore();

const username = ref(user.username);

const devicesStore = useDevicesStore();

const devices = devicesStore.devices as Array<Device>;

const readableTime = (time: Date | undefined) => {
  if (!time) return "No data";
  return time.toLocaleTimeString();
};
</script>

<template>
  <header>
    <h1>Device usage details</h1>
    <p>{{ username }}</p>
  </header>
  <div class="container-holder">
    <div class="table-container">
      <div class="table">
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
            <div class="col col-3">
              {{ readableTime(device.lastTurnedOff) }}
            </div>
            <div class="col col-4">{{ device.usage }} units</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-holder {
  background: url("@/assets/bg/photo3.png") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-blend-mode: multiply;
}
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

.table-container {
  padding-top: 3rem;
  height: 85vh;
}
</style>
