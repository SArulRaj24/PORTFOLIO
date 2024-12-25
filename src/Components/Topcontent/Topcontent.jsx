import React from 'react';
import './Topcontent.css';
import { Link } from 'react-scroll';

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Mr.Arulraj</h1>
            <p>about me......</p>
            <a href="www.google.com">
                <button className='topcontent__cvbtn'>Download CV</button>
            </a>
            <Link to='project' smooth={true} duration={500}>
                <button className='topcontent__workbtn'>My Works</button>
            </Link>
        </div>
    </div>
  )
}

export default Topcontent;