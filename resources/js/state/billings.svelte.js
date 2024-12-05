import api from '../api'
import { profiles } from './profiles.svelte.js'

export class Billings {
  #billings = $state([])
  #current = $state(null)
  #edited = $state(null)
  #fields = $state({
    name: ''
  })
  #loading = $state(false)

  async update() {
    this.#loading = true
    const new_billings = await api.billings.read(null, { profile_id: profiles.current })
    if (new_billings) {
      this.#billings = new_billings
    }
    this.#loading = false
  }

  get is_loading() {
    return this.#loading
  }

  get list() {
    return this.#billings
  }

  get current() {
    return this.#current
  }
  set current(value) {
    this.#current = value
  }

  get edited() {
    return this.#edited
  }
  set edited(value) {
    this.#edited = value
  }

  get fields() {
    return this.#fields
  }
  set fields(value) {
    this.#fields = value
  }

  async save() {
    let new_billing = null
    const fields = {
      ...this.fields,
      profile_id: profiles.current
    }
    if (this.edited === null) {
      new_billing = await api.billings.create(null, fields)
    } else {
      new_billing = await api.billings.update(this.edited.id, fields)
    }
    if (new_billing) {
      await this.update()
    }
  }

  async remove(billing_id) {
    const response = await api.billings.remove(billing_id)
    return response.ok === true
  }
}

export const billings = new Billings()
