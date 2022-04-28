<script setup lang="ts">
import { useDevicesStore } from "@/store/index";
import type { Device } from "@/models/device.model";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";

const user = useUserStore();

const username = ref(user.username);

const devicesStore = useDevicesStore();
const router = useRouter();

const newDevice = ref({} as Device);

const addDevice = () => {
  if (!newDevice.value.name || !newDevice.value.type) return;

  newDevice.value.id = uuidv4();

  devicesStore.createNewDevice(newDevice.value);

  newDevice.value = {} as Device;

  router.push({ name: "Dashboard" });
};

const setDeviceType = (type: "television" | "fridge" | "fan" | "aircon") => {
  newDevice.value.type = type;
};

const scanned = ref(false);

const scanForDevices = () => {
  setTimeout(() => {
    scanned.value = true;
  }, 2000);
};
</script>

<template>
  <header>
    <h1>Add New Device</h1>
    <p>{{ username }}</p>
  </header>
  <div class="container-holder">
    <div class="container">
      <div class="form-holder">
        <form>
          <div class="fields-holder">
            <div>
              Device name: <input type="text" v-model="newDevice.name" />
            </div>
            <div :class="['device-type', { hidden: !scanned }]">
              <div class="types-holder">
                <div>
                  <img
                    :class="{ selected: newDevice.type == 'aircon' }"
                    @click="setDeviceType('aircon')"
                    src="@/assets/aircon-on.svg"
                    alt="Air Conditioner"
                  />
                </div>
                <div>
                  <img
                    :class="{ selected: newDevice.type == 'fan' }"
                    @click="setDeviceType('fan')"
                    src="@/assets/fan-on.svg"
                    alt="Ceiling Fan"
                  />
                </div>
                <div>
                  <img
                    :class="{ selected: newDevice.type == 'fridge' }"
                    @click="setDeviceType('fridge')"
                    src="@/assets/fridge-on.svg"
                    alt="Refridgerator"
                  />
                </div>
                <div>
                  <img
                    :class="{ selected: newDevice.type == 'television' }"
                    @click="setDeviceType('television')"
                    src="@/assets/tv-on.svg"
                    alt="Television"
                  />
                </div>
              </div>
              <div style="text-align: center">
                Device type:
                <template v-if="newDevice.type == 'television'"
                  >Television</template
                >
                <template v-if="newDevice.type == 'fridge'"
                  >Refridgerator</template
                >
                <template v-if="newDevice.type == 'aircon'"
                  >Air Conditioner</template
                >
                <template v-if="newDevice.type == 'fan'">Ceiling Fan</template>
              </div>
            </div>
            <button
              :class="['cancel', { hidden: scanned }]"
              @click.stop.prevent="scanForDevices"
            >
              Scan for devices
            </button>
          </div>
          <div>
            <button :disabled="!scanned" @click.stop.prevent="addDevice">
              Add Device
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-holder {
  background: url("@/assets/bg/photo1.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-blend-mode: multiply;
}
.container {
  height: 85vh;
}

.hidden {
  display: none;
}

.types-holder {
  display: flex;

  margin: 0.5rem 0;

  flex-wrap: wrap;

  & > div {
    flex: 1 1 100px;
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 100px;
    margin-inline: auto;

    padding: 0.65rem;

    cursor: pointer;

    &:hover {
      background: var(--color-light-2);
    }

    &.selected {
      background: var(--color-light-2);
    }
  }
}

button:disabled {
  color: var(--color-med-1);
}
</style>
