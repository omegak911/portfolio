import React, { Component } from 'react';
import axios from 'axios';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      emailSent: false,
      sendFailed: false,
    }
  }

  handleEntry = (e) => {
    let { name, value } = e.target; 

    this.setState({ [name]: value });
  }

  contactMe = (e) => {
    e.preventDefault();
    let { name, email, subject, message } = this.state;

    axios
      .post('/api/email', { name, email, subject, message })
      .then(() => this.setState({ name: '', email: '', subject: '', message: '', emailSent: true }))
      .catch(() => this.setState({ sendFailed: true }));
  }

  render() {
    let { name, email, subject, message, emailSent, sendFailed } = this.state;

    return (
      <div id="contact" className="topContainer">
        <h2>Contact</h2>
        {!emailSent ? <div className="contactForm">
          <form onChange={this.handleEntry} onSubmit={this.contactMe}>
            <input name="name" type="text" autoComplete="name" placeholder="Your name" value={name}/>
            <input name="email" type="text" autoComplete="email" placeholder="Email" value={email} />
            <input name="subject" type="text" autoComplete="subject" placeholder="Subject" value={subject} />
            <textarea name="message" type="text" autoComplete="message" placeholder="Message" value={message} />
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
        :
        <div>
          Thanks!  I'll get back to you as soon as I can!
        </div>}
        {sendFailed && <div>Uh oh, looks like it didn't go through.  Please try again later.  Thanks!</div>}
      </div>
      
    )
  }
}

export default Contact;