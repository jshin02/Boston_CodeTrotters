import apiUrl from '../apiConfig'
import axios from 'axios'

export const createGrad = person => {
  console.log(person)
  return axios({
    method: 'POST',
    url: apiUrl + '/grads',
    data: {
      person: person
    }
  })
}

// Index grads (GET)
export const getGrads = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/grads'
  })
}
