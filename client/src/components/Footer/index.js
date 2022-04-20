import React from 'react';
import './styles.css';
import { BsFacebook, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <h6>Copyright © Active-ATX | All Rights Reserved 2022.</h6>
      </div>
      <div className="footer1">
        <div className="footer1Inner">
          <a className='links' href="https://www.facebook.com/active-atx">
            <BsFacebook />
          </a>
        </div>
        <div className="footer1Inner">
          <a className='links' href="https://www.instagram.com/active-atx">
            <BsInstagram />
          </a>
        </div>
        <div className="footer1Inner">
          <a className='links' href="tel:0000000000">
            <BsFillTelephoneFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// Copyright © Active-ATX | All Rights Reserved 2022.
