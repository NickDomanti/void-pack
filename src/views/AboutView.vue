<script setup lang="ts">
import { store } from '../store'
</script>

<template>
  <div
    class="about dark-bg glare"
    v-html="store[$route.params.content as 'history' | 'manifesto' | 'charter']"
  ></div>
</template>

<style scoped>
.about {
  border: 1px solid var(--clr-red2);
  padding: 1rem;
  max-height: 100%;
  overflow: auto;
}

.about :deep(.markitup-text) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about :deep(a) {
  text-decoration: underline;
}

.about :deep(.markitup-text *) {
  margin: 0;
}

.about::-webkit-scrollbar {
  width: 0.5rem;
}

.about::-webkit-scrollbar-track {
  background: transparent;
}

.about::-webkit-scrollbar-thumb {
  background: var(--clr-red2);
}

.about::-webkit-scrollbar-thumb:hover {
  background: var(--clr-red1);
}
</style>
