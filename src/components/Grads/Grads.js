import React, { useState } from 'react'
import AddGrad from './AddGrad'
import { createGrad } from '../../api/grad'
import StudentCheck from '../Modals/StudentCheck'
import SearchProfile from '../Modals/SearchProfile'

const Grads = props => {
  const [person, setPerson] = useState({
    name: '',
    identity: '',
    compliment: '',
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
  const [modalShow, setModalShow] = useState(true)
  const [modalShow2, setModalShow2] = useState(false)

  const notStudent = () => {
    setModalShow(false)
  }

  const isStudent = () => {
    setModalShow(false)
    setModalShow2(true)
    console.log(props)
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
      // .then(res => res.status(201).json(res))
      .then(() => console.log('created a person'))
      .catch(() => console.log('did not create a person'))
  }
  return (
    <div>
      <StudentCheck show={modalShow} onClose={notStudent} onHide={isStudent} />
      <SearchProfile show={modalShow2} location={props.location} user={props.setUser} onHide={() => setModalShow2(false)} />
      <h2>Create Profile</h2>
      <AddGrad
        person={person}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </div>
  )
}

export default Grads
