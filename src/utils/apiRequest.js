import axios from 'axios'

function headers () {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
}

function headersFormData () {
  return {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
}

const request = (callback) => {
  return new Promise((resolve, reject) => {
    callback
      .then(data => resolve(data))
      .catch(e => reject(handleError(e)))
  })
}

const handleError = (e) => {
  if (!e.response) return { _e: 'Unknown Error' }
  return e
}

export default class apiRequest {
  static get (path, noBaseApiUrl) {
    return request(axios.get(noBaseApiUrl ? path : `${process.env.VUE_APP_BASE_API_URL}/${path}`, headers()))
  }

  static post (path, data, noBaseApiUrl) {
    return request(axios.post(noBaseApiUrl ? path : `${process.env.VUE_APP_BASE_API_URL}/${path}`, data, headers()))
  }

  static put (path, data, noBaseApiUrl) {
    return request(axios.put(noBaseApiUrl ? path : `${process.env.VUE_APP_BASE_API_URL}/${path}`, data, headers()))
  }

  static delete (path, noBaseApiUrl) {
    return request(axios.delete(noBaseApiUrl ? path : `${process.env.VUE_APP_BASE_API_URL}/${path}`, headers()))
  }

  static postFormData (path, data, noBaseApiUrl) {
    return request(axios.post(noBaseApiUrl ? path : `${process.env.VUE_APP_BASE_API_URL}/${path}`, data, headersFormData()))
  }
}
