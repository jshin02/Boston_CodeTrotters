import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { assignGrad } from '../../api/auth'

const GradShow = props => {
  const { name, identity, compliment, interests, content, endorsements, imageUrl, linkedin, github, instagram, email, id } = props.location
  // in personal message section, only reveal Personal message if the title and content exist - only reveal endoresement requests if those have been filled in.
  const containerStyle = {
    border: '1px solid black',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    width: '60vw',
    margin: '0 auto'
  }
  useEffect(() => {
    assignGrad(name)
      .then(res => console.log(res))
      .catch(() => console.log('this is not working.'))
  }, [])
  const iconStyle = {
    height: '25px',
    width: '25px',
    marginRight: '10px'
  }

  return (
    <Row style={containerStyle}>
      <Col md={6} style={{ border: '1px solid green' }}>
        <div data-id={id} style={{ border: '1px solid blue', height: '60vh' }}>
          <img src={imageUrl} alt={name} style={{ maxWidth: '60%', maxHeight: '60%' }} />
          <h3>{name}</h3>
          <h6>Identity: {identity}</h6>
          <h6>Ideal Compliment: {compliment}</h6>
          <h6>Interests: {interests}</h6>
          <div className='social'>
            { linkedin && <FaLinkedin onClick={() => window.open(linkedin, '_blank')} style={iconStyle} /> }
            { github && <AiFillGithub onClick={() => window.open(github, '_blank')} style={iconStyle} /> }
            { instagram && <FaInstagram onClick={() => window.open(instagram, '_blank')} style={iconStyle} /> }
            { email && <AiOutlineMail onClick={() => window.open('mailto:' + email, '_blank')} style={iconStyle} /> }
          </div>
        </div>
      </Col>
      <Col md={6} style= {{ border: '1px solid red', height: '60vh' }}>
        <div>
          { content &&
          <div>
            <h5>Message to CodeTrotters</h5>
            <p>{content}</p>
          </div>
          }
          { endorsements && <div>
            <h5>Endorsement Requests</h5>
            <p>{endorsements}</p>
          </div>
          }
        </div>
      </Col>
    </Row>
  )
}

export default GradShow
