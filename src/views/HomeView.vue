<script setup lang="ts">
import { ref } from 'vue'
import VirtualKeyboard from '../components/VirtualKeyboard.vue'

const input = ref('')
const correctInput = ref<boolean>()

function showResult(correct: boolean) {
  correctInput.value = correct
  setTimeout(() => {
    correctInput.value = undefined
  }, 2000)
}
</script>

<template>
  <div
    :class="[
      'home',
      {
        'result': correctInput != null,
        'result--correct': correctInput,
        'result--wrong': correctInput === false
      }
    ]"
  >
    <div class="input">
      <span>{{ input }}</span>
      <div class="fake-tick"></div>
    </div>
    <VirtualKeyboard v-model="input" @input-entered="showResult" />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20svw;
  border: 1px solid var(--clr-red2);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  animation: glare-light-up 500ms ease 300ms 1 normal forwards;
  position: relative;
}

@media (max-width: var(--screen-lg)) {
  .home {
    width: 30svw;
  }
}

.home.result::before {
  position: absolute;
  top: -4rem;
  left: 50%;
  translate: -50% 0;
  font-family: Pixel;
  font-size: 1.75rem;
  white-space: nowrap;
  color: var(--clr-red1);
  animation: fading-result 2s linear;
  animation-iteration-count: 1;
}

.home.result--wrong::before {
  content: 'Wrong Passcode';
}

.home.result--correct::before {
  content: 'Correct Passcode';
}

.input {
  color: var(--clr-red1);
  border: 1px solid var(--clr-red2);
  padding: 0.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
}

.fake-tick {
  background-color: var(--clr-red1);
  height: 1rem;
  width: 1px;
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

@keyframes glare-light-up {
  100% {
    box-shadow: 0 0 2rem 0.25rem var(--clr-red1);
  }
}

@keyframes fading-result {
  100% {
    opacity: 0;
  }
}
</style>
