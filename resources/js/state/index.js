import { createBillingsStore } from './billings_store'
import { createProfilesStore } from './profiles_store'
import { createDialogStore } from './dialog_store'

export const state = {
  billings: createBillingsStore(),
  profiles: createProfilesStore(),
  dialog: createDialogStore(),
}
