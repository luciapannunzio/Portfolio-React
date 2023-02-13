import React from 'react';
import{ Link } from 'react-router-dom';

// Style
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
      <Link className="work" to="/projects">✿ Work</Link>  
      <Link className='about' to="/about">About ✿</Link>
      </div>
      <hr style={{border:"0.8px solid black", width:"100%"}}/>
    </div>
  )
}

export default Navbar;