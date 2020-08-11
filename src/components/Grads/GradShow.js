import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { showGrad } from '../../api/grad'
import ShowSongs from '../Songs/ShowSongs'
import { ShowLeftCard } from './ShowLeftCard'
import { ShowRightCard } from './ShowRightCard'
import { useSpring, animated, config } from 'react-spring'

const GradShow = props => {
  const { name, identity, compliment, interests, content, advice, endorsements, imageUrl, linkedin, github, instagram, email, id } = props.location
  const [gradSongs, setGradSongs] = useState([])
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow
  })
  // in personal message section, only reveal Personal message if the title and content exist - only reveal endoresement requests if those have been filled in.
  const postcardStyle = {
    border: '1px solid rgba(190,199,192,.8)',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    width: '100%',
    margin: '20px auto',
    padding: '5px 0'
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
    // show request for grad's songs
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
    <animated.div style={fade}>
      <Row style={postcardStyle}>
        <Col md={6}>
          <ShowLeftCard content={content} advice={advice} endorsements={endorsements} id={id} />
        </Col>
        <Col md={6} style={{ height: '70vh' }}>
          <ShowRightCard id={id} imageUrl={imageUrl} name={name} identity={identity} compliment={compliment} interests={interests} linkedin={linkedin} github={github} instagram={instagram} email={email} iconStyle={iconStyle} />
        </Col>
      </Row>
      <Row style={playlistStyle}>
        <ShowSongs gradSongs={gradSongs} />
      </Row>
    </animated.div>
  )
}

export default GradShow
