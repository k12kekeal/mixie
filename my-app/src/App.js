import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from '../src/Components/Search.jsx';
import Cover from '../src/Components/Cover.jsx';
import Playlist from '../src/Components/Playlist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: []
    }
    this.addSong = this.addSong.bind(this);
    this.removeSong = this.removeSong.bind(this);
  }

  addSong(song) {
    this.setState({
      playlist: [...this.state.playlist, song]
    })
  }

  removeSong(songId) {
    this.setState(state => {
      const list = state.playlist.filter(item => item.id !== songId);
      return {
        list,
      };
    });
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search></Search>
        <Cover></Cover>
        <Playlist></Playlist>
      </header>
    </div>
  );
  }

}

export default App;
