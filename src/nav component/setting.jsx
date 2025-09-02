import React from 'react'
import style from './setting.module.css'

function Setting({ onClick }) {
    return (
        <div className={style.settingbox}>
          <button className={style.button} onClick={onClick}>
            <img className={style.setting} src="/cogwheel.png" alt="Settings" />
          </button> 
        </div>
    )
}

export default Setting;
