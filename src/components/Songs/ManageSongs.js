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

  useEffect(() => {
    showGrad(props.user.gradId)
      .then(res => setSongList(res.data.grad.songs))
      .catch(() => console.log('could not get gradId'))
  }, [updateList])
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
      .then(() => console.log(songList))
      .catch(() => console.log('did not create a song'))
  }

  return (
    <Fragment>
      <AddSongs newSong={newSong} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {songList.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            gradId={props.user.gradId}
            setUpdateList={setUpdateList}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default ManageSongs
