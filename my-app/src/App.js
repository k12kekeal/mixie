import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Search from "./Components/Search.jsx";
import Cover from "./Components/Cover.jsx";
import Playlist from "./Components/Playlist.jsx";
import Results from "./Components/Results.jsx";
import apiMaster from "./apiMaster.js";
import MixInfo from "./Components/MixInfo.jsx"

const App = () => {
  const [playlist, setPlaylist] = useState([]);

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
        <div className="left-column">
          <h1>MIXIE</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Search
            setSearchText={setSearchText}
            searchText={searchText}
            playlist={playlist}
            setPlaylist={setPlaylist}
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
          <MixInfo />
          <Cover />
          <Playlist playlist={playlist} setPlaylist={setPlaylist} />
        </div>
      </header>
    </div>
  );
};
export default App;
