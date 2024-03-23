<script setup lang="ts">
import { onMounted, ref } from 'vue'
import InteractiveLogo from './components/InteractiveLogo.vue'
import { useRouter } from 'vue-router'

const showRouterView = ref(false)
const router = useRouter()

onMounted(() => router.push('/'))
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
        <div class="main-content">
          <Transition mode="out-in">
            <component v-if="showRouterView" :is="Component" />
          </Transition>
        </div>
      </RouterView>
    </main>
    <footer>
      <h3>Click on the logo to proceed</h3>
      <p>Fibonacci is the key</p>
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
  text-transform: uppercase;
  user-select: none;
}

h1,
h3 {
  font-family: Glitch;
  text-shadow: 0 0 20px var(--clr-red1);
  margin: 0;
}

footer p {
  margin: 0;
  text-align: center;
}

main {
  width: 100svw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  translate: 75% 0;
  height: 50svh;
  width: 30svw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content > .glare {
  animation: glare-light-up 500ms ease 300ms;
  animation-fill-mode: forwards;
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

@keyframes glare-light-up {
  100% {
    box-shadow: 0 0 2rem 0.25rem var(--clr-red1);
  }
}
</style>
