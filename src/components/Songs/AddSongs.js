import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddSongs = ({ newSong, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="addSongTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title - ex: Recomposed by Max Richter: Vivaldi, The Four Seasons: Spring 1"
          name="title"
          value={newSong.title}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formGradNature">
        <Form.Label>Artist(s)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Artist - Max Richter, Antonion Vivaldi"
          name="artist"
          value={newSong.artist}
          onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddSongs
