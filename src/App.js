import './App.css';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
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
  );
}

export default App;
