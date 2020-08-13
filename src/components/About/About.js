import React from 'react'
import CalvinHobbes from './CalvinHobbes_Memories.gif'

const About = props => {
  // in personal message section, only reveal Personal message if the title and content exist - only reveal endoresement requests if those have been filled in.
  const containerStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
  // const test = event => {
  //   console.log('hey')
  // }

  return (
    <div>
      <h2>About Me</h2>
      <div style={containerStyle}>
        <img src={CalvinHobbes} alt="CalvinHobbesComic"/>
      </div>
    </div>
  )
}

export default About
