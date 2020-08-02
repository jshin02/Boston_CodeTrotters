import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { assignGrad } from '../../api/auth'

const GradShow = props => {
  const { name, identity, compliment, interests, imageUrl, linkedin, github, instagram, email, id } = props.location
  // in personal message section, only reveal Personal message if the title and content exist - only reveal endoresement requests if those have been filled in.
  // const containerStyle = {
  //   border: '1px solid black',
  //   display: 'flex',
  //   flexFlow: 'column wrap',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
  // const test = event => {
  //   console.log('hey')
  // }
  useEffect(() => {
    assignGrad(name)
      .then(res => console.log(res))
      .catch(() => console.log('this is not working.'))
  }, [])
  const iconStyle = {
    height: '40px',
    width: '40px'
  }

  return (
    <Col md={12} style={{ border: '1px solid black' }}>
      <div data-id={id} style={{ border: '1px solid blue' }}>
        <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <h3>{name}</h3>
        <h5>Identity: {identity}</h5>
        <h5>Ideal Compliment: {compliment}</h5>
        <h6>Interests: {interests}</h6>
        <div className='social'>
          { linkedin && <FaLinkedin onClick={() => window.open(linkedin, '_blank')} style={iconStyle} /> }
          { github && <AiFillGithub onClick={() => window.open(github, '_blank')} style={iconStyle} /> }
          { instagram && <FaInstagram onClick={() => window.open(instagram, '_blank')} style={iconStyle} /> }
          { email && <AiOutlineMail onClick={() => window.open('mailto:' + email, '_blank')} style={iconStyle} /> }
        </div>
      </div>
    </Col>
  )
}

export default GradShow
