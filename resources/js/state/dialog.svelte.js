import ProfileForm from '@/components/app/forms/ProfileForm.svelte'
// import BillingForm from '@/components/app/forms/BillingForm.svelte'
// import SecurityForm from '@/components/app/forms/SecurityForm.svelte'

export class Dialog {
  #form = $state(null)
  #data = $state({})
  #is_new = $state(true)

  openProfile(data, is_new) {
    this.#form = ProfileForm
    this.#data = data
    this.#is_new = is_new
  }

  // openBilling(data, is_new) {
  //   this.#form = BillingForm
  //   this.#data = data
  //   this.#is_new = is_new
  // }

  // openSecurity(data, is_new) {
  //   this.#form = SecurityForm
  //   this.#data = data
  //   this.#is_new = is_new
  // }

  close() {
    this.#form = null
  }

  get form() {
    return this.#form
  }

  get data() {
    return this.#data
  }

  get is_new() {
    return this.#is_new
  }

  get is_opened() {
    return this.#form !== null
  }
}

export const dialog = new Dialog()
