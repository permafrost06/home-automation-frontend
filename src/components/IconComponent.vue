<script setup lang="ts">
const props = defineProps<{
  deviceType: "television" | "aircon" | "fridge" | "fan";
  isDeviceOn: boolean | undefined;
}>();
</script>

<template>
  <div>
    <template v-if="props.deviceType == 'aircon'">
      <img v-if="isDeviceOn" src="@/assets/aircon-on.svg" alt="" />
      <img v-else src="@/assets/aircon-off.svg" alt="" />
    </template>
    <template v-if="props.deviceType == 'television'">
      <img v-if="isDeviceOn" src="@/assets/tv-on.svg" alt="" />
      <img v-else src="@/assets/tv-off.svg" alt="" />
    </template>
    <template v-if="props.deviceType == 'fridge'">
      <img v-if="isDeviceOn" src="@/assets/fridge-on.svg" alt="" />
      <img v-else src="@/assets/fridge-off.svg" alt="" />
    </template>
    <template v-if="props.deviceType == 'fan'">
      <img v-if="isDeviceOn" src="@/assets/fan-on.svg" alt="" />
      <img v-else src="@/assets/fan-off.svg" alt="" />
    </template>
  </div>
</template>
