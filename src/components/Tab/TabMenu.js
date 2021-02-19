import React from 'react';
import { NavLink } from 'react-router-dom';

const TabMenu = ({ items, currentPath }) => {
  const tabItems = items;
  const a = currentPath.split('/');
  const menu = [];
  Object.keys(tabItems).forEach(key => {
    menu.push(
      <li className='nav-item' key={key}>
        <NavLink
          to={`/${a[1]}/${key}`}
          className='nav-link btn-sm text-secondary rounded-0'
          activeClassName='text-danger border-bottom border-danger'>
          {tabItems[key]}
        </NavLink>
      </li>
    );
  });
  return (
    <div className='nav bg-white theBorder my-3'>
      <ul className='nav w-100 nav-fill nav-pills '>{menu}</ul>
    </div>
  );
};

export default TabMenu;
