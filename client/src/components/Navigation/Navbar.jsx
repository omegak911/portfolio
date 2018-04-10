import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navMain">
        <div className="navTab">
          <Link to={'Projects'}>Projects</Link>
        </div>
        <div className="navTab">
          <Link to={'Contact'}>Contact</Link>
        </div>
        <div className="navTab">
          <Link to={'About'}>About</Link>
        </div>
        <div className="navTab">
          <Link to={'/'}>Home</Link>
        </div>
      </div>
    )
  }
}

export default Navbar;