<script setup lang="ts">
import { ref } from 'vue'
import VirtualKeyboard from '../components/VirtualKeyboard.vue'

const input = ref('')
const correctInput = ref<boolean>()
const animateResult = ref(false)

function showResult(correct: boolean) {
  correctInput.value = correct

  // restart animation
  animateResult.value = false
  setTimeout(() => {
    animateResult.value = true
  }, 100)
}
</script>

<template>
  <div
    :class="[
      'home',
      {
        'result': correctInput != null,
        'result--correct': correctInput,
        'result--wrong': correctInput === false,
        'result--animated': correctInput != null && animateResult
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
  animation: glare-light-up 500ms ease 300ms;
  animation-fill-mode: forwards;
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
}

.home.result--wrong::before {
  content: 'Wrong Passcode';
}

.home.result--wrong.result--animated::before {
  animation: fading-result 2s linear;
  animation-fill-mode: forwards;
}

.home.result--correct::before {
  content: 'Correct Passcode';
}

.input {
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
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
