import React, { Component } from 'react';

import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';
import Applications from './Applications/Applications';
import Tech from './Tech/Tech';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Applications />
        <Tech />
        <Blog />
        <Contact />
      </div>

    )
  }
}

export default App;