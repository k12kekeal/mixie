import axios from 'axios';
const url = "https://api.spotify.com/v1/"
axios.defaults.headers.common['Authorization'] = "Bearer BQBlD8lQ65YztmMLkdkRl3z2tTcxjQk4UFY39FgF6xhibOTLrUPmGckiumugj2ym3vTNBPnVAGI875UxWtf4Kq3pMfV_Rq10nxii510QF-wVrySGVWtB0GiKBzktYTcEvbM6cD8JUEfr7y69B97gJRmSEiuJkFfRnWf7QUhHfj_NSPqu2KiB19YjiQBLnKcc4Ww";
//CREATE new playlist

const searchSong = (searchText) => {
  return axios.get(`${url}search?q=${searchText}&type=track&market=US&limit=5`)
}


//ADD song to playlist

const apiMaster = {
  searchSong: searchSong,

}

export default apiMaster;
