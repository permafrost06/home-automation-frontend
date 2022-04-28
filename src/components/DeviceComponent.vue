<script setup lang="ts">
import type { Device } from "@/models/device.model";
import IconComponent from "./IconComponent.vue";
import { useDevicesStore } from "@/store";
import { ref } from "vue";

const store = useDevicesStore();

const props = defineProps<{
  device: Device;
}>();

const hover = ref(false);
</script>

<template>
  <div
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="device-container"
  >
    <h2>{{ props.device.name }}</h2>
    <div
      class="pwr-button"
      v-if="hover && props.device.isDeviceOn"
      @click="store.turnDeviceOff(props.device.id)"
    >
      <img src="@/assets/pwr-off.svg" alt="" />
    </div>
    <div
      class="pwr-button"
      v-if="hover && !props.device.isDeviceOn"
      @click="store.turnDeviceOn(props.device.id)"
    >
      <img src="@/assets/pwr-on.svg" alt="" />
    </div>
    <IconComponent
      class="device-icon"
      :device-type="props.device.type"
      :isDeviceOn="props.device.isDeviceOn"
    />
    <div class="device-state">
      <span v-if="props.device.isDeviceOn">Device is On</span>
      <span v-else>Device is Off</span>
    </div>
  </div>
</template>

<style lang="scss">
.device-container {
  display: inline-block;

  max-width: 200px;

  color: var(--color-light-1);
  background: var(--color-light-1);

  text-align: center;

  border: 1px solid var(--color-dark-2);
  border-radius: 1rem;

  padding: 1rem 2rem;
}

.pwr-button {
  position: absolute;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.66);
  max-width: 133px;

  img {
    width: 100%;
  }
}

.device-state {
  font-weight: 700;
}

h2 {
  font-size: 1rem;
}
</style>
