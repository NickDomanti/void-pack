<script setup lang="ts">
import { onMounted } from 'vue'
import { getAudio } from '../utils'
import hoverSound from '../assets/audio/hover.mp3'
import successSound from '../assets/audio/success.mp3'

onMounted(() => {
  document
    .querySelector('.home')
    ?.querySelectorAll('a')
    .forEach((el) => {
      el.onmouseenter = () => getAudio(hoverSound, 0.4).play()
      el.onclick = () => getAudio(successSound, 0.8).play()
    })
})
</script>

<template>
  <div class="home dark-bg glare">
    <RouterLink to="/intel">I. Intel & Espionage</RouterLink>
    <RouterLink to="/trading">II. Intra-Organization Trading</RouterLink>
    <RouterLink to="/about/history">III. History</RouterLink>
    <RouterLink to="/about/manifesto">IV. Manifesto</RouterLink>
    <RouterLink to="/about/charter">V. Charter</RouterLink>
  </div>
</template>

<style scoped>
.home {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--clr-red2);
  padding: 1rem;
}

a {
  display: block;
  border: 1px solid var(--clr-red2);
  padding: 1rem 3rem;
  will-change: background-color;
  transition: background-color 100ms;
  text-decoration: none;
  text-shadow: none;
}

a:hover {
  background-color: var(--clr-red3);
}
</style>
