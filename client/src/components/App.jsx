import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';
import Projects from './Projects';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Hello from App
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact={true} path='/' component={Home}/>
              <Route path='/About' component={About}/>
              <Route path='/Contact' component={Contact}/>
              <Route path='/Projects' component={Projects}/>
            </Switch>
          </div>
        </BrowserRouter>      
      </div>

    )
  }
}

export default App;