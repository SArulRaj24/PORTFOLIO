import React from 'react';
import './Expcontainer.css';
import {Element} from 'react-scroll';

const Expcontainer = () => {
  return (
    <Element className='expcontainer' id='exp'>
        <div className='educational__detail'>
            <div className='expcontainer__value'>
                <h2>Education</h2>
            </div>
            <div className='expcontainer__clg'>
                <h2>B.tech</h2>
                <h3>clg name</h3>
                <h4>cgpa</h4>
            </div>
            <div className='expcontainer__hss'>
                <h2>12</h2>
                <h3>school name</h3>
                <h4>per</h4>
            </div>
            <div className='expcontainer__sse'>
                <h2>10</h2>
                <h3>school </h3>
                <h4>per</h4>
            </div>
        </div>
    </Element>
  )
}

export default Expcontainer;