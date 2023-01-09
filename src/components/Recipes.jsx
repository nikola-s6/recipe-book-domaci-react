import React from "react"
import { useParams } from "react-router-dom"
import "../css/Recipes.css"
import RecipeGroup from "./RecipeGroup"

function Recipes() {
  const { searchQuery } = useParams()
  //ovde pisati logiku za paginaciju
  //proslediti trenutne recepte nekom komponentru grupa recepata
  //iz te grupe recepata prikazivati recepte preko komponente
  return (
    <div className="searchPage">
      <h1>Search results for: {searchQuery}</h1>
      <div className="result">
        <RecipeGroup></RecipeGroup>
      </div>
    </div>
  )
}

export default Recipes
