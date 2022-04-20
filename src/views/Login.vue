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

    const handleLogIn = async () => {
      const data = {
        email: email.value,
        password: password.value,
      };

      email.value = "";
      password.value = "";

      try {
        const res = await fetch("http://localhost:5000/user/userLogin", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          body: JSON.stringify(data),
        });

        const json = await res.json();
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };

    return { email, password, handleLogIn };
  },
});
</script>
