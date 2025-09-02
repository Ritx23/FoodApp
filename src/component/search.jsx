import React, { useEffect, useState } from 'react'
import style from './search.module.css';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "1b289d96fbe641b5bb0c189c0cf260a8";

function search({ foodData, setFoodData, query, setQuery }) {
  // const [query, setQuery] = useState("pizza");
  // sybntax for the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    if (query) fetchFood();
  }, [query, setFoodData]);
  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search for food...'
      />
      {query.trim() && (
        <button
          className={style.clearBtn}
          onClick={() => setQuery("")}
          type="button"
          aria-label="Clear"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default search;

