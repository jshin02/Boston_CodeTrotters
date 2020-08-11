import React, { useState, useEffect } from 'react'
import { getGrads } from '../../api/grad'
import GradDetails from './GradDetails'

const AffiliateCard = props => {
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
        const container = res.data.grads.filter(element => element.organization === 'Other Affiliate')
        setIndex(container)
      })
      .catch(() => console.log('error getting index'))
  }, [])

  return (
    <div>
      <h2 style={{ marginTop: '20px' }}>Affiliates</h2>
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
          : <h2>There are no affiliates at this time - be the first!</h2>
        }
      </div>
    </div>
  )
}

export default AffiliateCard
