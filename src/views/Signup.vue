<template>
  <div>
    <form>
      <p>Name: <input v-model="name" type="text" /></p>
      <p>
        Phone Code:
        <select v-model="phCode">
          <option value="+91">+91</option>
        </select>
      </p>
      <p>Phone: <input v-model="phone" type="number" /></p>
      <p>Email: <input v-model="email" type="email" /></p>
      <p>Password: <input v-model="password" type="password" /></p>
      <div>
        <button @click.stop.prevent="handleSignUp">Sign Up</button>
      </div>
      <p>
        Already have an account?
        <router-link :to="{ name: 'Login' }">Log in here.</router-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("");
    const phCode = ref("");
    const phone = ref<number>();
    const email = ref("");
    const password = ref("");

    const handleSignUp = () => {
      console.log(
        name.value,
        phCode.value,
        phone.value,
        email.value,
        password.value
      );
    };

    return { name, phCode, phone, email, password, handleSignUp };
  },
});
</script>
