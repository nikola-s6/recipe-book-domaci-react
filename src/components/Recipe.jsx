import React from "react"
import "../css/Recipe.css"

function Recipe({ data }) {
  const imageUrl = `https://spoonacular.com/recipeImages/${data.id}-240x150.jpg`
  return (
    <div className="oneRecipe">
      <div className="picture-left">
        <img src={imageUrl} alt="picture of dish" />
      </div>
      <div className="recipe-body">
        <h1>{data.title}</h1>
      </div>
      <div className="button-details">
        <button>Details</button>
      </div>
    </div>
  )
}

export default Recipe
