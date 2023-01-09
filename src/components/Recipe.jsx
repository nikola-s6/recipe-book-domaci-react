import React from "react"
import "../css/Recipe.css"
import { useNavigate } from "react-router-dom"

function Recipe({ data }) {
  const imageUrl = `https://spoonacular.com/recipeImages/${data.id}-240x150.jpg`
  let navigate = useNavigate()
  function details() {
    navigate(`/recipe/${data.id}`)
  }
  return (
    <div className="oneRecipe">
      <div className="picture-left">
        <img
          src={imageUrl}
          alt="picture of dish"
          className="pictureOnLeft"
          style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
        />
      </div>
      <div className="recipe-body">
        <h1>{data.title}</h1>
      </div>
      <div className="button-details">
        <button onClick={details}>Details</button>
      </div>
    </div>
  )
}

export default Recipe
