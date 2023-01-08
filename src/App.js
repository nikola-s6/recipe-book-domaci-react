import "./App.css"
import NavigationBar from "./components/NavigationBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
