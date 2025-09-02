import React from 'react'
import style from './innerContainer.module.css';

function innerContainer({children}) {
  return (
    <div className={style.innerContainer}>
      {children}
    </div>
  )
}

export default innerContainer
