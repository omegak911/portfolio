import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Projects
      
      <div>
        <img src={'./images/RhymeDoctor.png'} height="100" width="100" alt="rhymeDoctor"/>
        <span>
          Rhyme Doctor - Social media app for reading rap lyrics submitted 
          by users from RhymeDoctor.fun. Add friends, follow friends' posts, 
          chat, like rap posts, and comment on popular user-made rap lyrics.

          Posting available on RhymeDoctor.fun
        </span>
      </div>
      <div>
        <img src="/images/Redidit.png" height="100" width="100" alt="redidit"/>
        <span>
          Redidit - Clone of Reddit
        </span>
      </div>
      
      
      
      
      
      </div>
    )
  }
}

export default Projects;