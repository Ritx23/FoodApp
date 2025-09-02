import React from 'react'
import style from './container.module.css';

function container({ children }) {
    return (
        <div className={style.parentContainer}>
            {children}
        </div>
    )
}

export default container