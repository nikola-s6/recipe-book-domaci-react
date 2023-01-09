import "./App.css"
import NavigationBar from "./components/NavigationBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import Recipes from "./components/Recipes"
import Recipe from "./components/Recipe"
import SpecificRecipe from "./components/SpecificRecipe"
import RecipeGroup from "./components/RecipeGroup"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/recipes/:searchQuery" element={<Recipes></Recipes>}></Route>
        <Route path="/recipe/:id" element={<SpecificRecipe></SpecificRecipe>}></Route>
        <Route path="/proba" element={<Recipe></Recipe>}></Route>
        <Route path="/grupa" element={<RecipeGroup></RecipeGroup>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
