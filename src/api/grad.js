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

// using gradId
export const showGrad = id => {
  return axios({
    method: 'GET',
    url: apiUrl + '/grads/' + id
  })
}

export const updateGrad = (id, person) => {
  console.log('assigned?', id, person)
  return axios({
    method: 'PATCH',
    url: apiUrl + '/grads/' + person._id,
    data: {
      person: person
    }
  })
}
