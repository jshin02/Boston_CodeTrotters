import React, { Fragment, useState, useEffect } from 'react'
import AddSongs from './AddSongs'
import { addSong } from '../../api/songs'
import { showGrad } from '../../api/grad'
import SongCard from './SongCard'

const ManageSongs = props => {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: ''
  })
  const [songList, setSongList] = useState([])
  const [updateList, setUpdateList] = useState([])
  const [songSwitch, setSongSwitch] = useState(0)

  useEffect(() => {
    showGrad(props.user.gradId)
      .then(res => setSongList(res.data.grad.songs))
      .catch(() => console.log('could not get gradId'))
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
        console.log('created a song', res)
      })
      .then(() => setNewSong({ title: '', artist: '' }))
      .catch(() => console.log('did not create a song'))
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
