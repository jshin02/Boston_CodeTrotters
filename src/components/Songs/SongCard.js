import React, { useState, useEffect } from 'react'
import { deleteSong } from '../../api/songs'
import { showGrad } from '../../api/grad'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SongCard = ({ song, gradId, setUpdateList }) => {
  const [changeSong, setChangeSong] = useState(false)
  const [updateSong, setUpdateSong] = useState({
    title: '',
    artist: ''
  })
  useEffect(() => {
    console.log(song)
  }, [])
  const editSong = event => {
    event.preventDefault()
    const songTitle = event.currentTarget.dataset.songtitle
    const songArtist = event.currentTarget.dataset.songartist
    setUpdateSong(() => {
      const songObservation = { title: songTitle, artist: songArtist }
      return songObservation
    })
    setChangeSong(true)
  }
  const clearSong = event => {
    event.preventDefault()
    const songId = event.currentTarget.dataset.songid
    const gradId = event.currentTarget.dataset.gradid
    deleteSong(gradId, songId)
    showGrad(gradId)
      .then(res => setUpdateList(res.data.grad.songs))
      .then(() => console.log('deleted song - try to add animation here'))
      .catch(() => console.log('failed to remove song.'))
  }
  const handleChange = event => {
    event.persist()
    setUpdateSong(() => {
      const updatedField = { [event.target.name]: event.target.value }
      const newInput = Object.assign({}, updateSong, updatedField)
      return newInput
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(updateSong)
  }
  return (
    <div style={{ border: '1px solid black' }}>
      <h3>Title: {song.title}</h3>
      <h3>Artist: {song.artist}</h3>
      <button data-songartist={song.artist} data-songtitle={song.title} onClick={editSong}>Edit</button>
      <button data-songid={song._id} data-gradid={gradId} onClick={clearSong}>Delete</button>
      {changeSong &&
        <Form onSubmit={handleSubmit} style={{ width: '33%', height: '33%' }}>
          <Form.Group controlId="addSongTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title - ex: Recomposed by Max Richter: Vivaldi, The Four Seasons: Spring 1"
              name="title"
              value={updateSong.title}
              onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formGradNature">
            <Form.Label>Artist(s)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Artist - Max Richter, Antonion Vivaldi"
              name="artist"
              value={updateSong.artist}
              onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      }
    </div>
  )
}

export default SongCard
