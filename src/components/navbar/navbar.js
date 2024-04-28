import React from 'react';
import NavPage from '../NavPage/NavPage';


const Navbar = () => (
  <nav style={{margin: "50px 50px 0 50px", textAlign: "center"}}>
    <NavPage route = {"/"}page = {"Home"}/>
    <NavPage route = {"/projects"} page = {"Projects"}/>
    <NavPage route={"/casestudy"} page = {"Case Study"}/>
    <NavPage route={"/duck"} page = {"Show me a Duck"}/>
  </nav>
);


export default Navbar;
