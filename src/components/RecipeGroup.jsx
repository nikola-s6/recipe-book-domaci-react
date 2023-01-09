import React from "react"
import { fakeRecipeGroup } from "../fakeRecipeGroup"
import Recipe from "./Recipe"
import "../css/RecipeGroup.css"

function RecipeGroup() {
  const list = fakeRecipeGroup.results
  return (
    <div className="container">
      {list.map((recipe) => (
        <Recipe data={recipe}></Recipe>
      ))}
    </div>
  )
}

export default RecipeGroup
