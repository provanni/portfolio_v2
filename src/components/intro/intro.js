import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 


const Intro = () => {
  

function handleClick()
{
     window.open("assets/Frontend-Resume.pdf","_blank");
}

  return(
    <div className="intro-container" style={{float: "left", maxWidth: "45%"}}>
    <h1>
      <mark>Hello World!</mark>
    </h1>
    <p>I'm Nicole. Nice to meet you! </p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat.</p>
    
    <button onClick={handleClick} style={{marginTop: '30px'}}>Download Resume</button> <br/>
    <a href='https://github.com/provanni' target='_blank'><FontAwesomeIcon className='icon' icon={faSquareGithub}/></a>
    <a href='https://www.linkedin.com/in/nicoleprovan/' target="_blank"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
  </div>
  )
};

export default Intro;

