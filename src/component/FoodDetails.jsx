import React, { useEffect, useState } from 'react'
import style from './FoodDetails.module.css'
import Ingrediant from './ingrediant';



function foodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "1b289d96fbe641b5bb0c189c0cf260a8";

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchfood()
  }, [foodId])
  return (
    <div className={style.foodDetails}>
      <div className={style.recipeCard}>
        
          <h1 className={style.recipeName}>{food.title}</h1>
          <img className={style.recipeImg} src={food.image} alt="" />
          <div className={style.recipeDetail}>
            <span>
              <strong>🕛{food.readyInMinutes}  Minutes</strong>
            </span>
            <span>
              <strong>  👨‍👩‍👧‍👦serves   {food.servings}</strong>
            </span>
            <span>
              {food.vegetairan ? "🥕Vegetarinan" : "🍗Non-Vegetarian"}
            </span>
            <span>
              {food.vegan ? "👍vegan" : ""}
            </span>
          </div>


          { /* Ingrediant box */}

          <h2>Ingrediant</h2>
          <Ingrediant food={food} isloading={isloading} />

          {/* Instruction */}

          <h2>Instruction</h2>
          <div className={style.recipeInstruction}>
            <ol>
              {isloading ? (<p>Loading....</p>) : (food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
              )}
            </ol>
          </div>
        
      </div>
    </div >
  )
}

export default foodDetails

