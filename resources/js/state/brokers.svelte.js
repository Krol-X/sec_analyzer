import api from '../api'
import { billings } from './billings.svelte.js'

export class Brokers {
  #brokers = $state([])
  #loading = $state(false)

  async update() {
    this.#loading = true
    const new_brokers = await api.brokers.read(null, { billing_id: billings.current })
    if (new_brokers) {
      this.#brokers = new_brokers
    }
    this.#loading = false
  }

  get is_loading() {
    return this.#loading
  }

  get list() {
    return this.#brokers
  }
}

export const brokers = new Brokers()
