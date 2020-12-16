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
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <Search></Search>
        <Cover></Cover>
        <Playlist></Playlist>
      </header>
    </div>
  );
  }

}

export default App;
