import React from 'react';
import { Link } from 'react-router-dom';


const NavPage = ({route, page}) => (
  <Link to={route} className="navpage" style={{marginLeft: "20px", padding: "10px 50px", border: "2px dotted #ff8dda", borderRadius: "20px"}}>{page}</Link>
);

export default NavPage;
