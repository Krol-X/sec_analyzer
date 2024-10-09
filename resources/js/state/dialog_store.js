import { writable } from 'svelte/store'

import ProfileForm from '@/components/forms/ProfileForm.svelte'
import BillingForm from '@/components/forms/BillingForm.svelte'
import SecurityForm from '@/components/forms/SecurityForm.svelte'

export function createDialogStore() {
  const { subscribe, set, update } = writable(null)

  return {
    subscribe,
    set,
    update,
    openProfile: (data, is_new) => set({form: ProfileForm, data, is_new}),
    openBilling: (data, is_new) => set({form: BillingForm, data, is_new}),
    openSecurity: (data, is_new) => set({form: SecurityForm, data, is_new}),
    close: () => set(null)
  }
}
