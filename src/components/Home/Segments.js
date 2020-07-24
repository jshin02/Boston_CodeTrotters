import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Segments = props => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
  return (
    <div style={containerStyle}>
      <Link to={props.path}>
        <Button variant="outline-primary" size="lg">{props.type}</Button>
      </Link>
    </div>
  )
}

export default Segments
