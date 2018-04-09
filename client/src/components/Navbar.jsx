import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>Nav</div>
        <Link to={'Home'}>Home</Link>
        <Link to={'About'}>About</Link>
        <Link to={'Contact'}>Contact</Link>
        <Link to={'Projects'}>Projects</Link>
      </div>
    )
  }
}

export default Navbar;