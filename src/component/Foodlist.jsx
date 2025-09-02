import React from 'react'
import Fooditem from './Fooditem'
import style from './Foodlist.module.css';

function Foodlist({ foodData ,setfoodId }) {
    return (
        
        <div className={style.foodlist} >
            {foodData.map((food) =>
                <Fooditem  setfoodId={setfoodId} key={food.id} food={food} />
            )}
        </div>
    )
}

export default Foodlist;