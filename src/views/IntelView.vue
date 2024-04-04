<script setup lang="ts">
import { onMounted } from 'vue'
import { useUexService } from '../services/uex-service'

const { rankings, fetchRankings } = useUexService()

onMounted(async () => {
  await fetchRankings()
})
</script>

<template>
  <div v-if="rankings?.length" class="intel dark-bg glare">
    <div v-for="r in rankings" :key="r.id">
      {{ r.code }}
    </div>
  </div>
</template>

<style scoped>
.intel {
  padding: 1rem;
}
</style>
