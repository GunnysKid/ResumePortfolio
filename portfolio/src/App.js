import logo from "./logo.svg";
import "./App.css";
import './index.css';
import Navbar from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" />
      <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </div>
    </div>
  );
}

export default App;
