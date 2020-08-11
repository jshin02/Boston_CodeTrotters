import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
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

  useEffect(() => {
    setPerson({ ...person, owner: props.user._id })
  }, [])
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
      .then(() => {
        console.log('created person, now trying to push')
        props.history.push('/')
      })
      .then(() => console.log('created a person'))
      .catch(() => console.log('did not create a person'))
  }
  return (
    <div>
      <StudentCheck show={modalShow} onClose={notStudent} onHide={isStudent} />
      <SearchProfile show={modalShow2} person={person} personfun={setPerson} location={props.location} userfun={props.setUser} user={props.user} onHide={() => setModalShow2(false)} />
      <h2>Create Profile</h2>
      <AddGrad
        person={person}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
    </div>
  )
}

export default withRouter(Grads)
