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
      <Form.Group controlId="socialLinkedin">
        <Form.Label>LinkedIn</Form.Label>
        <Form.Control
          type="text"
          placeholder="optional"
          name="linkedin"
          value={person.linkedin}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="socialInstagram">
        <Form.Label>Instagram</Form.Label>
        <Form.Control
          type="text"
          placeholder="optional"
          name="instagram"
          value={person.instagram}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="socialEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="optional"
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
