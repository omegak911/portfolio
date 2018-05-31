import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navMain">
        <a href="#home">Home</a>
        <a href="#project">Projects</a>
        <a href="#tech">Tech</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    )
  }
}

export default Navbar;