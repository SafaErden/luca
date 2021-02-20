import React from 'react';

const SubMenu = ({ items, active }) => {
  const subItems = items;
  const menu = [];
  Object.keys(subItems).forEach(key => {
    const activeTab = active === key ? ' active' : '';
    menu.push(
      <li className='nav-item' key={key}>
        <a
          className={`nav-link sub-menu px-0 text-secondary${activeTab}`}
          data-toggle='tab'
          href={`#nav-${key}`}>
          <small>{subItems[key]}</small>
        </a>
      </li>
    );
  });
  return (
    <nav className='row align-items-center justify-content-start m-0'>
      <div className='col-12 col-md-10 col-lg-8'>
        <ul className='nav w-100 nav-fill nav-pills'>{menu}</ul>
      </div>
    </nav>
  );
};

export default SubMenu;
