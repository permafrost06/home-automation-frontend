<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const phCode = ref("");
const phone = ref<number>();
const email = ref("");
const password = ref("");

const handleSignUp = async () => {
  const data = {
    name: name.value,
    phCode: phCode.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  };

  try {
    const res = await fetch("http://localhost:5000/user/userCreate", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (json.message === "Data added successfully") {
      router.push({ name: "Login" });
    }
  } catch (error) {
    console.error(error);
  }

  name.value = "";
  phCode.value = "";
  phone.value = 0;
  email.value = "";
  password.value = "";
};
</script>

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
