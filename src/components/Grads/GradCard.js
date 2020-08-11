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
    marginTop: '46vh'
  }
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
        const container = res.data.grads.filter(element => element.organization === 'CodeTrotters')
        setIndex(container)
      })
      .catch(() => console.log('error getting index'))
  }, [])

  // render grad details per each grad.
  // pass api response as props
  return (
    <div>
      <h2 style={{ marginTop: '20px' }}>Codetrotters</h2>
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
