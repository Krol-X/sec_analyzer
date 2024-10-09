import { writable } from 'svelte/store'
import api from "@/api"

export function createProfilesStore() {
  const { subscribe, set, update } = writable([])

  let new_id = 100 // todo

  return {
    subscribe,
    set,
    update,
    loadItems: async () => {
      const response = await api.profiles.read()
      set(response?.data ?? [])
    },
    deleteItem: async (id) => {
      // await api.profiles.delete(id)
      update(_ => _.filter(it => it.id != id))
    },
    updateItem: async (values) => {
      const id = values?.id
      if (id !== undefined) {
        // await api.profiles.update(id, values)
        update(_ => {
          const idx = _.findIndex((it) => it.id == id)
          _[idx] = Object.assign({}, values)
          return _
        })
      } else {
        // const new_id = await api.profiles.create(values)
        update(_ => {
          values.id = new_id
          _[new_id] = Object.assign({}, values)
          new_id++
          return _
        })
      }
    }
  }
}
