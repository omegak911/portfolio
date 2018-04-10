import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  // contactMe = () => {
  //   //send sms or email
  // }

  render() {
    return (
      <div className="contactMain">
        <div className="contactInstructions">
          Let's chat!

        </div>
        <div className="contactForm">
          <form onSubmit={this.contactMe}>
            <input type="text" autoComplete="name" placeholder="Your name"/>
            <input type="text" autoComplete="email" placeholder="Email"/>
            <input type="text" autoComplete="subject" placeholder="Subject"/>
            <textarea type="text" autoComplete="message" placeholder="Message"/>
            <br/>
            <button type="button">Submit</button>
            <button type="button">Cancel</button>
          </form>
        </div>
      </div>
      
    )
  }
}

export default Contact;