import React, { Component } from 'react';

import Stars from './Stars';

import './Tech.css';

export default class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techStack: [
        ['Javascript', 5],
        ['Node.js', 5],
        ['Express', 5],
        ['React', 5],
        ['Socket.IO', 5],
        ['HTML5', 5],
        ['CSS3', 5],
        ['React Redux', 4],
        ['MySQL', 4],
        ['PostgreSQL', 4],
        ['MongoDB', 4],
        ['Express', 4],
        ['jQuery', 4],
        ['RESTful API', 4],
        ['React Native', 3],
      ]
    }
  }

  render() {
    const { contain1 } = this.state;

    return (
      <div className="techMain">
        <div className="techContainerTop">
          <div className="techContainer">
            {techStack.map((tech, index) => {
              <div className="techContainer1">
                <div className="tech">
                  {}
                </div>
              </div>
              })}
          </div>
          {/* <div className="techContainer1">
            <div className="tech">
              Javascript
            </div>
            <div className="tech">
              Node.js
              <Stars />
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
          </div> */}
        </div>
      </div>
    )
  }

}