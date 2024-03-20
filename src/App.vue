<script setup lang="ts"></script>

<template>
  <div class="vp-page">
    <div class="bg-1"></div>
    <div class="bg-2"></div>

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100svh;
}

.vp-page > * {
  z-index: 2;
}

.bg-1,
.bg-2 {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.bg-1 {
  z-index: 0;
  background: url('./assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg-2 {
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
