import React from "react";

export default function RecipeCard({ recipe }) {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="card">
      <img className="card-image" src={strMealThumb} alt={strMeal}></img>
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a
          href={"https://www.themealdb.com/meal/" + idMeal}
          target="_blank"
          rel="noreferrer"
        >
          Ingredients
        </a>
      </div>
    </div>
  );
}
