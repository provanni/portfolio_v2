import React, { useState, useRef, useEffect } from 'react';
import NavPage from '../NavPage/NavPage';
import Toggle from '../toggle/toggle';

const Navbar = () => {
  const [bodyColor, setBodyColor] = useState('aliceblue');
  const [textColor, setTextColor] = useState('black');
  const [buttonColor, setButtonColor] = useState('black');

  const ToggleTheme = () => {
    if (bodyColor === 'aliceblue') {
      // Dark colors
      setTextColor('white');
      setBodyColor('#192642');
      setButtonColor('white');
    } else {
      // Light colors
      setBodyColor('aliceblue');
      setTextColor('black');
      setButtonColor('black');
    }
  };

  // Apply the body color
  document.body.style.backgroundColor = bodyColor;
  document.body.style.color = textColor;


  return (
  <nav style={{margin: "70px 0 0 0", textAlign: 'left', fontSize: '20px'}}>
    <NavPage route = {"/"}page = {"Home"}/>
    <NavPage route = {"/projects"} page = {"Projects"}/>
    <NavPage route={"/research"} page = {"Research"}/>
    <NavPage route={"/duck"} page = {"Show me a Duck"}/>
    <Toggle onToggle={ToggleTheme} />
  </nav>
  )
}

export default Navbar