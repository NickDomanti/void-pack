<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'active-toggled', active: boolean): void
}>()

const active = ref(false)

function activate() {
  active.value = !active.value
  emit('active-toggled', active.value)
}
</script>

<template>
  <div class="logo">
    <div class="logo-mask" @click="activate">
      <img src="../assets/img/logo.png" :class="['logo-img', { active }]" />
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
  user-select: none;
}

.logo-mask {
  height: var(--mask-size);
  width: var(--mask-size);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

.logo-img {
  height: var(--img-size);
  border-radius: 50%;
  will-change: filter, rotate, translate;
  transition: filter 300ms, rotate 1100ms, translate 1000ms;
  position: absolute;
  top: 49.5%;
  left: 49.5%;
  translate: -50% -50%;
}

.logo-mask:hover .logo-img,
.logo-img.active {
  filter: drop-shadow(0 0 2em var(--clr-red1));
}

.logo-img.active {
  rotate: 180deg;
  translate: -125% -50%;
}
</style>
