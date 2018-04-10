import React, { Component } from 'react';

import './Tech.css';

export default class Tech extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="techMain">
        <div className="techContainerTop">
          <div className="techContainer1">
            <div className="tech">
              Javascript
            </div>
            <div className="tech">
              Node.js
            </div>
            <div className="tech">
              Express.js
            </div>
            <div className="tech">
              React
            </div>
            <div className="tech">
              React Native
            </div>
            <div className="tech">
              React Redux
            </div>
            <div className="tech">
              MySQL
            </div>
            <div className="tech">
              PostgreSQL
            </div>
            <div className="tech">
              HTML5
            </div>
          </div>
          <div className="techContainer2">
            <div className="tech">
              CSS3
            </div>
            <div className="tech">
              MongoDB
            </div>
            <div className="tech">
              Express
            </div>
            <div className="tech">
              RESTful API
            </div>
            <div className="tech">
              Socket.IO
            </div>
            <div className="tech">
              jQuery
            </div>
          </div>
        </div>
      </div>
    )
  }

}