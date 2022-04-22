<script setup lang="ts">
import { useDevicesStore } from "@/store/index";

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
  <div>
    Dashboard
    <div>
      <router-link :to="{ name: 'Add Device' }">Add new device</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'Details' }">See device details</router-link>
    </div>
    <div v-for="device in store.devices" :key="device.id">
      <p>{{ device.name }}</p>
      <p>{{ device.type }}</p>
      <p v-if="device.isDeviceOn">Device is on</p>
      <p v-else>Device is off</p>
      <button @click="store.turnDeviceOn(device.id)">Turn on</button>
      <button @click="store.turnDeviceOff(device.id)">Turn off</button>
    </div>
  </div>
</template>
