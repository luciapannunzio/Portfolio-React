import React from 'react';
// import images from '../assets/images';

import profile from '../assets/img/profile.jpg';

// Style
import './About.scss';

function About() {
  return (
    <div className='about-page'>
      <img className='img' src={profile} alt=''/>
      {/* <img src={images.profile} alt='' /> */}

      <div className='text-about'>ABOUT 
       <p>Hi there! I am Lucia, a Junior Frontend Developer with 8+ years experience in visual arts.</p> <p> My unique background allows me to build creative tech solutions – and now I’m looking to further grow and refine my skills within a collaborative team.</p>
       
       <p>I am excited to make the leap and continue refining my skills with the right company. <a className='email' href="mailto:luciapannunzio@gmail.com" target='blank'>
       Drop me a line </a>or check me on at:</p><div className='link'> <a className='link-one' href='https://github.com/luciapannunzio' target='blank'> GitHub </a> <a className='link-two' href='https://www.linkedin.com/in/luciapannunziovanderwedden/' target='blank'> LinkedIn </a> </div>
       
       <p className='skills'>
      
       SKILLS/TOOLKITS 
       <hr style={{border:"0.8px solid black"}}/>
       HTML5 
       <br/>
       CSS3 
       <br/>
       SASS 
       <br/>
       Bootstrap 
       <br/>
       JavaScript 
       <br/>
       ReactJS
       <br/>
       NodeJS 
       <br/>
       MongoDB 
       <br/>
       ExpressJS 
       <br/>
       TypeScript
       <br/>
       Postman
       <br/>
       Insomnia
       <br/>
       Axios
       <br/>
       GitHub 
       <br/>
       Git
       <br/>
       Figma 
       <br/>
       Canva
       <br/>
       Linux
       <br/>
       macOS/iOS
       </p>
      
      </div>
    </div>
  )
}

export default About