import React from 'react'
import '../Edit.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { items } from '../reducer/provider'
import { useState, useEffect } from 'react'

const Edit = () => {
  const { takeId, data, editDataBase, incr, setIncr } = useContext(items)
  const data2 = data.filter((item) => item.id === takeId)

  const [name, setName] = useState(data2[0].name)
  const [amount, setAmount] = useState(data2[0].amount)
  const [protein, setProtein] = useState(data2[0].protein)
  const [storage, setStorage] = useState(data2[0].storage)

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
      <h2>Edit products</h2>

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
        className="update-btn"
        onClick={() => {
          editDataBase({ name, amount, protein, storage }, data[0].id)
          setIncr()
          setName('')
          setAmount('')
          setProtein('')
          setStorage('')
        }}
      >
        {' '}
        UPDATE
      </button>
    </div>
  )
}

export default Edit
