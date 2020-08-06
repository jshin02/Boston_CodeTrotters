import React from 'react'

const ShowSongs = props => {
  const songStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid blue'
  }
  return (
    <div style={{ width: '100%' }}>
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
  )
}

export default ShowSongs
