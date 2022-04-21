<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { UserDetails } from "@/models/userDetails.model";

const router = useRouter();

const newUser = ref({} as UserDetails);

const handleSignUp = async () => {
  try {
    const res = await fetch("http://localhost:5000/user/userCreate", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(newUser.value),
    });

    const json = await res.json();

    if (json.message === "Data added successfully") {
      router.push({ name: "Login" });
    }
  } catch (error) {
    console.error(error);
  }

  newUser.value = {} as UserDetails;
};
</script>

<template>
  <div>
    <form>
      <p>Name: <input v-model="newUser.name" type="text" /></p>
      <p>Phone Code: <input v-model="newUser.phCode" type="text" /></p>
      <p>Phone: <input v-model="newUser.phone" type="text" /></p>
      <p>Email: <input v-model="newUser.email" type="email" /></p>
      <p>Password: <input v-model="newUser.password" type="password" /></p>
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
