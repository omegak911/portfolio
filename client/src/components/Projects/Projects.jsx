import React, { Component } from 'react';

import './Projects.css';

const redidit = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI';
const rhymeDr = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI';

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="project">
        <div className="rhymeDrContainer">
          <img src={rhymeDr} alt="rhymeDoctor"/>
          <br/>
          <span>
            Rhyme Doctor - Social media app for reading rap lyrics submitted 
            by users from RhymeDoctor.fun. Add friends, follow friends' posts, 
            chat, like rap posts, and comment on popular user-made rap lyrics.

            Posting available on RhymeDoctor.fun
          </span>
        </div>
        <div className="rediditContainer">
          <img src={redidit} alt="redidit"/>
          <br/>
          <span>
            Redidit - Clone of Reddit
          </span>
        </div>
      </div>
    )
  }
}

export default Projects;