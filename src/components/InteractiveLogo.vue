<script setup lang="ts">
import { ref } from 'vue'
import sound from '../assets/audio/welcome.mp3'
import { getAudio } from '../utils'
import { AccessStatus } from '../types/access-status'

defineProps<{
  sidelined: boolean
}>()

const emit = defineEmits<{
  (e: 'active-toggled', active: AccessStatus): void
}>()

const audio = getAudio(sound, 0.5)
const active = ref(false)

function activate() {
  audio.pause()
  audio.currentTime = 0
  audio.play()

  active.value = !active.value
  emit('active-toggled', active.value ? 'requested' : 'denied')
}
</script>

<template>
  <div :class="['logo', { active, sidelined }]">
    <div class="logo-mask" @click="activate">
      <img src="../assets/img/logo.png" class="logo-img" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  --mask-size: 20svw;
  --img-size: calc(var(--mask-size) + 100px);

  height: var(--img-size);
  width: var(--img-size);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  user-select: none;
  z-index: 1;
  will-change: rotate, left;
  transition: rotate 1100ms, left 1000ms;
}

.logo.active {
  rotate: 180deg;
  left: 35%;
}

.logo.active.sidelined {
  rotate: 360deg;
  left: 20%;
  transition-delay: 500ms;
}

.logo-mask {
  height: var(--mask-size);
  width: var(--mask-size);
  border-radius: 50%;
  position: relative;
  z-index: 2;
}

.logo-img {
  height: var(--img-size);
  position: absolute;
  border-radius: 50%;
  top: 49.5%;
  left: 49.5%;
  translate: -50% -50%;
  cursor: pointer;
  will-change: filter;
  transition: filter 300ms;
}

.logo-mask:hover .logo-img,
.logo.active .logo-img {
  filter: drop-shadow(0 0 2em var(--clr-red1));
}
</style>
