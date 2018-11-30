import React, { Component } from 'react';
import Home from './components/views/home';
import './App.min.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <Home />
      </div>
    );
  }
}

export default App;