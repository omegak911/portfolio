import React, { Component } from 'react';

import Stars from './Stars';

import './Tech.css';

export default class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontEnd: [
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
      backEnd: [
        { tech: 'Node.js', rating: 5 },
        { tech: 'Express', rating: 5 },
        { tech: 'MySQL', rating: 4 },
        { tech: 'PostgreSQL', rating: 4 },
        { tech: 'MongoDB', rating: 4 },
        { tech: 'RESTful API', rating: 4 },
        { tech: 'BCrypt', rating: 3 },
        { tech: 'Passport', rating: 0 },
      ],
      deployment: [
        { tech: 'AWS', rating: 1 },
        { tech: 'Nginx', rating: 0 },
      ],
      devTools: [
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
      <div className="techMain">
        <div className="techContainerTop">
          <div className="techContainerMiddle">
            <div className="category">FRONTEND</div>
            {frontEnd.map((tech, index) => 
              <div className="techContainerInner">
                <div className="tech">
                  {tech.tech}
                  <Stars solidStars={tech.rating}/>
                </div>
              </div>
            )}
          </div>
          <div className="techContainerMiddle">
            <div className="category">BACKEND</div>
            {backEnd.map((tech, index) =>
              <div className="techContainerInner">
                <div className="tech">
                  {tech.tech}
                  <Stars solidStars={tech.rating}/>
                </div>
              </div>
            )}
          </div>
          <div className="techContainerMiddle">
            <div className="category">DEPLOYMENT</div>
            {deployment.map((tech, index) =>
              <div className="techContainerInner">
                <div className="tech">
                  {tech.tech}
                  <Stars solidStars={tech.rating}/>
                </div>
              </div>
            )}
          </div>
          <div className="techContainerMiddle last">
            <div className="category">DEVTOOLS</div>
            {devTools.map((tech, index) =>
              <div className="techContainerInner">
                <div className="tech">
                  {tech.tech}
                  <Stars solidStars={tech.rating}/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

}