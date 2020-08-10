import React, { useState, useEffect } from 'react'
import { getGrads } from '../../api/grad'
import GradDetails from './GradDetails'

const GradCard = props => {
  const [index, setIndex] = useState([])

  const indexStyle = {
    display: 'flex',
    maxWidth: '1140px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '36vh'
  }
  useEffect(() => {
    getGrads()
      .then(res => {
        // console.log(res)
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
        setIndex(res.data.grads)
      })
      .catch(() => console.log('error getting index'))
  }, [])
  useEffect(() => {
    console.log(props)
  }, [])

  // render grad details per each grad.
  // pass api response as props
  return (
    <div>
      <h2 style={{ marginTop: '20px' }}>All Codetrotters</h2>
      <div style={indexStyle}>
        {index.map((grad, i) => (
          <GradDetails
            key={i}
            mod={i}
            name={grad.name}
            identity={grad.identity}
            compliment={grad.compliment}
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
