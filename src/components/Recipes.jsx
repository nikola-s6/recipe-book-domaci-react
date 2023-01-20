import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../css/Recipes.css"
import RecipeGroup from "./RecipeGroup"
import Pagination from "./Pagination"

function Recipes() {
  const { searchQuery } = useParams()
  const [recipes, setRecipes] = useState([])
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

  useEffect(() => {
    async function fetchData() {
      const results = await getRecipes(searchQuery)
      setRecipes(results)
    }
    fetchData()
  }, [searchQuery])

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (JSON.stringify(recipes) === "{}") {
    // return <h1>Loading</h1>
    return <div className="loader"></div>
  }

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

async function getRecipes(query) {
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_ENDPOINT = "https://api.spoonacular.com/recipes/search"
  const url = `${API_ENDPOINT}?query=${query}&apiKey=${API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error(error)
  }
}

export default Recipes
