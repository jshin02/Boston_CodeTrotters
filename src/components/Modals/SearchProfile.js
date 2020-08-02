import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { assignGrad, updateUserGrad } from '../../api/auth'
import { updateGrad } from '../../api/grad'
import { withRouter } from 'react-router-dom'

const SearchProfile = props => {
  const [fetchProfile, setFetchProfile] = useState({
    name: '',
    imageUrl: '',
    gradId: '',
    assignedToUser: null
  })
  const setUser = props.user
  useEffect(() => {
    // user is assigned a gradId here
    console.log(props.location, setUser)
    assignGrad(props.location.name)
      .then(res => {
        setFetchProfile(prevProfile => {
          const updatedField = {
            name: res.data.grad.name,
            imageUrl: res.data.grad.imageUrl,
            gradId: res.data.grad._id,
            assignedToUser: res.data.grad.assignedToUser
          }
          const matchProfile = Object.assign({}, prevProfile, updatedField)
          console.log(matchProfile)
          return matchProfile
        })
        return res
      })
      .catch(() => console.log('failed to execute GET'))
  }, [])
  useEffect(() => {
    console.log(fetchProfile, props.location.user)
  }, [fetchProfile])

  const handleSuccess = event => {
    event.preventDefault()
    const validatedProfile = {
      assignedToUser: true
    }
    // set user's gradId
    updateUserGrad(props.location.user, fetchProfile.gradId)
      .then(res => {
        const updatedUser = Object.assign({}, props.location.user, { gradId: fetchProfile.gradId })
        setUser(updatedUser)
      })
      .then(() => console.log('Updated User gradId'))
      .catch(() => console.log('failed to update user with gradId'))
    // update grad with assignment boolean
    updateGrad(fetchProfile.gradId, validatedProfile)
      .then(() => props.history.push('/gradIndex/'))
      .catch(() => console.log('failed to update Grad assignment status'))
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
