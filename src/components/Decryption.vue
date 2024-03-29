<script setup lang="ts">
import { onMounted, ref } from 'vue'
import decryptionSound from '../assets/audio/decryption.mp3'
import successSound from '../assets/audio/success.mp3'
import { delay, getAudio } from '../utils'

const glare = ref(false)

const emit = defineEmits<{
  (e: 'decryption-completed'): void
}>()

const decryptionAudio = getAudio(decryptionSound, 0.5)
let decryptionSkipped = false

onMounted(async () => {
  window.addEventListener('keydown', skipDecryption)

  decryptionAudio.play()
  await delay(13.5)

  if (decryptionSkipped) return
  window.removeEventListener('keydown', skipDecryption)

  glare.value = true
  await delay(0.8)

  getAudio(successSound, 0.8).play()
  await delay(1)

  emit('decryption-completed')
})

function skipDecryption(ev: KeyboardEvent) {
  if (ev.key !== 's') return

  decryptionSkipped = true
  decryptionAudio.pause()
  window.removeEventListener('keydown', skipDecryption)

  emit('decryption-completed')
}
</script>

<template>
  <div :class="['decryption', { glare }]">
    <div class="progress-wrapper dark-bg">
      <div class="progress"></div>
    </div>
  </div>
</template>

<style scoped>
.decryption {
  flex-grow: 1;
}

.progress-wrapper {
  border: 1px solid var(--clr-red2);
  position: relative;
}

.glare .progress-wrapper:before {
  content: 'Decryption Complete';
  position: absolute;
  top: -4rem;
  left: 50%;
  translate: -50% 0;
  font-family: Pixel;
  font-size: 1.75rem;
  white-space: nowrap;
  opacity: 0;
  animation: message-show 100ms linear 800ms;
  animation-fill-mode: forwards;
}

.progress-wrapper:after {
  content: 'Decryption';
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 2;
}

.progress {
  height: 1.5rem;
  background-color: var(--clr-red3);
  will-change: scale;
  transition: scale 200ms;
  animation: progressing 13s ease-in-out;
  z-index: 1;
}

@keyframes progressing {
  0% {
    margin-right: 100%;
  }
  100% {
    margin-right: 0;
  }
}

@keyframes message-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
