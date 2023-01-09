import React from "react"

function Pagination({ recipesPerPage, totalRecipes, paginate }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination mt-3">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
