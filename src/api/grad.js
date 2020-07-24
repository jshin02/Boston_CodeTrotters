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
