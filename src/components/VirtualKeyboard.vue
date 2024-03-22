<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import SimpleKeyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

const model = useVModel(props, 'modelValue', emit)
watch(model, (newValue) => keyboard.value?.setInput(newValue))

const keyboardClass = 'keyboard'
const keyboard = ref<SimpleKeyboard>()

onMounted(() => {
  keyboard.value = new SimpleKeyboard(keyboardClass, {
    maxLength: 6,
    onChange(input) {
      model.value = input
    },
    onKeyPress(button) {
      if (button === '{bksp}') model.value = model.value.slice(0, -1)
    },
    layout: {
      default: ['7 8 9', '4 5 6', '1 2 3', '{bksp} 0 {enter}']
    },
    display: {
      '{bksp}': '⇦',
      '{enter}': '⏎'
    }
  })
})
</script>

<template>
  <div :class="keyboardClass"></div>
</template>

<style scoped>
.hg-theme-default {
  background: transparent;
  border: 1px solid var(--clr-red2);
  border-radius: 0;
}

.hg-theme-default :deep(.hg-row) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
}

.hg-theme-default :deep(.hg-button) {
  background: transparent;
  border: 1px solid var(--clr-red2);
  border-radius: 0;
  color: var(--clr-red1);
  margin: 0 !important;
  width: auto;
  font-family: Quantico;
  font-weight: bold;
}
</style>
