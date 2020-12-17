import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Search from "./Components/Search.jsx";
import Cover from "./Components/Cover.jsx";
import Playlist from "./Components/Playlist.jsx";
import Results from "./Components/Results.jsx";
import apiMaster from "./apiMaster.js";

const App = () => {
  const [playlist, setPlaylist] = useState([
    { songId: 1, songTitle: "Live Like You're Dying", songArtist: "McGruff" },
    { songId: 2, songTitle: "Don't", songArtist: "Billy Morgan" },
    { songId: 3, songTitle: "Please", songArtist: "Bill Grounds" },
    { songId: 4, songTitle: "I've Got A Girl", songArtist: "Billy Corgan" },
  ]);

  const [searchText, setSearchText] = useState("");

  const [results, setResults] = useState([]);

  const searchSong = (search) => {
    console.log("searching song...", search);
    apiMaster
      .searchSong(search)
      .then((data) => {
        setResults(data.data.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="column">
          <img src={logo} className="App-logo" alt="logo" />
          <Search
            setSearchText={setSearchText}
            searchText={searchText}
            playlist={playlist}
            setPlaylist={setPlaylist}
            // searchSong={apiMaster.searchSong}/>
            searchSong={searchSong}
          />
          {results.length > 0 ? (
            <Results
              results={results}
              setPlaylist={setPlaylist}
              playlist={playlist}
            />
          ) : null}
        </div>
        <div className="column">
          <Cover />
          <Playlist playlist={playlist} setPlaylist={setPlaylist} />
        </div>
      </header>
    </div>
  );
};
export default App;
