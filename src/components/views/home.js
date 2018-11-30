import React, { Component } from 'react';
import Supernav from '../supernav';
import logo from '../../logo.svg';


class Home extends Component {
  render() {
    return (
      <div id="home">
        <header>
          <Supernav />
        </header>
        <section className="main-wrapper scroll scroll-thin">
          <div id="user-options" className="selection-container white">
            [welcome selection]
            [welcome selection]
            [welcome selection]
          </div>
        </section>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Home;