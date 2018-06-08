import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Stars from './Stars';

import './Tech.css';

export default class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FrontEnd: [
        { tech: 'Javascript', solid: [1,2,3,4,5], empty: [] },
        { tech: 'React', solid: [1,2,3,4,5], empty: [] },
        { tech: 'Socket.IO', solid: [1,2,3,4,5], empty: [] },
        { tech: 'HTML5', solid: [1,2,3,4,5], empty: [] },
        { tech: 'CSS3', solid: [1,2,3,4,5], empty: [] },
        { tech: 'React Router', solid: [1,2,3,4,5], empty: [] },
        { tech: 'React Redux', solid: [1,2,3,4], empty: [5] },
        { tech: 'jQuery', solid: [1,2,3,4], empty: [5] },
        { tech: 'React Native', solid: [1,2,3], empty: [4,5] },
      ],
      BackEnd: [
        { tech: 'Node.js', solid: [1,2,3,4,5], empty: [] },
        { tech: 'Express', solid: [1,2,3,4,5], empty: [] },
        { tech: 'MySQL', solid: [1,2,3,4], empty: [5] },
        { tech: 'PostgreSQL', solid: [1,2,3,4], empty: [5] },
        { tech: 'MongoDB', solid: [1,2,3,4], empty: [5] },
        { tech: 'RESTful API', solid: [1,2,3,4], empty: [5] },
        { tech: 'BCrypt', solid: [1,2,3,4], empty: [5] },
        { tech: 'Passport.js', solid: [1,2,3], empty: [4,5] },
      ],
      Deployment: [
        { tech: 'AWS', solid: [1], empty: [2,3,4,5] },
        { tech: 'Nginx', solid: [],empty: [1,2,3,4,5] },
      ],
      DevTools: [
        { tech: 'Git', solid: [1,2,3,4], empty: [5] },
        { tech: 'NPM', solid: [1,2,3], empty: [4,5] },
        { tech: 'Webpack', solid: [1,2,3], empty: [4,5] },
        { tech: 'Babel', solid: [1,2], empty: [3,4,5] },
        { tech: 'Yarn', solid: [1,2], empty: [3,4,5] },
      ],
    }
  }

  // stuff = () => {
  //   this.setState({ stuff: [...this.state.stuff, 1]})
  // }

  render() {
    const { frontEnd, backEnd, deployment, devTools } = this.state;

    return (
      <div id="tech" className="topContainer">
        <div className="midTechContainer">
          <div>
            {/* <button onClick={this.stuff}>******</button>
            <ReactCSSTransitionGroup
              transitionName="techAnimation"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}
              // transitionEnterTimeout={500}
              // transitionLeaveTimeout={300}
              >
              {this.state.stuff.map((item, index) =>
                <div key={index}>
                  {item}
                </div>
              )}
            </ReactCSSTransitionGroup> */}
            <h2>Tech Stack</h2>
            <div className="cover">
              {Object.keys(this.state).map((techType, index) =>
                <div className="techType" key={index}>
                  <div className="techTypeTitle">
                    <h3>{techType}</h3>
                  </div>
                  <div className="techStack">
                    <ReactCSSTransitionGroup
                          className="techAnimation"
                         component='div'
                          transitionName="techAnimation"
                          transitionAppear={true}
                          transitionAppearTimeout={1000}
                          transitionEnter={false}
                          transitionLeave={false}>
                      {this.state[techType].map((tech, index) =>
                          <div className="eachTech" key={index}>
                              <div id="octagon">
                                {tech.tech}
                                <Stars solidStars={tech.solid} emptyStars={tech.empty} />
                              </div>
                          </div>
                      )}
                    </ReactCSSTransitionGroup>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

}