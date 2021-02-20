import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Questions from './List';
import NoMatch from '../noMatch';
import SubMenu from '../../components/Tab/SubMenu';
import SubContent from '../../components/Tab/SubContent';
import Ask from '../../components/Icons/Ask';

const Profile = () => {
  const { active } = useParams();

  const activeTab = active || 'popular';
  const items = {
    popular: 'POPULARES',
    nuevos: 'NUEVOS',
    seguidos: 'SEGUIDOS',
  };
  const itemsContent = {
    popular: <Questions />,
    nuevos: <NoMatch />,
    seguidos: <NoMatch />,
  };

  return (
    <div className='container pb-5'>
      <div className='d-flex align-items-center justify-content-between mb-4 mt-4 px-3'>
        <h5 className='m-0 p-0'>Comunidad Luca</h5>
        <NavLink to='/ask' className='btn btn-sm btn-custom d-none d-md-block text-white px-4 py-2'>
          NUEVA PREGUNTA
        </NavLink>
      </div>
      <div>
        <SubMenu items={items} active={activeTab} />
        <SubContent items={itemsContent} active={activeTab} />
      </div>
      <NavLink to='/ask' className='btn btn-sm d-md-none text-white btn-custom-circular'>
        <Ask />
      </NavLink>
    </div>
  );
};

export default Profile;
