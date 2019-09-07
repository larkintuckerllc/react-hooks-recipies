import React from 'react';
import Callback from './components/Callback';
import CallbackHook from './components/CallbackHook';
import Effect from './components/Effect';
import EffectHook from './components/EffectHook';
import State from './components/State';
import StateHook from './components/StateHook';
import logo from './logo.svg';
import './App.css';

function App() {
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
        <Callback />
        <CallbackHook />
        <State />
        <StateHook />
        <Effect />
        <EffectHook />
      </header>
    </div>
  );
}

export default App;
