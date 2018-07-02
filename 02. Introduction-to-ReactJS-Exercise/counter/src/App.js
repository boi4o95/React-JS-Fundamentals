import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import render from './index'

let counter = 0
const incrementCounter = () => {
  counter++
  render(App(), document.getElementById('root'))
}

const App = () => (
      <div className="App">
        <header className="App-header">
            {counter}
        </header>
        <p className="App-intro">
          <button onClick={incrementCounter}>Clik</button>
        </p>
      </div>
    );

export default App;
