import { ref } from 'vue'
import { UexCommodityRanking } from '../types/uex'

export function useUexService() {
  const baseApiUrl = 'https://ptu.uexcorp.space/api'
  const loading = ref(false)

  async function fetchData(endpoint: string) {
    loading.value = true

    const resp = await fetch(baseApiUrl + '/' + endpoint, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_UEX_API_KEY}`
      }
    })
    const { data } = await resp.json()

    loading.value = false
    return data
  }

  const rankings = ref<UexCommodityRanking[]>()
  async function fetchRankings() {
    const data = await fetchData('commodities_ranking')
    rankings.value = data
  }

  return {
    loading,
    rankings,
    fetchRankings
  }
}
