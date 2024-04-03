import { ref } from 'vue'

export const contentStore = ref({
  history: '',
  manifesto: '',
  charter: '',
  async populateContent() {
    const apiKey = import.meta.env.VITE_RSI_API_KEY
    const url = `https://api.starcitizen-api.com/${apiKey}/v1/live/organization/VDPCK`

    const resp = await fetch(url)
    const {
      data: { history, manifesto, charter }
    } = await resp.json()

    this.history = history.html
    this.manifesto = manifesto.html
    this.charter = charter.html
  }
})
