import React, { useState, useEffect } from 'react'
import { getGrads } from '../../api/grad'
import GradDetails from './GradDetails'

const GradCard = () => {
  const [index, setIndex] = useState([])

  useEffect(() => {
    getGrads()
      .then(res => {
        console.log(res)
        setIndex(res.data.grads)
      })
      .catch(() => console.log('error getting index'))
  }, [])

  // render grad details per each grad.
  // pass api response as props
  return (
    <div>
      <h2>All grads</h2>
      <div>
        {index.map((grad, i) => (
          <GradDetails
            key={i}
            name={grad.name}
            identity={grad.identity}
            compliment={grad.compliment}
            interests={grad.interests}
            imageUrl={grad.imageUrl}
            linkedin={grad.linkedin}
            instagram={grad.instagram}
            email={grad.email}
            id={grad._id}
          />
        ))}
      </div>
    </div>
  )
}

export default GradCard
