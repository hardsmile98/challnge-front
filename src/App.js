import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect } from 'react';
import axios from 'axios';

const ulr = 'http://localhost:8080'

const interval = 1000 * 15;

function App() {

  const requset = useCallback(() => {
    try {
      axios(ulr)
    } catch (error) {
      console.log('error')
    }
  }, []);

  useEffect(() => {
    requset();

    setInterval(() => {
      requset()
    }, interval);
  }, [requset]);

  return (
    <div className="App">
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
  );
}

export default App;
