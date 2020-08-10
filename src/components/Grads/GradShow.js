import React, { Fragment, useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { showGrad } from '../../api/grad'
import ShowSongs from '../Songs/ShowSongs'

const GradShow = props => {
  const { name, identity, compliment, interests, content, advice, endorsements, imageUrl, linkedin, github, instagram, email, id } = props.location
  const [gradSongs, setGradSongs] = useState([])
  // in personal message section, only reveal Personal message if the title and content exist - only reveal endoresement requests if those have been filled in.
  const postcardStyle = {
    border: '1px solid black',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    width: '100%',
    margin: '20px auto'
  }
  const playlistStyle = {
    border: '1px solid pink',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto'
  }
  useEffect(() => {
    showGrad(id)
      .then(res => setGradSongs(res.data.grad.songs))
      .catch(() => console.log('this is not working.'))
  }, [])
  const iconStyle = {
    height: '25px',
    width: '25px',
    marginRight: '10px'
  }

  return (
    <Fragment>
      <Row style={postcardStyle}>
        <Col md={6}>
          <div data-id={id} style={{ height: '70vh' }}>
            { content &&
            <div>
              <h5>Message to CodeTrotters</h5>
              <p>{content}</p>
            </div>
            }
            { advice &&
            <div>
              <h5>Advice to Jr. Developers</h5>
              <p>{advice}</p>
            </div>
            }
            { endorsements &&
            <div>
              <h5>Endorsement Requests</h5>
              <p>{endorsements}</p>
            </div>
            }
          </div>
        </Col>
        <Col md={6} style={{ height: '70vh' }}>
          <div data-id={id} style={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
            <img src={imageUrl} alt={name} style={{ maxWidth: '60%', height: '300px', alignSelf: 'flex-end', objectFit: 'cover' }} />
            <h3 style={{ alignSelf: 'flex-end' }}>{name}</h3>
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
      </Row>
      <Row style={playlistStyle}>
        <ShowSongs gradSongs={gradSongs} />
      </Row>
    </Fragment>
  )
}

export default GradShow
