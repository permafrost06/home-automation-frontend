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
  <div class="container">
    <div class="form-holder">
      <h1>Registration</h1>
      <form>
        <div class="fields-holder">
          <div>
            Name:
            <input v-model="newUser.name" type="text" placeholder="John Doe" />
          </div>
          <div>
            Phone Code:
            <input v-model="newUser.phCode" type="text" placeholder="+91" />
          </div>
          <div>
            Phone:
            <input
              v-model="newUser.phone"
              type="text"
              placeholder="6625172839"
            />
          </div>
          <div>
            Email:
            <input
              v-model="newUser.email"
              type="email"
              placeholder="example@xyz.com"
            />
          </div>
          <div>
            Password:
            <input
              v-model="newUser.password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button @click.stop.prevent="handleSignUp">Sign Up</button>
          </div>
          <p>
            Already have an account?
            <router-link :to="{ name: 'Login' }">Log in here.</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
