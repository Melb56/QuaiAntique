import React from 'react';
import MenuCategory from './MenuCategory';
import { menuData } from '../../data/menuData' ;

const Menu = () => {
  const categories = [...new Set(menuData.map((item) => item.category))];

  return (
    <div className="menu">
      {categories.map((category) => (
        <MenuCategory
          key={category}
          category={category}
          items={menuData.filter((item) => item.category === category)}
        />
      ))}
    </div>
  );
};

export default Menu;