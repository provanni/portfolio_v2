import React from 'react';
import './project.css'

const Project = ({ title, link, subtitle, content, tech }) => {
  return (
    <div className="project">
      <div className='projectinfo'>
        <h2><a href={link} target='_blank'>{title}</a></h2>
        <hr/>
        <h3>{subtitle}</h3>
        <p>{content}</p>
        <p>{tech}</p>
      </div>
    </div>
  );
}

export default Project;
