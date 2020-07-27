import React from 'react'
import Col from 'react-bootstrap/Col'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'

const GradShow = props => {
  const { name, identity, compliment, interests, imageUrl, linkedin, instagram, email, id } = props.location

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
  const iconStyle = {
    height: '40px',
    width: '40px'
  }

  return (
    <Col md={12}>
      <div data-id={id}>
        <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <h3>{name}</h3>
        <h5>Identity: {identity}</h5>
        <h5>Ideal Compliment: {compliment}</h5>
        <h6>Interests: {interests}</h6>
        <div className='social'>
          <FaLinkedin onClick={() => window.open(linkedin, '_blank')} style={iconStyle} />
          <AiFillGithub onClick={() => window.open('https://www.espn.com', '_blank')} style={iconStyle} />
          <FaInstagram onClick={() => window.open(instagram, '_blank')} style={iconStyle} />
          <AiOutlineMail onClick={() => window.open('mailto:' + email, '_blank')} style={iconStyle} />
        </div>
      </div>
    </Col>
  )
}

export default GradShow
