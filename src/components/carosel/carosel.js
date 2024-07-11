import React, { useState } from "react";
import projectData from "../../data/projectData.json";
import Project from '../project/project';
import '../carosel/carosel.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carosel = () => {
  const projects = projectData.projects;

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject(currentProject === projects.length - 1 ? 0 : currentProject + 1);
  };

  const prevProject = () => {
    setCurrentProject(currentProject === 0 ? projects.length - 1 : currentProject - 1);
  };

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill onClick={prevProject} className="arrow arrow-left" />
      <Project
        title={projects[currentProject].title}
        link={projects[currentProject].link}
        subtitle={projects[currentProject].subtitle}
        content={projects[currentProject].content}
        tech={projects[currentProject].tech}
        key={currentProject}
        className='project'
      />
      <BsArrowRightCircleFill onClick={nextProject} className="arrow arrow-right" />
      <span className="indicators">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={currentProject === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setCurrentProject(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
