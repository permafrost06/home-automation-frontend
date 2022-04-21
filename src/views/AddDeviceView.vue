<script setup lang="ts">
import { useDevicesStore } from "@/store/index";
import type { Device } from "@/models/Device.model";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import { useRouter } from "vue-router";

const devicesStore = useDevicesStore();
const router = useRouter();

const newDevice = ref({} as Device);

const addDevice = () => {
  newDevice.value.id = uuidv4();

  devicesStore.createNewDevice(newDevice.value);

  newDevice.value = {} as Device;

  router.push({ name: "Dashboard" });
};
</script>

<template>
  <div>
    <router-link :to="{ name: 'Dashboard' }">Go to Dashboard</router-link>
    <form>
      <p>Device name: <input type="text" v-model="newDevice.name" /></p>
      <p>
        Device type:
        <select v-model="newDevice.type">
          <option value="television">Television</option>
          <option value="fridge">Fridge</option>
        </select>
      </p>
      <button @click.stop.prevent="addDevice">Add Device</button>
    </form>
  </div>
</template>
