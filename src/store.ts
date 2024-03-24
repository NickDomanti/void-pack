import { ref } from 'vue'

export const store = ref({
  history: '',
  manifesto: '',
  charter: '',
  async populateContent() {
    const apiKey = import.meta.env.VITE_API_KEY
    const url = `https://api.starcitizen-api.com/${apiKey}/v1/auto/organization/VDPCK`

    const resp = await fetch(url)
    const {
      data: { history, manifesto, charter }
    } = await resp.json()

    this.history = history.html
    this.manifesto = manifesto.html
    this.charter = charter.html
  }
})
