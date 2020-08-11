import apiUrl from '../apiConfig'
import axios from 'axios'

export const addSong = (songs, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/songs/' + user.gradId,
    data: {
      song: {
        title: songs.title,
        artist: songs.artist,
        owner: user._id
      }
    }
  })
}

export const updateSong = (gradId, song, songId) => {
  console.log('grad id', gradId, 'song', song, 'song id', songId)
  return axios({
    method: 'PATCH',
    url: apiUrl + '/grads/' + gradId + '/songs/' + songId,
    data: {
      song: {
        title: song.title,
        artist: song.artist
      }
    }
  })
}

export const deleteSong = (gradId, songId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/grads/' + gradId + '/songs/' + songId
  })
}
