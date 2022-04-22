<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
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
</style>
