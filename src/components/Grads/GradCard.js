import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { getGrads } from '../../api/grad'
import GradDetails from './GradDetails'
import messages from '../AutoDismissAlert/messages'

const GradCard = props => {
  const [index, setIndex] = useState([])
  const msgAlert = props.msgAlert

  useEffect(() => {
    getGrads()
      .then(res => {
        res.data.grads.sort((a, b) => {
          const nameA = a.name
          const nameB = b.name
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0
        })
        const container = res.data.grads.filter(element => element.organization === 'CodeTrotters')
        setIndex(container)
      })
      .catch(error => msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: messages.indexGradsFailure,
        variant: 'danger'
      }))
  }, [])

  const indexStyle = {
    display: 'flex',
    maxWidth: '1140px',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: '50vh'
  }
  const messageContainer = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 2, tension: 280, friction: 180 },
    delay: 300,
    height: '30vh',
    position: 'relative',
    width: '61%',
    margin: '0 auto'
  })

  // render grad details per each grad.
  // pass api response as props
  return (
    <div>
      <h2 style={{ margin: '20px 0' }}>Codetrotters</h2>
      <animated.div style={messageContainer}>
        <div>
          <h3>Congratulations!</h3>
          <h5 style={{ lineHeight: '1.5' }}>It has been an honor to get to enjoy a unique chapter in life with all of you. Below is the list of characters involved - all of who will have their own respective recounts of this time!</h5>
        </div>
      </animated.div>
      <div style={indexStyle}>
        {index.map((grad, i) => (
          <GradDetails
            key={i}
            mod={i}
            name={grad.name}
            identity={grad.identity}
            compliment={grad.compliment}
            organization={grad.organization}
            interests={grad.interests}
            imageUrl={grad.imageUrl}
            linkedin={grad.linkedin}
            github={grad.github}
            instagram={grad.instagram}
            email={grad.email}
            id={grad._id}
            advice={grad.adviceContent}
            content={grad.messageContent}
            endorsements={grad.endorsements}
          />
        ))}
      </div>
    </div>
  )
}

export default GradCard
