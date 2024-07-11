import React from 'react';
import { Link } from 'react-router-dom';


const NavPage = ({route, page}) => (
  <Link to={route} className="navpage" style={{marginRight: "30px"}}>{page}</Link>
);

export default NavPage;
