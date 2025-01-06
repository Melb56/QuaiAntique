import React from 'react';
import MenuItem from './MenuItem';

const MenuCategory = ({ category, items }) => {
    return (
      <div className="menu-category">
        <h2>{category}</h2>
        {items.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    );
  };
  
  export default MenuCategory;