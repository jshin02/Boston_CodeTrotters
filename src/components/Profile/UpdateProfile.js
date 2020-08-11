import React, { useState, useEffect } from 'react'
import { showGrad, updateGrad } from '../../api/grad'
import AddGrad from '../Grads/AddGrad'
import { withRouter } from 'react-router-dom'

const UpdateProfile = (props) => {
  const [person, setPerson] = useState({
    name: '',
    identity: '',
    compliment: '',
    organization: '',
    interests: '',
    imageUrl: '',
    assignedToUser: null,
    adviceContent: '',
    messageContent: '',
    endorsements: '',
    linkedin: '',
    github: '',
    instagram: '',
    email: ''
  })
  useEffect(() => {
    console.log(props.user)
    showGrad(props.user.gradId)
      .then(res => {
        console.log(res)
        setPerson(res.data.grad)
      })
      .catch(() => console.log('could not show user'))
  }, [])
  const handleChange = event => {
    // event.persist()
    // setPerson(() => {
    //   const updatedField = { [event.target.name]: event.target.value }
    //   const newInput = Object.assign({}, person, updatedField)
    //   console.log(newInput)
    //   return newInput
    // })
    // const updatedField = { [event.target.name]: event.target.value }
    // const newInput = Object.assign({}, person, updatedField)
    // setPerson(newInput)
    setPerson({ ...person, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    updateGrad(props.user.gradId, person)
      .then(() => props.history.push('/'))
      .catch(() => console.log('did not update user details'))
  }
  return (
    <div>
      <h2>Update Your Profile</h2>
      <AddGrad person={person} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default withRouter(UpdateProfile)
