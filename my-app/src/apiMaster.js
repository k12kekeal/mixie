import axios from 'axios';
import AUTH_TOKEN from './config.js';
const url = "https://api.spotify.com/v1/"
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
//CREATE new playlist

const searchSong = (searchText) => {
  return axios.get(`${url}search?q=${searchText}&type=track&market=US&limit=10`)
}


//ADD song to playlist

const apiMaster = {
  searchSong: searchSong,

}

export default apiMaster;
