import React from 'react';

const MenuItem = ({ name, description }) => {
    return (
      <div className="menu-item">
        <h3>{name}</h3>
        <p>{description}</p>
    
      </div>
    );
  };
  
  
  export default MenuItem;