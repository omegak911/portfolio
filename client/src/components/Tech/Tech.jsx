import React, { Component } from 'react';

import Stars from './Stars';

import './Tech.css';

export default class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FrontEnd: [
        { tech: 'Javascript', rating: 5 },
        { tech: 'React', rating: 5 },
        { tech: 'Socket.IO', rating: 5 },
        { tech: 'HTML5', rating: 5 },
        { tech: 'CSS3', rating: 5 },
        { tech: 'React Router', rating: 5 },
        { tech: 'React Redux', rating: 4 },
        { tech: 'jQuery', rating: 4 },
        { tech: 'React Native', rating: 3 },
      ],
      BackEnd: [
        { tech: 'Node.js', rating: 5 },
        { tech: 'Express', rating: 5 },
        { tech: 'MySQL', rating: 4 },
        { tech: 'PostgreSQL', rating: 4 },
        { tech: 'MongoDB', rating: 4 },
        { tech: 'RESTful API', rating: 4 },
        { tech: 'BCrypt', rating: 4 },
        { tech: 'Passport.js', rating: 3 },
      ],
      Deployment: [
        { tech: 'AWS', rating: 1 },
        { tech: 'Nginx', rating: 0 },
      ],
      DevTools: [
        { tech: 'Git', rating: 4 },
        { tech: 'NPM', rating: 3 },
        { tech: 'Webpack', rating: 3 },
        { tech: 'Babel', rating: 2 },
        { tech: 'Yarn', rating: 2 },
      ],
    }
  }

  render() {
    const { frontEnd, backEnd, deployment, devTools } = this.state;

    return (
      <div id="tech" className="topContainer">
        <div className="midTechContainer">
          <div>
            <h2>Tech Stack</h2>
            <div className="cover">
              {Object.keys(this.state).map(techType =>
                <div className="techType">
                  <div className="techTypeTitle">
                    <h3>{techType}</h3>
                  </div>
                  <div className="techStack">
                  {this.state[techType].map(tech => 
                    <div className="eachTech">
                        <div id="octagon">
                          {tech.tech}
                          <Stars solidStars={tech.rating} />
                        </div>
                    </div>
                  )}
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