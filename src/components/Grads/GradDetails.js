import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css'

const GradDetails = props => {
  const { mod, name, identity, compliment, interests, imageUrl, id } = props
  const [theClass, setTheClass] = useState('')
  const containerStyle = {
    position: 'relative',
    width: '320px',
    marginBottom: '50px'
  }

  useEffect(() => {
    if (mod % 3 === 0) {
      setTheClass('grad-col-1 grad-col')
    }
    if (mod % 3 === 1) {
      setTheClass('grad-col-2 grad-col')
    }
    if (mod % 3 === 2) {
      setTheClass('grad-col-3 grad-col')
    }
  })

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div style={containerStyle} className={theClass} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div style={{ border: '1px solid rgba(190,199,192,.4)', width: '100%', height: '470px', position: 'relative' }}>
        <div>
          <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%' }}>
            <img src={imageUrl} alt={name} style={{ position: 'absolute', display: 'block', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div className='grad-card-content'>
          <div className='grad-name'>
            <Link to={'/grads/' + id} data-id={id}><h3>{name}</h3></Link>
          </div>
          <div className='grad-card-body'>
            <h5>Identity: {identity}</h5>
            <h5>Ideal Compliment: {compliment}</h5>
            <h6>Interests: {interests}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(GradDetails)
