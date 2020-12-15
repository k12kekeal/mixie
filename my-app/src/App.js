import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <form>
          <input type="text" placeholder="enter a song name"></input>
          <input type="submit" value="Add song!"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
