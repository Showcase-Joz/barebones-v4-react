import React, { Component } from 'react';



class Home extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-search">
          <i aria-label="Search" className="fas fa-search">&nbsp;</i>
          <input type="search" name="seaerch" id="search" placeholder="Search...." value="{{search}}" />
        </div>
        <div className="nav-main"></div>
        <div className="nav-user">
          <ul className="quick-menu">
            <li><i onClick="goHome()" className="fas fa-home">&nbsp;</i></li>
            <li><i onClick="goUser()" className="fas fa-cogs">&nbsp;</i></li>
            <li><i onClick="goNotify()" className="fas fa-bell">&nbsp;</i></li>
          </ul>
        </div>

      </nav>
    );
  }
}

export default Home;