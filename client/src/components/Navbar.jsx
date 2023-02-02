import React from 'react';
import{ Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
      <Link className="work" to="/">✿Work</Link>
      <Link className='about' to="/about">About✿</Link>
      </div>
      <hr style={{border:"0.8px solid black"}}/>
    </div>
  )
}

export default Navbar;