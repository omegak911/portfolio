import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';
import Applications from './Applications/Applications';
import Tech from './Tech/Tech';

import './App.css';

setDefaultProps({
  percent: 20,
  //run function to setState?
})

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <OnVisible className="transition">
          <Applications />
        </OnVisible>
        <OnVisible className="transition">
          <Tech />
        </OnVisible>
        {/* <OnVisible className="transition">
          <Blog />
        </OnVisible> */}
        <OnVisible className="transition">
          <Contact />
        </OnVisible>
      </div>
    )
  }
}

export default App;