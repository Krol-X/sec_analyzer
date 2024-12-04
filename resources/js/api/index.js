import { brokers, profiles, billings, securities } from './api.js'
import { brokers_mock, profiles_mock, billings_mock, securities_mock } from './api_mock.svelte.js'

const is_test = true

export default {
  brokers: is_test? brokers_mock: brokers,
  profiles: is_test? profiles_mock: profiles,
  billings: is_test? billings_mock: billings,
  securities: is_test? securities_mock: securities,
}
