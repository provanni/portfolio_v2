import React from 'react'
import NavBar from "../components/navbar/navbar"
import projectData from "../data/projectData.json"
import { Carosel } from '../components/carosel/carosel'

console.log('projectData:', projectData);

export const Projects = () => {
  return (
    <div className="app" style={{position: "relative", marginLeft: `calc(10px + 15.5625vw)`, marginRight: `calc(10px + 15.5625vw)`}}> 
    <NavBar/>
    <Carosel />
    </div>
  );
}
