import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';
import Projects from './Projects/Projects';
import Tech from './Tech/Tech';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/Blog' component={Blog} />
              <Route path='/Contact' component={Contact} />
              <Route path='/Projects' component={Projects} />
              <Route path='/Tech' component={Tech} />
            </Switch>
          </div>
        </BrowserRouter>      
      </div>

    )
  }
}

export default App;