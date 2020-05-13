import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import URLcheck from "./URLcheck";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Route path="/" exact component= {URLcheck}/>
      </header>
    </div>
  );
}

export default App;
