import React from 'react';

function Contact() {
  return (
    <div className="mainContact">
      <div className='contactForm'>
        <p>Let's get in touch.</p>
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
