import React from 'react'
import style from './Fooditem.module.css'

function Fooditem({ food, setfoodId }) {
  return (
    <div className={style.Fooditem}>
      <img className={style.itemimg} src={food.image} alt={food.name} />
      <div className={style.itemContent}>
        <p className={style.itemName}>{food.title}</p>
      </div>
      <button onClick={() => {
        console.log(food.id);
        setfoodId(food.id);
      }}
        className={style.recipeButton}>
        View Recipe
      </button>
    </div>
  )
}

export default Fooditem;
