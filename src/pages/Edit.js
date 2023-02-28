import React from 'react'
import '../Edit.css'
import { Link } from 'react-router-dom'

const Edit = () => {
  return (
    <div className="edit-component">
      <h1 className="main-header">
        React CRUD application using JSON Server and useContext with useReducer
      </h1>

      <Link to={`/`}>
        <button className="go-back">GO BACK</button>
      </Link>
      <h2>Edit products</h2>

      <div className="wrapper-inputs">hello</div>
      <button className="update-btn">UPDATE</button>
    </div>
  )
}

export default Edit
