<script setup lang="ts">
import { contentStore } from '../store/content'
</script>

<template>
  <div class="about dark-bg glare">
    <RouterLink to="/" class="go-back"><< Go back to directory</RouterLink>
    <div
      class="about-content"
      v-html="contentStore[$route.params.content as keyof typeof contentStore]"
    ></div>
  </div>
</template>

<style scoped>
.about {
  border: 1px solid var(--clr-red2);
  max-height: 100%;
  padding: 0.5rem;
  display: flex;
  box-sizing: border-box;
  position: relative;
}

.go-back {
  position: absolute;
  top: -3.5rem;
  right: 0;
}

.about-content {
  padding: 0.5rem;
  overflow: auto;
}

.about-content :deep(.markitup-text) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-content :deep(.markitup-text *) {
  margin: 0;
}

.about-content::-webkit-scrollbar {
  width: 0.5rem;
}

.about-content::-webkit-scrollbar-track {
  background: var(--clr-red4);
}

.about-content::-webkit-scrollbar-thumb {
  background: var(--clr-red2);
}

.about-content::-webkit-scrollbar-thumb:hover {
  background: var(--clr-red1);
}
</style>
../store/store
