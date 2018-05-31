import React, { Component } from 'react';

import './Projects.css';

const redidit = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI';
const rhymeDoctor = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI';
const trackYoScore = 'https://thumbs.dreamstime.com/b/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'Rhyme Doctor',
          image: rhymeDoctor,
          description: 'Rhyme visualization tool',
        },
        {
          title: 'Redidit',
          image: redidit,
          description: 'Clone of Reddit',
        },
        {
          title: 'TrackYoScore',
          image: trackYoScore,
          description: 'Game score tracking system',
        },
      ]
    }
  }

  render() {
    const { projects } = this.state;

    return (
      <div id="project" className="topContainer">
        <h2>Projects</h2>
        <div className="allProjectContainer">
          {projects.map((project, index) =>
            <div key={index} className="projectContainer">
              <img src={project.image} alt="project image"/>
              <div>{project.title}</div>
              <div>{project.description}</div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Projects;