import axios from 'axios';
const url = "https://api.spotify.com/v1/"
//CREATE new playlist

const searchSong = (searchText) => {
  return axios.get(`${url}search?q=${searchText}&type=track`)
}


//ADD song to playlist

const apiMaster = {
  searchSong: searchSong,

}

export default apiMaster;
