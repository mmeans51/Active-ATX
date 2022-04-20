import React from 'react';

function Contact() {

  return (
    <div className="mainContact">
      <p>Let's get in touch.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Email" />
        <textarea rows="5" placeholder="Message" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
