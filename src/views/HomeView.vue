<template>
  <header>
    <h1>Welcome to Smart Home Automation</h1>
    <p>username</p>
  </header>
  <div class="container-holder">
    <div class="text-container">
      <p class="home top">
        You can monitor and control all your home devices and appliances
      </p>
      <p class="home">
        All data are stored in a decentralized blockchain so that you don't lose
        any of the information and no perpetrator can steal data from you
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-holder {
  background: url("@/assets/bg/photo4.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-blend-mode: multiply;
  height: 85vh;

  display: flex;
  align-items: center;
}

.text-container {
  margin-inline: auto;
  padding: 1rem;

  border-radius: 9px;

  width: 60rem;

  background-color: var(--color-dark-1);
}
p.home {
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-light-1);
}

p.top {
  margin-bottom: 3rem;
}
</style>
