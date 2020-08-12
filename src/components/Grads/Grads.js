import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AddGrad from './AddGrad'
import { createGrad } from '../../api/grad'
import StudentCheck from '../Modals/StudentCheck'
import SearchProfile from '../Modals/SearchProfile'
import messages from '../AutoDismissAlert/messages'

const Grads = props => {
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
  const [modalShow, setModalShow] = useState(true)
  const [modalShow2, setModalShow2] = useState(false)
  const msgAlert = props.msgAlert

  useEffect(() => {
    setPerson({ ...person, owner: props.user._id })
  }, [])
  const notStudent = () => {
    setModalShow(false)
  }

  const isStudent = () => {
    setModalShow(false)
    setModalShow2(true)
  }

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
      .then(() => {
        props.history.push('/')
        msgAlert({
          heading: 'Registration Success',
          message: messages.registrationSuccess,
          variant: 'success'
        })
      })
      .catch(error => msgAlert({
        heading: 'Registration Failed with error: ' + error.message,
        message: messages.registrationFailure,
        variant: 'danger'
      }))
  }
  return (
    <div>
      <StudentCheck show={modalShow} onClose={notStudent} onHide={isStudent} />
      <SearchProfile msgAlert={msgAlert} show={modalShow2} person={person} personfun={setPerson} location={props.location} userfun={props.setUser} user={props.user} onHide={() => setModalShow2(false)} />
      <h2>Create Profile</h2>
      <AddGrad
        person={person}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </div>
  )
}

export default withRouter(Grads)
