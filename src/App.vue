<script setup lang="ts"></script>

<template>
  <div class="vp-page">
    <div class="mask"></div>

    <header>
      <h1>Void-Pack</h1>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <h3>Click on the logo to proceed</h3>
    </footer>
  </div>
</template>

<style scoped>
.vp-page {
  position: relative;
  z-index: 0;
  background: url('./assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100svh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.vp-page > :not(.mask) {
  z-index: 2;
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;

  background: black url('./assets/gridbg.png') repeat center;
  opacity: 0.7;
}

header,
footer {
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'glitch';
  color: var(--clr-red1);
  text-shadow: 0 0 20px var(--clr-red1);
  text-transform: uppercase;
}
</style>
