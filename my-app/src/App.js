import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Search from '../src/Components/Search.jsx';
import Cover from '../src/Components/Cover.jsx';
import Playlist from '../src/Components/Playlist.jsx';
import apiMaster from './apiMaster.js';

const App = () => {

  const [playlist, setPlaylist] = useState([
    {songId: 1, songTitle: "Live Like You're Dying", songArtist: "McGruff"},
    {songId: 2, songTitle: "Don't", songArtist: "Billy Morgan"},
    {songId: 3, songTitle: "Please", songArtist: "Bill Grounds"},
    {songId: 4, songTitle: "I've Got A Girl", songArtist: "Billy Corgan"}]);

  const [searchText, setSearchText] = useState('');
  const searchSong = (search) => {console.log(search)};

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search
            setSearchText={setSearchText}
            searchText={searchText}
            playlist={playlist}
            setPlaylist={setPlaylist}
            // searchSong={apiMaster.searchSong}/>
            searchSong={searchSong}/>
            <br></br>
          <Cover />
          <Playlist
            playlist={playlist}
            setPlaylist={setPlaylist}/>
        </header>
      </div>
    );
}

export default App;
