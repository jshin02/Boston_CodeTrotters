import React, { useState, useEffect } from 'react'
import { showGrad, updateGrad } from '../../api/grad'
import AddGrad from '../Grads/AddGrad'
import { withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'

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
  const msgAlert = props.msgAlert

  useEffect(() => {
    // console.log(props.user)
    showGrad(props.user.gradId)
      .then(res => {
        setPerson(res.data.grad)
      })
      .catch(error => msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: messages.gradShowFailure,
        variant: 'danger'
      }))
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
      .then(() => msgAlert({
        heading: 'Update Profile Success',
        message: messages.updateProfileSuccess,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Update Profile Failed with error: ' + error.message,
        message: messages.updateProfileFailure,
        variant: 'danger'
      }))
  }
  return (
    <div>
      <h2>Update Your Profile</h2>
      <AddGrad person={person} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default withRouter(UpdateProfile)
