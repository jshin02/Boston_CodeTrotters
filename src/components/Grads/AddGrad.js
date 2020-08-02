import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddGrad = ({ person, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="addGradName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={person.name}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formGradNature">
        <Form.Label>Identity</Form.Label>
        <Form.Control
          type="text"
          placeholder="Identity"
          name="identity"
          value={person.identity}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formGradCompliment">
        <Form.Label>Ideal Compliment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ideal Compliment"
          name="compliment"
          value={person.compliment}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formGradInterests">
        <Form.Label>Interests</Form.Label>
        <Form.Control
          type="text"
          placeholder="i.e. Basketball, DJ-ing, Reading"
          name="interests"
          value={person.interests}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formPersonalMessage">
        <Form.Label>Message to CodeTrotters</Form.Label>
        <Form.Control
          as="textarea" rows="4"
          placeholder="optional - Your chance for a personalized message"
          name="messageContent"
          value={person.messageContent}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formEndoresementRequests">
        <Form.Label>Endorsement Requests</Form.Label>
        <Form.Control
          as="textarea" rows="2"
          placeholder="optional - i.e. JavaScript, React, UI/UX Design, Scrum Master"
          name="endorsements"
          value={person.endorsements}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formImageUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://ca.slack-edge.com/5586ed0a137a"
          name="imageUrl"
          value={person.imageUrl}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="socialLinkedin">
        <Form.Label>LinkedIn</Form.Label>
        <Form.Control
          type="text"
          placeholder="optional - Ex: https://www.linkedin.com/username"
          name="linkedin"
          value={person.linkedin}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="socialGithub">
        <Form.Label>Github</Form.Label>
        <Form.Control
          type="text"
          placeholder="optional - Ex: https://www.github.com/username"
          name="github"
          value={person.github}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="socialInstagram">
        <Form.Label>Instagram</Form.Label>
        <Form.Control
          type="text"
          placeholder="optional - Ex: https://www.instagram.com/username"
          name="instagram"
          value={person.instagram}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="socialEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="optional - Ex: Bryan.Adebayo@gmail.com"
          name="email"
          value={person.email}
          onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddGrad
