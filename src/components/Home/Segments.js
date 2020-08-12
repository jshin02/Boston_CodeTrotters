import React from 'react'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const Segments = props => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
  return (
    <div style={containerStyle}>
      <NavLink to={props.path}>
        <Button variant="outline-primary" size="lg">{props.type}</Button>
      </NavLink>
    </div>
  )
}

export default Segments
