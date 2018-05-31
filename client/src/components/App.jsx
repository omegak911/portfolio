import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';
import Projects from './Projects/Projects';
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
        <Projects />
        <Tech />
        <Blog />
        <Contact />
      </div>

    )
  }
}

export default App;