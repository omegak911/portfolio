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
          <Link to={'/'} className="techText">HOME</Link>
        </div>
        <div className="navTab">
          <Link to={'Tech'} className="techText">TECH STACK</Link>
        </div>
        <div className="navTab">
          <Link to={'Projects'} className="techText">PROJECTS</Link>
        </div>
        <div className="navTab">
          <Link to={'Blog'} className="techText">BLOG</Link>
        </div>
        <div className="navTab">
          <Link to={'Contact'} className="techText">CONTACT</Link>
        </div>
      </div>
    )
  }
}

export default Navbar;