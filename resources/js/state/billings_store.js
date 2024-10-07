import { writable } from 'svelte/store'
import api from "@/api"

export function createBillingsStore() {
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    set,
    update,
    loadItems: async () => {
      const response = await api.billings_mock.read()
      set(response?.data ?? [])
    }
  }
}
