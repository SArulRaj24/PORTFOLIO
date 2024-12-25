import React from 'react';
import './Projectcontainer.css';
import {Element} from 'react-scroll';

const Projectcontainer = () => {
  return (
    <Element className='projectcontainer' id='project'>
      <div className='projectcontainer__details'>
        <h2>Projects</h2>
        <p>here are the projects where I worked </p>
      </div>
      <div className='projectcontainer__pro'>
      <div className='projectcontainer__pro1'>
        <h4>project name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti.</p>
      </div>
      <div className='projectcontainer__pro2'>
        <h4>project name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti.</p>
      </div>
      <div className='projectcontainer__pro3'>
        <h4>project name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti.</p>
      </div>
      <div className='projectcontainer__pro4'>
        <h4>project name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti.</p>
      </div>
      <div className='projectcontainer__pro5'>
        <h4>project name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti.</p>
      </div>
      </div>
      

    </Element>
  )
}

export default Projectcontainer;