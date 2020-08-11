import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { showGrad } from '../../api/grad'
import ShowSongs from '../Songs/ShowSongs'
import { ShowLeftCard } from './ShowLeftCard'
import { ShowRightCard } from './ShowRightCard'
import { useSpring, animated, config } from 'react-spring'

const GradShow = props => {
  const [gradSongs, setGradSongs] = useState([])
  const [person, setPerson] = useState({
    id: '',
    name: '',
    identity: '',
    compliment: '',
    interests: '',
    organization: '', // not rendering but available for use
    imageUrl: '',
    assignedToUser: null,
    adviceContent: '',
    messageContent: '',
    endorsements: '',
    linkedin: '',
    github: '',
    instagram: '',
    email: ''
  })
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow
  })
  const { name, identity, compliment, interests, imageUrl, adviceContent, messageContent, endorsements, linkedin, github, instagram, email, id } = person
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto'
  }
  useEffect(() => {
    // show request for grad's songs
    showGrad(props.match.params.id)
      .then(res => {
        setPerson(res.data.grad)
        setGradSongs(res.data.grad.songs)
      })
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
          <ShowLeftCard content={messageContent} advice={adviceContent} endorsements={endorsements} id={id} />
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
