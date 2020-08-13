import React from 'react'
import Col from 'react-bootstrap/Col'
// import { useSpring, animated, config } from 'react-spring'

const ShowSongs = props => {
  // const slide = useSpring({
  //   from: { transform: 'translate3d(0,80%, 0)' },
  //   to: { transform: 'translate3d(0,0,0)' },
  //   config: config.slow
  // })
  const songStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  return (
    <Col sm={12}>
      <div className="slideUp">
        <div style={{ border: '1px solid rgba(190,199,192,.8)', width: '100%' }}>
          <h3 style={{ textAlign: 'center' }}>Top Music To Code To</h3>
          <div style={songStyle}>
            {props.gradSongs.map((song, i) => (
              <div key={i}>
                <h5>Title: {song.title}</h5>
                <h6>Artist(s): {song.artist}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ShowSongs
