import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import {IconButton} from '@material-ui/core';
import { GitHub,LinkedIn,Instagram} from '@material-ui/icons';

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h2>Contact</h2>
        <div className='contact__container'>
          <p>
            Email: <span>forever@gmail.com</span>
          </p>
          <p>
            Github username: <span>@forever</span>
          </p>
          <div className='contact__icon'>
            <a href="www.Github.com">
              <IconButton>
                <GitHub />
              </IconButton>
            </a>
            <a href="www.Linkedin.com">
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>
            <a href="www.instagram.com">
              <IconButton>
                <Instagram />
              </IconButton>
            </a>
          </div>
        </div>
    </Element>
    
  )
}

export default Contact;