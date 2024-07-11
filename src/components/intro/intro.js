import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 


const Intro = () => {
  

function handleClick()
{
     window.open("assets/Master Resume.pdf","_blank");
}

  return(
    <div className="intro-container" style={{float: "left", maxWidth: "45%"}}>
    <h1>
      <mark>Hello World!</mark>
    </h1>
    <p>I'm Nicole. Nice to meet you! </p>

    <p>I'm currently a Bachelor of Information student at the University of Toronto, and previously studied Computer Programming at Sheridan College. Im currently looking for opportunities in Web Development and Data Analysis.</p>
    
    <button onClick={handleClick} style={{marginTop: '30px'}}>Download Resume</button> <br/>
    <a href='https://github.com/provanni' target='_blank'><FontAwesomeIcon className='icon' icon={faSquareGithub}/></a>
    <a href='https://www.linkedin.com/in/nicoleprovan/' target="_blank"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
  </div>
  )
};

export default Intro;

