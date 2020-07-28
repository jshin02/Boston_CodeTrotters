import React, { useState, useEffect } from 'react'
import { showGrad } from '../../api/grad'

const UpdateProfile = (props) => {
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
  useEffect(() => {
    showGrad(props.user._id)
      .then(res => {
        console.log(res)
        setPerson(res.data.grad)
      })
      .catch(() => console.log('could not show user'))
  })
  // const handleChange = event => {
  //   event.persist()
  //   setPerson(() => {
  //     const updatedField = { [event.target.name]: event.target.value }
  //     const newInput = Object.assign({}, person, updatedField)
  //     return newInput
  //   })
  // }
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   createGrad(person)
  //     .then(res => res.status(201).json(res))
  //     .then(() => console.log('created a person'))
  //     .catch(() => console.log('did not create a person'))
  // }
  return (
    <div>
      <h2>Update Your Profile</h2>
      <h3>Updating {person.name}</h3>
    </div>
  )
}

export default UpdateProfile
