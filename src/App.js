import "./App.css"
import NavigationBar from "./components/NavigationBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import Recipes from "./components/Recipes"
import SpecificRecipe from "./components/SpecificRecipe"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/recipes/:searchQuery" element={<Recipes></Recipes>}></Route>
        <Route path="/recipe/:id" element={<SpecificRecipe></SpecificRecipe>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
