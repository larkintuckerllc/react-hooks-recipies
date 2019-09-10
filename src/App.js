import React from 'react';
import Callback from './components/Callback';
import CallbackHook from './components/CallbackHook';
import Context from './components/Context';
import ContextHook from './components/ContextHook';
import Effect from './components/Effect';
import Effect2 from './components/Effect2';
import Effect2Hook from './components/Effect2Hook';
import EffectHook from './components/EffectHook';
import Ref from './components/Ref';
import RefHook from './components/RefHook';
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
        <Effect2 />
        <Effect2Hook />
        <Context />
        <ContextHook />
        <Ref />
        <RefHook />
      </header>
    </div>
  );
}

export default App;
