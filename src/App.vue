<script setup lang="ts">
import { ref } from 'vue'
import InteractiveLogo from './components/InteractiveLogo.vue'

const showRouterView = ref(false)
</script>

<template>
  <div class="page">
    <div class="bg-1"></div>
    <div class="bg-2"></div>

    <header>
      <h1>Void-Pack</h1>
    </header>
    <main>
      <InteractiveLogo @active-toggled="(a) => (showRouterView = a)" />

      <RouterView v-slot="{ Component }">
        <Transition>
          <component
            v-if="showRouterView"
            :is="Component"
            class="main-content"
          />
        </Transition>
      </RouterView>
    </main>
    <footer>
      <h3>Click on the logo to proceed</h3>
    </footer>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100svh;
}

.page > * {
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
  background: url('./assets/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg-2 {
  z-index: 1;
  background: black url('./assets/img/gridbg.png') repeat center;
  opacity: 0.7;
}

header,
footer {
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'glitch';
  text-shadow: 0 0 20px var(--clr-red1);
  text-transform: uppercase;
  user-select: none;
}

main {
  width: 100svw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.main-content {
  translate: 75% 0;
}

.v-enter-active {
  transition: opacity 1s ease;
}

.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
