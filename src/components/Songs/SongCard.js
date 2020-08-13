import React, { useState } from 'react'
import { updateSong, deleteSong } from '../../api/songs'
import { showGrad } from '../../api/grad'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'

const SongCard = ({ song, gradId, setUpdateList, songSwitch, setSongSwitch, msgAlert }) => {
  const [changeSong, setChangeSong] = useState(false)
  const [updatedSong, setUpdatedSong] = useState({
    title: '',
    artist: ''
  })
  const editSong = event => {
    event.preventDefault()
    const songTitle = event.currentTarget.dataset.songtitle
    const songArtist = event.currentTarget.dataset.songartist
    setUpdatedSong(() => {
      const songObservation = { title: songTitle, artist: songArtist }
      return songObservation
    })
    setChangeSong(true)
  }
  const clearSong = event => {
    event.preventDefault()
    const songId = song._id
    deleteSong(gradId, songId)
      .then(res => console.log(res))
    showGrad(gradId)
      .then(res => setUpdateList(res.data.grad.songs))
      .then(() => msgAlert({
        heading: 'Delete Song Success',
        message: messages.deleteSongSuccess,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Delete Song Failed with error: ' + error.message,
        message: messages.deleteSongFailure,
        variant: 'danger'
      }))
  }
  const handleChange = event => {
    event.persist()
    setUpdatedSong(() => {
      const updatedField = { [event.target.name]: event.target.value }
      const newInput = Object.assign({}, updatedSong, updatedField)
      return newInput
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    const songId = song._id
    updateSong(gradId, updatedSong, songId)
      .then(() => setSongSwitch(songSwitch += 1))
      .then(() => setChangeSong(false))
      .catch(error => msgAlert({
        heading: 'Update Song Failed with error: ' + error.message,
        message: messages.updateSongFailure,
        variant: 'danger'
      }))
  }
  return (
    <div>
      <h5>Title: {song.title}</h5>
      <h5>Artist: {song.artist}</h5>
      <button data-songartist={song.artist} data-songtitle={song.title} onClick={editSong}>Edit</button>
      <button data-songid={song._id} data-gradid={gradId} onClick={clearSong}>Delete</button>
      {changeSong &&
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="addSongTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title - ex: Recomposed by Max Richter: Vivaldi, The Four Seasons: Spring 1"
              name="title"
              value={updatedSong.title}
              onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formGradNature">
            <Form.Label>Artist(s)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Artist - Max Richter, Antonion Vivaldi"
              name="artist"
              value={updatedSong.artist}
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
