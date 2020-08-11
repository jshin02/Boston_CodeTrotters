import React from 'react'
import Col from 'react-bootstrap/Col'
import { useSpring, animated, config } from 'react-spring'

const ShowSongs = props => {
  const slide = useSpring({
    from: { transform: 'translate3d(0,80%, 0)' },
    to: { transform: 'translate3d(0,0,0)' },
    config: config.slow
  })
  const songStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid blue'
  }
  return (
    <Col sm={12}>
      <animated.div style={slide}>
        <div style={{ border: '1px solid green', width: '100%' }}>
          <h3 style={{ textAlign: 'center' }}>Top Music To Code To</h3>
          <div style={songStyle}>
            {props.gradSongs.map((song, i) => (
              <div key={i} style={{ border: '1px solid black' }}>
                <h5>{song.title}</h5>
                <h6>{song.artist}</h6>
              </div>
            ))}
          </div>
        </div>
      </animated.div>
    </Col>
  )
}

export default ShowSongs
