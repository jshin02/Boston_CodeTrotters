import React, { Fragment, useState, useEffect } from 'react'
import AddSongs from './AddSongs'
import { addSong } from '../../api/songs'
import { showGrad } from '../../api/grad'
import SongCard from './SongCard'
import messages from '../AutoDismissAlert/messages'

const ManageSongs = props => {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: ''
  })
  const [songList, setSongList] = useState([])
  const [updateList, setUpdateList] = useState([])
  const [songSwitch, setSongSwitch] = useState(0)
  const msgAlert = props.msgAlert

  useEffect(() => {
    showGrad(props.user.gradId)
      .then(res => setSongList(res.data.grad.songs))
      .catch(error => msgAlert({
        heading: 'Profile Retrieval Failed with error: ' + error.message,
        message: messages.gradShowFailure,
        variant: 'danger'
      }))
  }, [updateList, songSwitch])
  const handleChange = event => {
    event.persist()
    setNewSong(() => {
      const updatedField = { [event.target.name]: event.target.value }
      const newInput = Object.assign({}, newSong, updatedField)
      return newInput
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    addSong(newSong, props.user)
      .then((res) => {
        setUpdateList(res.data.grad.songs)
      })
      .then(() => setNewSong({ title: '', artist: '' }))
      .then(() => msgAlert({
        heading: 'Successfully Added Song',
        message: messages.createSongSuccess,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Add Song Failed with error: ' + error.message,
        message: messages.createSongFailure,
        variant: 'danger'
      }))
  }

  return (
    <Fragment>
      {songList.length < 3
        ? <AddSongs newSong={newSong} handleChange={handleChange} handleSubmit={handleSubmit} />
        : <h2>Playlist is full</h2>
      }
      <h3 style={{ marginTop: '50px' }}>Top Songs</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {songList.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            gradId={props.user.gradId}
            msgAlert={msgAlert}
            setUpdateList={setUpdateList}
            songSwitch={songSwitch}
            setSongSwitch={setSongSwitch}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default ManageSongs
