import { writable } from 'svelte/store'
import api from "@/api"

export function createProfilesStore() {
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    set,
    update,
    loadItems: async () => {
      const response = await api.profiles_mock.read()
      set(response?.data ?? [])
    }
  }
}
