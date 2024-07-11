import React from 'react';
import GitHubCalendar from 'react-github-calendar';


const Stats = () => (
  <div>
    <h1><mark>Stats</mark></h1>
    <div style={{textAlign: 'center', paddingLeft: '35px'}}>
    <GitHubCalendar username="provanni" hideTotalCount="true"/>
    </div>
  </div>
);


export default Stats;
