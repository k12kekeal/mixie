import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from '../src/Components/Search.jsx'
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
      </header>
    </div>
  );
  }

}

export default App;
