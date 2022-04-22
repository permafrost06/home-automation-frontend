<script setup lang="ts">
import type { Device } from "@/models/device.model";
import IconComponent from "./IconComponent.vue";
import { useDevicesStore } from "@/store";

const store = useDevicesStore();

const props = defineProps<{
  device: Device;
}>();
</script>

<template>
  <div class="device-container">
    <h2>{{ props.device.name }}</h2>
    <IconComponent
      :device-type="props.device.type"
      :isDeviceOn="props.device.isDeviceOn"
    />
    <button
      class="cancel"
      v-if="props.device.isDeviceOn"
      @click="store.turnDeviceOff(props.device.id)"
    >
      Turn Off
    </button>
    <button v-else @click="store.turnDeviceOn(props.device.id)">Turn On</button>
  </div>
</template>

<style lang="scss">
.device-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
