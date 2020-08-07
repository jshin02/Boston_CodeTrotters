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

export const updateSong = (id, song) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/grads/' + id + '/songs/' + song.id,
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
