<template>
  <div>
    <form>
      <div>
        <p>Email: <input v-model="email" type="email" placeholder="Email" /></p>
        <p>
          Password:
          <input v-model="password" type="password" placeholder="Passowrd" />
        </p>
      </div>
      <div>
        <button @click.stop.prevent="handleLogIn">Log In</button>
      </div>
    </form>
    <p>
      Don`t have an account ?
      <router-link :to="{ name: 'Signup' }">Sign Up here.</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");

    const logIn = () => {
      console.log(email.value, password.value);
    };

    return { email, password, logIn };
  },
});
</script>
