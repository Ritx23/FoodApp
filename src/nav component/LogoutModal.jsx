import React from 'react';
import style from './setting.module.css';

function LogoutModal({ isOpen, onClose, onLogout, user }) {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <h3>Account Settings</h3>
          <button className={style.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={style.userInfo}>
          <p>Logged in as: <strong>{user?.email}</strong></p>
        </div>
        <div className={style.logoutSection}>
          <button className={style.logoutButton} onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
