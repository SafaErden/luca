import React from 'react';

const SubMenu = ({ items, active }) => {
  const subItems = items;
  const menu = [];
  Object.keys(subItems).forEach(key => {
    const activeTab = active === key ? ' active' : '';
    menu.push(
      <li className='nav-item' key={key}>
        <a
          className={`nav-link px-0 up-menu text-secondary${activeTab}`}
          id={`nav-${key}-tab`}
          data-toggle='tab'
          href={`#nav-${key}`}
          role='tab'
          aria-controls={`nav-${key}`}>
          <small>{subItems[key]}</small>
        </a>
      </li>
    );
  });
  return (
    <div className='container p-0'>
      <nav className='row align-items-center justify-content-center my-1'>
        <div className='col-12 col-md-10 col-lg-8' id='nav-tab' role='tablist'>
          <ul className='nav w-100 nav-fill nav-pills'>{menu}</ul>
        </div>
      </nav>
    </div>
  );
};

export default SubMenu;
