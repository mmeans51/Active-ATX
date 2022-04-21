import React from 'react';
import './styles.css'

function Contact() {
  return (
    <div className="mainContact">
      <div className='contactForm'>
        <h3 className='contactTitle'>Let's get in touch.</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Email" />
          <textarea rows="5" placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
