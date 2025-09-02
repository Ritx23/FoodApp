import React from 'react'
import style from './ingrediant.module.css'

function ingrediant({food,isloading}) {
    return (
        <div className={style.ingrdbox}>

            {isloading ? (<p>Loading.....</p>) : (food.extendedIngredients.map((item) => (
                <div className={style.ingreditem} key={item.id}>
                    <img className={style.ingred} src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.name} />
                    <span className={style.ingredName}>{item.name}</span>
                    <span className={style.ingredName}>{item.amount}{item.unit}</span>
                </div>
            ))
            )}
        </div>
    )
}

export default ingrediant;
