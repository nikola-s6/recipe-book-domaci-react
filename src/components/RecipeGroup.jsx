import React from "react"
import { fakeRecipeGroup } from "../fakeRecipeGroup"
import Recipe from "./Recipe"
import "../css/RecipeGroup.css"

function RecipeGroup({ recipes }) {
  return (
    <div className="container">
      {recipes.map((recipe) => (
        <Recipe data={recipe} key={recipe.id}></Recipe>
      ))}
    </div>
  )
}

export default RecipeGroup
