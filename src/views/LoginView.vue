<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = useUserStore();

const email = ref("");
const password = ref("");

const handleLogIn = async () => {
  const data = {
    email: email.value,
    password: password.value,
  };

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
    if (json.data.messages === "Login success.") {
      user.username = email.value;
      router.push({ name: "Home" });
    }
  } catch (error) {
    console.error(error);
  }

  email.value = "";
  password.value = "";
};
</script>

<template>
  <div class="container">
    <div class="form-holder">
      <h1>Login</h1>
      <form>
        <div class="fields-holder">
          <div>
            Email:
            <input v-model="email" type="email" placeholder="example@xyz.com" />
          </div>
          <div>
            Password:
            <input v-model="password" type="password" placeholder="Password" />
          </div>
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
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: url("@/assets/bg/photo5.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-blend-mode: multiply;
  width: 100vw;
}
</style>
