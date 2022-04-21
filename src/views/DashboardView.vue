<script setup lang="ts">
import { useDevicesStore } from "@/store/index";

const store = useDevicesStore();
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
