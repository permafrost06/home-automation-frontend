<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const hideNav = ref(true);

router.afterEach(() => {
  if (route.name == "Login" || route.name == "Signup") hideNav.value = true;
  else hideNav.value = false;
});
</script>

<template>
  <div>
    <nav :class="{ hidden: hideNav }">
      <ul>
        <router-link :to="{ name: 'Add Device' }"
          ><li>Add device</li></router-link
        >
        <router-link :to="{ name: 'Dashboard' }"
          ><li>Current connected devices</li></router-link
        >
        <router-link :to="{ name: 'Details' }"
          ><li>Device usage details</li></router-link
        >
        <router-link to="/"><li>Logout</li></router-link>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>

<style lang="scss">
:root {
  --color-dark-3: #081c15;
  --color-dark-2: #1b4332;
  --color-dark-1: #2d6a4f;

  --color-med-3: #40916c;
  --color-med-2: #52b788;
  --color-med-1: #74c69d;

  --color-light-3: #95d5b2;
  --color-light-2: #b7e4c7;
  --color-light-1: #d8f3dc;
}

* {
  box-sizing: border-box;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: var(--color-dark-2);
}

body {
  background: var(--color-med-2);

  margin: 0;
  padding: 0;
}

input {
  font-size: 1.25rem;
  border: 1px solid var(--color-light-3);
  border-radius: 7px;
  background: white;
  padding: 0.5rem;
}

button {
  color: var(--color-light-1);
  background: var(--color-dark-1);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
  cursor: pointer;

  &.cancel {
    color: var(--color-dark-2);
    border: 1px solid var(--color-dark-2);
    background-color: var(--color-light-1);
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}

@media (max-width: 428px) {
  input {
    font-size: 1rem;
  }
}

.container-holder {
  margin-top: 15vh;
  margin-left: 13.6rem;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  padding-top: 5rem;

  background-color: var(--color-dark-2);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 1rem;
      margin: 0.5rem 0;

      color: var(--color-light-1);

      &:hover {
        background-color: var(--color-dark-3);
      }
    }
  }
}

.hidden {
  display: none;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 15vh;

  text-align: center;

  z-index: 50;

  background-color: var(--color-dark-2);

  h1 {
    color: var(--color-light-1);
  }

  p {
    position: absolute;
    right: 0;
    top: 0;

    color: var(--color-light-1);

    padding: 1rem;
    padding-right: 2rem;
  }
}

.container {
  height: 100vh;
  width: 30rem;

  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.form-holder {
  width: auto;

  padding: 1rem 2rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--color-light-1);

  border-radius: 1rem;

  h1 {
    margin-inline: auto;
  }

  button {
    display: block;
  }
}

.fields-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    display: block;
    margin: 0.25rem auto;
  }
}

@media (max-width: 428px) {
  .login,
  .signup {
    width: auto;
  }

  .form-holder {
    padding: 0.5rem 1.5rem;
  }
}
</style>
