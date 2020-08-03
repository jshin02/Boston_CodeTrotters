import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const GradDetails = props => {
  const { name, identity, compliment, interests, imageUrl, linkedin, github, instagram, email, id, content, endorsements } = props
  const containerStyle = {
    border: '1px solid black',
    marginBottom: '10px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
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
      github: github,
      instagram: instagram,
      email: email,
      id: id,
      content: content,
      endorsements: endorsements
    })
  }
  return (
    <Col md={4} style={containerStyle}>
      <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '50%' }} />
      <Link to={'/grads/' + id} onClick={listDetails} data-id={id}><h3>{name}</h3></Link>
      <h5>Identity: {identity}</h5>
      <h5>Ideal Compliment: {compliment}</h5>
      <h6>Interests: {interests}</h6>
    </Col>
  )
}

export default withRouter(GradDetails)
