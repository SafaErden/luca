import React from 'react';
import { useParams } from 'react-router-dom';
import Questions from './List';
import NoMatch from '../noMatch';
import SubMenu from '../../components/Tab/SubMenu';
import SubContent from '../../components/Tab/SubContent';

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
      <div id='posts'>
        <SubMenu items={items} active={activeTab} />
        <SubContent items={itemsContent} active={activeTab} />
      </div>
    </div>
  );
};

export default Profile;
