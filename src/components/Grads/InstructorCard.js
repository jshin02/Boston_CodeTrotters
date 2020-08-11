import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { getGrads } from '../../api/grad'
import GradDetails from './GradDetails'

const InstructorCard = props => {
  const [index, setIndex] = useState([])

  useEffect(() => {
    getGrads()
      .then(res => {
        console.log(res)
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
        const container = res.data.grads.filter(element => element.organization === 'Instructors')
        setIndex(container)
      })
      .catch(() => console.log('error getting index'))
  }, [])

  const indexStyle = {
    display: 'flex',
    maxWidth: '1140px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '46vh'
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
      <h2 style={{ margin: '20px 0' }}>Instructors</h2>
      <animated.div style={messageContainer}>
        <div>
          <h3>Thank you!</h3>
          <h5 style={{ lineHeight: '1.5' }}>It has been a privilege to get to learn from the extraordinary teachers of General Assembly. Thank you all, for your time and dedication to our questions, bugs, and questions.</h5>
        </div>
      </animated.div>
      <div style={indexStyle}>
        { index.length > 0
          ? index.map((grad, i) => (
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
          ))
          : <h2>There are no instructors at this time - be the first!</h2>
        }
      </div>
    </div>
  )
}

export default InstructorCard
