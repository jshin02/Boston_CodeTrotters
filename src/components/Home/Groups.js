import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import Segments from './Segments'
import { getGrads } from '../../api/grad'

const groups = [
  {
    id: 1,
    name: 'Instructors',
    path: '/InstructorsIndex'
  },
  {
    id: 2,
    name: 'Affiliates',
    path: '/AffiliatesIndex'
  },
  {
    id: 3,
    name: 'CodeTrotters',
    path: '/CodeTrottersIndex'
  }]
// length of the number of grads.
// run until find one with advice.
// store that user to display advice and link to profile.

const Groups = () => {
  const [users, setUsers] = useState([])
  const [userAdvice, setUserAdvice] = useState({})
  useEffect(() => {
    getGrads()
      .then(res => setUsers(res.data.grads))
      .catch(() => console.log('failed to get grads'))
  }, [])
  useEffect(() => {
    const array = users
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    let element = 0
    while (element < array.length) {
      if (array[element].adviceContent) {
        console.log(array[element])
        return setUserAdvice(array[element])
      }
      element++
    }
    console.log(userAdvice)
  }, [users])
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 2, tension: 280, friction: 180 },
    height: '90vh',
    delay: 300
  })
  const adviceContainer = {
    height: '30vh',
    position: 'relative',
    width: '61%',
    margin: '0 auto'
  }
  const adviceStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    textAlign: 'right'
  }
  const orgContainer = {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
  const orgStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  return (
    <animated.div style={fade}>
      <div style={adviceContainer}>
        <div style={adviceStyle}>
          <h3>&quot;{userAdvice.adviceContent}&quot;</h3>
          <h5 style={{ marginTop: '5vh' }}> - {userAdvice.name}</h5>
        </div>
      </div>
      <div style={orgContainer}>
        <div style={orgStyle}>
          {groups.map(group => (
            <Segments
              key={group.name}
              type={group.name}
              path={group.path} />
          ))}
        </div>
      </div>
    </animated.div>
  )
}

export default Groups
