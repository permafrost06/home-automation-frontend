<script setup lang="ts">
import { useDevicesStore } from "@/store/index";
import DeviceComponent from "../components/DeviceComponent.vue";

const store = useDevicesStore();

// debug mock data automatically generated
if (!store.devices.length) {
  store.createNewDevice({
    id: "1",
    name: "LivingRoom TV",
    type: "television",
  });
  store.createNewDevice({
    id: "2",
    name: "Kitchen Fridge",
    type: "fridge",
  });
  store.createNewDevice({
    id: "3",
    name: "Bedroom AC",
    type: "aircon",
  });
  store.createNewDevice({
    id: "4",
    name: "Guest Room Fan",
    type: "fan",
  });
}
</script>

<template>
  <header>
    <h1>Dashboard</h1>
    <p>username</p>
  </header>
  <div class="container-holder">
    <div class="container">
      <div class="devices-container">
        <template v-for="device in store.devices" :key="device.id">
          <DeviceComponent :device="device" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: block;
  text-align: center;

  width: auto;
}
.devices-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  margin-inline: auto;

  width: 80vw;

  background: var(--color-dark-1);

  padding: 1.5rem 0;

  border-radius: 1rem;
}
</style>
