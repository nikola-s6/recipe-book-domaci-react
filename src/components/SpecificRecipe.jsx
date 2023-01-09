import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../css/SpecificRecipe.css"
import { fakeRecipe } from "../fakeRecipe"

function SpecificRecipe() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    const fetchRecipes = async () => {
      const result = await getRecipe(id)
      setRecipe(result)
    }
    fetchRecipes()
  }, [id])

  return (
    <div className="background">
      <div className="title">
        <h1>{recipe.title}</h1>
      </div>
      <div className="description">
        <div className="pic">
          <img src={recipe.image} alt="food picture" />
        </div>
        <div className="summary">
          <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        </div>
      </div>
      <div className="preparation">
        <div className="ingredients">
          <h1>Ingredients:</h1>
          <table>
            <th>Name:</th>
            <th>Amount:</th>
            {recipe.extendedIngredients.map((ing) => (
              <tr>
                <td>{ing.name}</td>
                <td>{ing.amount + " " + ing.unit}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="prep">
          <h1>Instructions:</h1>
          <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
        </div>
      </div>
    </div>
  )
}

async function getRecipe(id) {
  console.log("usao")
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_ENDPOINT = "https://api.spoonacular.com/recipes"
  const url = `${API_ENDPOINT}/${id}/information?apiKey=${API_KEY}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default SpecificRecipe
