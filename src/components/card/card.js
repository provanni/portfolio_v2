import React from 'react';
import PropTypes from 'prop-types';


const Card = ({title, subtitle, content}) => (
  <div className="card">
    <div className='content'>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{content}</p>
    
    </div>
  </div>
);

export default Card;
