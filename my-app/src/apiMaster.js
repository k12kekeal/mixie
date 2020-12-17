import axios from 'axios';
import config from './config.js';
const url = "https://api.spotify.com/v1/"
axios.defaults.headers.common['Authorization'] = `Bearer ${config.AUTH_TOKEN}`;

//CREATE new playlist
const createPlaylist = () => {
  return axios.get(`${url}users/${config.USER_ID}/playlists`)
}

const searchSong = (searchText) => {
  return axios.get(`${url}search?q=${searchText}&type=track&market=US&limit=10`)
}


//ADD song to playlist

const apiMaster = {
  searchSong: searchSong,

}

export default apiMaster;
