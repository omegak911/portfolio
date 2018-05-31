import React, { Component } from 'react';

import './Blog.css';

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="blog" className="topContainer">
        <h2>Blog</h2>
        <div>About</div>
        
      </div>
    )
  }
}

export default About;