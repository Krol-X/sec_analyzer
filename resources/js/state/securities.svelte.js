import api from '../api'
import { billings } from './billings.svelte.js'

export class Securities {
  #securities = $state([])
  #current = $state(null)
  #edited = $state(null)
  #fields = $state({
    name: '',
    count: 0,
    value: 0
  })
  #loading = $state(false)

  async update() {
    this.#loading = true
    const new_securities = await api.securities.read(null, {billing_id: billings.current})
    if (new_securities) {
      this.#securities = new_securities
    }
    this.#loading = false
  }

  get is_loading() {
    return this.#loading
  }

  get list() {
    return this.#securities
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
    let new_security = null
    const fields = {
      ...this.fields,
      billing_id: billings.current
    }
    if (this.edited === null) {
      new_security = await api.securities.create(null, fields)
    } else {
      new_security = await api.securities.update(this.edited.id, fields)
    }
    if (new_security) {
      await this.update()
    }
  }

  async remove(security_id) {
    const response = await api.securities.remove(security_id)
    return response.ok === true
  }
}

export const securities = new Securities()
