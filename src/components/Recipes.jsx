import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../css/Recipes.css"
import RecipeGroup from "./RecipeGroup"
import { fakeRecipeGroup } from "../fakeRecipeGroup"
import Pagination from "./Pagination"

function Recipes() {
  const { searchQuery } = useParams()
  const [recipes, setRecipes] = useState(fakeRecipeGroup.results)
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(4)

  const height = window.innerHeight
  useEffect(() => {
    function number() {
      let amount = Math.floor(height / 200)
      setRecipesPerPage(amount)
    }
    number()
  }, [height])

  //ovde pisati logiku za paginaciju
  //proslediti trenutne recepte nekom komponentru grupa recepata
  //iz te grupe recepata prikazivati recepte preko komponente

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="searchPage">
      <h1 className="search-result-text">Search results for: {searchQuery}</h1>
      <div className="result">
        <RecipeGroup recipes={currentRecipe}></RecipeGroup>
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  )
}

export default Recipes
