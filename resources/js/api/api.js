import { api_method } from './_.js'

export const brokers = {
  create: api_method('post', 'brokers'),
  read: api_method('get', 'brokers'),
  update: api_method('put', 'brokers'),
  delete: api_method('delete', 'brokers')
}

export const profiles = {
  create: api_method('post', 'profiles'),
  read: api_method('get', 'profiles'),
  update: api_method('put', 'profiles'),
  delete: api_method('delete', 'profiles')
}

export const billings = {
  create: api_method('post', 'billings'),
  read: api_method('get', 'billings'),
  update: api_method('put', 'billings'),
  delete: api_method('delete', 'billings')
}

export const securities = {
  create: api_method('post', 'securities'),
  read: api_method('get', 'securities'),
  update: api_method('put', 'securities'),
  delete: api_method('delete', 'securities')
}
