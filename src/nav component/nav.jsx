import React, { useState } from 'react'
import style from './nav.module.css'
import Setting from '../nav component/setting';
import LogoutModal from '../nav component/LogoutModal';

function Nav({ onLogout, user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={style.nav}>
        <img  className={style.logo}src="and make this backgr.png" alt="" />
         <h1 className={style.Name}>FoodApp</h1>
        <div className={style.settingContainer}>
          <Setting onClick={handleSettingsClick} />
        </div>
      </div>
      <LogoutModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLogout={handleLogout}
        user={user}
      />
    </>
  )
}

export default Nav
