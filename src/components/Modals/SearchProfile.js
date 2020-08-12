import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { assignGrad, updateUserGrad } from '../../api/auth'
import { updateGrad } from '../../api/grad'
import { withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'

const SearchProfile = props => {
  const [fetchProfile, setFetchProfile] = useState({
    name: '',
    imageUrl: '',
    gradId: '',
    assignedToUser: null
  })
  const [person, setPerson] = useState({
    name: '',
    identity: '',
    compliment: '',
    interests: '',
    organization: '',
    imageUrl: '',
    assignedToUser: true,
    adviceContent: '',
    messageContent: '',
    endorsements: '',
    linkedin: '',
    github: '',
    instagram: '',
    email: '',
    owner: ''
  })
  const user = props.user
  const setUser = props.userfun
  const msgAlert = props.msgAlert
  // const person = props.person
  // const setPerson = props.personfun
  useEffect(() => {
    // user is assigned a gradId here
    // console.log(props.location, setUser)
    assignGrad(props.location.name)
      .then(res => {
        // populates container to update resource if positive match
        setPerson({ ...res.data.grad, owner: user._id })
        // Populates the modal for user/grad verification
        setFetchProfile(prevProfile => {
          const updatedField = {
            name: res.data.grad.name,
            imageUrl: res.data.grad.imageUrl,
            gradId: res.data.grad._id,
            assignedToUser: res.data.grad.assignedToUser
          }
          const matchProfile = Object.assign({}, prevProfile, updatedField)
          return matchProfile
        })
        return res
      })
      .catch(() => console.log('failed to execute GET on effect'))
  }, [])
  // hook to update grad every time the grad's value (person) is changed.
  useEffect(() => {
    // send person to update api request every time value of person changes.
    updateGrad(fetchProfile.gradId, person)
      // .then(() => console.log('updated grad'))
      .catch(() => console.log('failed to update grad on effect'))
    // console.log(fetchProfile, props.location.user)
  }, [person])

  const handleSuccess = event => {
    event.preventDefault()
    // update person which will update entire document FIX THIS
    setPerson({ ...person, assignedToUser: true })
    // update user's gradId using userID pulled from location
    updateUserGrad(props.location.user, fetchProfile.gradId)
      .then(res => {
        const updatedUser = Object.assign({}, props.location.user, { gradId: fetchProfile.gradId })
        // set user state at app level
        setUser(updatedUser)
      })
      .then(() => props.history.push('/'))
      .then(() => msgAlert({
        heading: 'Welcome, ' + props.location.name + '!',
        message: messages.profileMatchSuccess,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Profile match Failed with error: ' + error.message,
        message: messages.profileMatchFailure,
        variant: 'danger'
      }))
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          CodeTrotter verification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Is this you?</h5>
        { fetchProfile.name && !fetchProfile.assignedToUser ? <img src={fetchProfile.imageUrl} alt={fetchProfile.name} style={{ maxWidth: '75%', maxHeight: '75%' }} /> : <p>No match in list of grads, or your profile has already been assigned.</p> }
        { fetchProfile.name && !fetchProfile.assignedToUser ? <p>{fetchProfile.name}</p> : <p>Please contact Jinhyun Shin if you believe there has been a mistake.</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>No, that&apos;s not me</Button>
        <Button onClick={handleSuccess}>Yes, that&apos;s me!</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default withRouter(SearchProfile)
