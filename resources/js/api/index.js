import { api_method, fake_api_method } from './_.js'

export const brokers = {
  read: api_method('get', 'brokers')
}
export const brokers_mock = {
  read: fake_api_method('get', 'brokers', () => [
    { id: 1, name: 'Tinkoff' },
    { id: 2, name: 'Sberbank' },
  ])
}

export const profiles = {
  read: api_method('get', 'profiles')
}
export const profiles_mock = {
  read: fake_api_method('get', 'profiles', () => ({
    data: [
      {name: 'Профиль 1', brokerId: 1, brokerName: 'Tinkoff'},
      {name: 'Профиль 2', brokerId: 1, brokerName: 'Tinkoff'},
      {name: 'Профиль 3', brokerId: 2, brokerName: 'Sberbank'},
    ]
  }))
}

export const billings = {
  read: api_method('get', 'billings')
}
export const billings_mock = {
  read: fake_api_method('get', 'billings', () => ({
    data: [
      {name: 'Основной счёт', value: '10.2K $', secCount: '20 вложений'},
      {name: 'Второй счёт', value: '0 $'},
      {name: 'Тестовый счёт', value: '1454 $', secCount: '5 вложений'},
      {name: 'Тестовый счёт 2', value: '1M $', secCount: '1 вложение'},
    ]
  }))
}

export default {
  brokers,
  brokers_mock,
  profiles,
  profiles_mock,
  billings,
  billings_mock,
}
