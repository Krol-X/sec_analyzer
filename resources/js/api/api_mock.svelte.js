import { fake_api_method } from './_.js'

let brokers = $state([
  { id: 1, name: 'Tinkoff' },
  { id: 2, name: 'Sberbank' },
])
let brokers_next_id = brokers.length + 1

export const brokers_mock = {
  create: fake_api_method('post', 'brokers', (params) => {
    brokers.push({
      id: brokers_next_id++,
      name: params.name
    })
    return brokers[brokers.length - 1]
  }),
  read: fake_api_method('get', 'brokers', () => brokers),
  update: fake_api_method('put', 'brokers', (params, url_id) => {
    const index = brokers.findIndex(it => it.id === url_id)
    if (index !== -1) {
      const orig = brokers[index]
      brokers[index] = Object.assign(orig, {
        ...orig,
        name: params?.name ?? orig.name
      })
      return brokers[index]
    } else {
      return null
    }
  }),
  remove: fake_api_method('delete', 'brokers', (params, url_id) => {
    const index = brokers.findIndex(it => it.id === url_id)
    if (index !== -1) {
      brokers.splice(index, 1)
    }
    return { 'ok': true }
  })
}



let profiles = $state([
  { id: 1, name: 'Профиль 1', broker_id: 1 },
  { id: 2, name: 'Профиль 2', broker_id: 1 },
  { id: 3, name: 'Профиль 3', broker_id: 2 },
])
let profiles_next_id = profiles.length + 1

export const profiles_mock = {
  create: fake_api_method('post', 'profiles', (params) => {
    profiles.push({
      id: profiles_next_id++,
      name: params.name,
      broker_id: params.broker_id
    })
    return profiles[profiles.length - 1]
  }),
  read: fake_api_method('get', 'profiles', (params) => {
    return profiles.map(profile => {
      const broker = brokers.find(b => b.id === profile.broker_id)
      return {
        ...profile,
        broker: broker ? { id: broker.id, name: broker.name } : null
      }
    })
  }),
  update: fake_api_method('put', 'profiles', (params, url_id) => {
    const index = profiles.findIndex(it => it.id === url_id)
    if (index !== -1) {
      const orig = profiles[index]
      profiles[index] = {
        ...orig,
        name: params?.name ?? orig.name,
        broker_id: params?.broker_id ?? orig.broker_id
      }
      return profiles[index]
    } else {
      return null
    }
  }),
  remove: fake_api_method('delete', 'profiles', (params, url_id) => {
    const index = profiles.findIndex(it => it.id === url_id)
    if (index !== -1) {
      profiles.splice(index, 1)
    }
    return { 'ok': true }
  })
}



let billings = $state([
  { id: 1, profile_id: 1, name: 'Основной счёт' },
  { id: 2, profile_id: 1, name: 'Второй счёт' },
  { id: 3, profile_id: 1, name: 'Тестовый счёт' },
  { id: 4, profile_id: 2, name: 'Основной счёт' },
])
let billings_next_id = billings.length + 1

const calculateSecurities = (billing) => {
  const secs = securities.filter(security => security.billing_id === billing.id)
  const count = secs.reduce((acc, curr) => acc + curr.count, 0)
  const value = secs.reduce((acc, curr) => acc + curr.count * curr.value, 0)
  return { count, value }
}

export const billings_mock = {
  create: fake_api_method('post', 'billings', (params) => {
    billings.push({
      id: billings_next_id++,
      profile_id: params.profile_id,
      name: params.name
    })
    return billings[billings.length - 1]
  }),
  read: fake_api_method('get', 'billings', (params) => {
    return billings
      .filter(billing => billing.profile_id === params.profile_id)
      .map(billing => ({
        ...billing,
        securities: calculateSecurities(billing)
      }))
  }),
  update: fake_api_method('put', 'billings', (params, url_id) => {
    const index = billings.findIndex(billing => billing.id === url_id)
    if (index !== -1) {
      const orig = billings[index]
      billings[index] = {
        ...billings[index],
        name: params?.name ?? orig.name
      }
      return billings[index]
    } else {
      return null
    }
  }),
  remove: fake_api_method('delete', 'billings', (params, url_id) => {
    const index = billings.findIndex(billing => billing.id === url_id)
    if (index !== -1) {
      billings.splice(index, 1)
    }
    return { 'ok': true }
  })
}



let securities = $state([
  { id: 1, billing_id: 1, name: 'Ценная бумага 1', count: 2, value: 200 },
  { id: 2, billing_id: 1, name: 'Ценная бумага 2', count: 1, value: 400 },
  { id: 3, billing_id: 1, name: 'Ценная бумага 3', count: 1, value: 200 },
  { id: 4, billing_id: 2, name: 'Ценная бумага 4', count: 1, value: 150 },
  { id: 5, billing_id: 2, name: 'Ценная бумага 5', count: 1, value: 150 },
])
let securities_next_id = securities.length + 1

export const securities_mock = {
  create: fake_api_method('post', 'securities', (params) => {
    securities.push({
      id: securities_next_id++,
      billing_id: params.billing_id,
      name: params.name,
      count: params.count || 0,
      value: params.value || 0
    })
    return securities[securities.length - 1]
  }),
  read: fake_api_method('get', 'securities', (params) => {
    return securities.filter(security => security.billing_id === params.billing_id)
  }),
  update: fake_api_method('put', 'securities', (params, url_id) => {
    const index = securities.findIndex(security => security.id === url_id)
    if (index !== -1) {
      const orig = securities[index]
      securities[index] = {
        ...orig,
        name: params?.name ?? orig.name,
        count: params?.count ?? orig.count,
        value: params?.value ?? orig.value
      }
      return securities[index]
    } else {
      return null
    }
  }),
  remove: fake_api_method('delete', 'securities', (params, url_id) => {
    const index = securities.findIndex(security => security.id === url_id)
    if (index !== -1) {
      securities.splice(index, 1)
    }
    return { 'ok': true }
  })
}
