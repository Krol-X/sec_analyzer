import { api } from '@/config.json'

const base_url = api.url

export const api_method = (type, url) => {
  const request_url = `${base_url}/${url}`.replace('//', '/')
  return async (url_params = undefined, params = undefined, config = undefined) => {
    const url = url_params? `${request_url}/${url_params}`: request_url
    const response = await axios[type](url, params, config)
    return response.data
  }
}

export const fake_api_method = (type, url, fakeDataFn) => {
  const request_url = `${base_url}/${url}`.replace('//', '/')
  return async (url_params = undefined, params = undefined, config = undefined) => {
    const full_url = url_params ? `${request_url}/${url_params}` : request_url
    if (typeof fakeDataFn === 'function') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fakeDataFn(params))
        }, 500)
      })
    }
    const response = await axios[type](full_url, params, config)
    return response.data
  }
}
