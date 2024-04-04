<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BlockedAccess from './components/BlockedAccess.vue'
import Decryption from './components/Decryption.vue'
import InteractiveLogo from './components/InteractiveLogo.vue'
import { contentStore } from './store/content'
import { AccessStatus } from './types/access-status'
import { useRoute } from 'vue-router'

const access = ref<AccessStatus>('denied')
const route = useRoute()

const enlargeRouterView = computed(
  () => !!route.meta.isLargeView && access.value === 'granted'
)

onMounted(async () => await contentStore.value.populateContent())
</script>

<template>
  <div class="page">
    <div class="bg-1"></div>
    <div class="bg-2"></div>

    <header>
      <h1>
        <RouterLink to="/" class="header-link">Void-Pack</RouterLink>
      </h1>
    </header>
    <main>
      <InteractiveLogo
        @active-toggled="(a) => (access = a)"
        :sidelined="enlargeRouterView"
      />

      <RouterView v-slot="{ Component }">
        <div :class="['main-content-wrapper', { large: enlargeRouterView }]">
          <div class="main-content">
            <Transition mode="out-in">
              <BlockedAccess
                v-if="access === 'requested'"
                @correct-input="access = 'decrypting'"
              />
              <Decryption
                v-else-if="access === 'decrypting'"
                @decryption-completed="access = 'granted'"
              />
              <component v-else-if="access === 'granted'" :is="Component" />
            </Transition>
          </div>
        </div>
      </RouterView>
    </main>
    <footer>
      <Transition>
        <div v-if="access === 'denied' || access === 'requested'">
          <h3>Click on the logo to proceed</h3>
          <p>Fibonacci is the key</p>
        </div>
      </Transition>
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

.header-link {
  text-decoration: none;
}

footer p {
  margin: 0;
  text-align: center;
}

main {
  width: 100svw;
  flex-grow: 1;
  position: relative;
}

.main-content-wrapper {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 65%;
  translate: -50% -50%;
  height: 100%;
  width: 60svw;
  padding: 0 20svw;
  will-change: padding, top;
  transition: padding, top;
  transition-delay: 500ms;
}

.main-content-wrapper.large {
  padding: 0;
}

.main-content {
  height: 100%;
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
./store/store
