import "../css/NavigationBar.css"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MdFoodBank } from "react-icons/md"
import { IconContext } from "react-icons"

function NavigationBar() {
  const [searchQuery, setSearchQuery] = useState("")
  let navigate = useNavigate()

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/recipes/${searchQuery}`)
  }

  function restartSearchQuery() {
    setSearchQuery("")
  }

  return (
    <nav className="navigationBar">
      <ul>
        <li>
          <Link to="/">
            <IconContext.Provider value={{ color: "white", size: "40px" }}>
              <MdFoodBank onClick={restartSearchQuery}></MdFoodBank>
            </IconContext.Provider>
          </Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" value={searchQuery} onChange={handleChange} className="search-text" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </nav>
  )
}

export default NavigationBar
