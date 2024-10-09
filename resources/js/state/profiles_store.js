import { writable } from 'svelte/store'
import api from "@/api"

export function createProfilesStore() {
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    set,
    update,
    loadItems: async () => {
      const response = await api.profiles.read()
      set(response?.data ?? [])
    },
    deleteItem: async (id) => {
      await api.profiles.delete(id)
      update(_ => _.filter(it => it.id != id))
    },
    updateItem: async (values) => {
      const id = values?.id
      if (id !== undefined) {
        await api.profiles.update(id, values)
        update(_ => {
          const idx = _.findIndex((it) => it.id == id)
          _[idx] = Object.assign({}, values)
          return _
        })
      } else {
        const {data: profile} = await api.profiles.create(null, values)
        update(_ => {
          _.push(Object.assign({}, profile))
          return _
        })
      }
    }
  }
}
