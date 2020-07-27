import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const GradDetails = props => {
  const { name, identity, compliment, interests, imageUrl, linkedin, instagram, email, id } = props
  const containerStyle = {
    border: '1px solid black',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const listDetails = event => {
    // event.preventDefault()
    // const id = event.currentTarget.dataset.id
    props.history.push({
      pathname: '/grads/' + id,
      name: name,
      identity: identity,
      compliment: compliment,
      interests: interests,
      imageUrl: imageUrl,
      linkedin: linkedin,
      instagram: instagram,
      email: email,
      id: id
    })
    console.log(id)
  }
  return (
    <Col md={4} style={containerStyle}>
      <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <Link to={'/grads/' + id} onClick={listDetails} data-id={id}><h3>{name}</h3></Link>
      <h5>Identity: {identity}</h5>
      <h5>Ideal Compliment: {compliment}</h5>
      <h6>Interests: {interests}</h6>
      <button onClick={listDetails} data-id={id}>Person Details</button>
    </Col>
  )
}

export default withRouter(GradDetails)
