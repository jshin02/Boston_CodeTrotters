import React, { useState } from 'react'
import AddGrad from './AddGrad'
import { createGrad } from '../../api/grad'

const Grads = () => {
  const [person, setPerson] = useState({
    name: '',
    identity: '',
    compliment: '',
    interests: '',
    linkedin: '',
    github: '',
    instagram: '',
    email: ''
  })

  const handleChange = event => {
    event.persist()
    setPerson(() => {
      const updatedField = { [event.target.name]: event.target.value }
      const newInput = Object.assign({}, person, updatedField)
      return newInput
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    createGrad(person)
      .then(res => res.status(201).json(res))
      .then(() => console.log('created a person'))
      .catch(() => console.log('did not create a person'))
  }
  return (
    <div>
      <h2>Add person here</h2>
      <AddGrad
        person={person}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </div>
  )
}

export default Grads
