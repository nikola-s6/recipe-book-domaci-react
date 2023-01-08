import "./App.css"
import NavigationBar from "./components/NavigationBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
    </BrowserRouter>
  )
}

export default App
