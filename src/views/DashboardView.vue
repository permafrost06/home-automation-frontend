<script setup lang="ts">
import { useDevicesStore } from "@/store/index";
import DeviceComponent from "../components/DeviceComponent.vue";

const store = useDevicesStore();

// debug mock data automatically generated
// if (!store.devices.length) {
//   store.createNewDevice({
//     id: "1",
//     name: "LivingRoom TV",
//     type: "television",
//   });
//   store.createNewDevice({
//     id: "2",
//     name: "Kitchen Fridge",
//     type: "fridge",
//   });
//   store.createNewDevice({
//     id: "3",
//     name: "Bedroom AC",
//     type: "aircon",
//   });
//   store.createNewDevice({
//     id: "4",
//     name: "Guest Room Fan",
//     type: "fan",
//   });
// }
</script>

<template>
  <div class="container">
    <h1 style="color: var(--color-light-1)">Dashboard</h1>
    <div class="devices-container">
      <template v-for="device in store.devices" :key="device.id">
        <DeviceComponent :device="device" />
      </template>
    </div>
    <div>
      <router-link :to="{ name: 'Add Device' }"
        ><button>Add new device</button></router-link
      >
      <router-link :to="{ name: 'Details' }"
        ><button>See device details</button></router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: block;
  text-align: center;

  width: 90vw;
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

button {
  margin: 1rem;
}
</style>
