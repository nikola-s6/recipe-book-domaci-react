import React from "react"
import { useParams } from "react-router-dom"

function Recipes() {
  const { searchQuery } = useParams()
  return (
    <div>
      <h1>Search query: {searchQuery}</h1>
    </div>
  )
}

export default Recipes
