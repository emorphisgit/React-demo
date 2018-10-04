import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
        <div className="page" data-page="home">
  <div className="background-banner"></div>
  <div className="layout-content">
    <div className="layout-main">
      <div className="page-header">
        <div className="columns">
          <h1 className="page-title">Welcome Back, {props.name}</h1>
        </div>
      </div>
    </div>
  </div>
</div>
    )
};

export default person;