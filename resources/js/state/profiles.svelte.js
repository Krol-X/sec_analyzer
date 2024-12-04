import api from '../api'

export class Profiles {
  #profiles = $state([])
  #current = $state(null)
  #edited = $state(null)
  #fields = $state({
    name: '',
    broker_id: null
  })
  #loading = $state(false)

  async update() {
    this.#loading = true
    const new_profiles = await api.profiles.read()
    if (new_profiles) {
      this.#profiles = new_profiles
    }
    this.#loading = false
  }

  get is_loading() {
    return this.#loading
  }

  get list() {
    return this.#profiles
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
    let new_profile = null
    if (this.edited === null) {
      new_profile = await api.profiles.create(null, this.fields)
    } else {
      new_profile = await api.profiles.update(this.edited.id, this.fields)
    }
    if (new_profile) {
      await this.update()
    }
  }

  async remove(profile_id) {
    const response = await api.profiles.remove(profile_id)
    return response.ok === true
  }
}

export const profiles = new Profiles()
