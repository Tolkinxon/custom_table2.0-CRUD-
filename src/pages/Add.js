import React from 'react'
import '../Edit.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { items } from '../reducer/provider'
import { useState, useEffect } from 'react'

const Add = () => {
  const { handleSubmit, setIncr } = useContext(items)

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [protein, setProtein] = useState('')
  const [storage, setStorage] = useState('')

  const datas = (e) => {
    e.target.name == 'name'
      ? setName(e.target.value)
      : e.target.name == 'amount'
      ? setAmount(e.target.value)
      : e.target.name == 'protein'
      ? setProtein(e.target.value)
      : setStorage(e.target.value)
  }

  return (
    <div className="edit-component">
      <h1 className="main-header">
        React CRUD application using JSON Server and useContext with useReducer
      </h1>

      <Link to={`/`}>
        <button className="go-back">GO BACK</button>
      </Link>
      <h2>Saving products</h2>

      <div className="wrapper-inputs">
        <input
          type="text"
          name="name"
          value={name}
          onChange={datas}
          placeholder="product name"
        />
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={datas}
          placeholder="amount"
        />
        <input
          type="text"
          name="protein"
          value={protein}
          onChange={datas}
          placeholder="protein"
        />
        <input
          type="text"
          name="storage"
          value={storage}
          onChange={datas}
          placeholder="storage  "
        />
      </div>
      <button
        className="save-btn"
        onClick={() => {
          handleSubmit(name, amount, protein, storage)
          setIncr()
          setName('')
          setAmount('')
          setProtein('')
          setStorage('')
        }}
      >
        SAVE
      </button>
    </div>
  )
}

export default Add
