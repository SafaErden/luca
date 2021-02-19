import React from 'react';

const SubContent = ({ items, active }) => {
  const subItems = items;
  const menu = [];

  Object.keys(subItems).forEach(key => {
    const activeTab = active === key ? ' active' : '';
    menu.push(
      <div
        className={`tab-pane fade show ${activeTab}`}
        key={key}
        id={`nav-${key}`}
        role='tabpanel'
        aria-labelledby='nav-questions-tab'>
        {subItems[key]}
      </div>
    );
  });
  return (
    <div className='tab-content' id='nav-tabContent'>
      {menu}
    </div>
  );
};

export default SubContent;
