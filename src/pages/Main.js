import Table from '../components/Table'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'
import TableRow from '../components/TableRow'
import Box from '../components/Box'
import '../App.css'
import { useEffect, useContext, useState } from 'react'
import { items } from '../reducer/provider'
import { Link } from 'react-router-dom'

function Main() {
  const [select, setSelect] = useState(0)
  const [heightTable, setHeightTable] = useState(4)

  const { setData, data, incr, handleSubmit, delee } = useContext(items)

  // ***************** GET REQUEST ****************
  useEffect(() => {
    fetch('http://localhost:3001/item')
      .then((data) => data.json())
      .then((data) => setData(data))

    fetch('http://localhost:3001/item')
      .then((data) => data.json())
      .then((data) => setData(data))
  }, [incr])

  useEffect(() => {
    console.log('render')
    fetch('http://localhost:3001/item')
      .then((data) => data.json())
      .then((data) => setData(data))
  }, [])

  const pageRows = (e) => {
    console.log(+e.target.value)
    const count = +e.target.value ? +e.target.value : 4
    setSelect((prev) => prev + 1)
    if (select === 1) {
      setHeightTable((count + 1) * 3)
      setSelect(0)
    }
  }

  return (
    <>
      <div className="App">
        <h1 className="main-header">
          React CRUD application using JSON Server and useContext with
          useReducer
        </h1>
        <button className="add-product">ADD PRODUCT</button>
        <div className="wrapper-table">
          <Table style={heightTable}>
            <TableHead>
              <div className="hrow">
                <Box className="id">ID</Box>
                <Box>Products</Box>
                <Box>Amount of products</Box>
                <Box>Protein</Box>
                <Box>Period of storage</Box>
                <Box>
                  <span>Actions</span>
                </Box>
              </div>
            </TableHead>
            <TableBody>
              {data.map((row, idx) => (
                <TableRow key={row.id} id={idx}>
                  <Box className="id">{idx + 1}</Box>
                  <Box>{row.name}</Box>
                  <Box>{row.amount}</Box>
                  <Box>{row.protein}</Box>
                  <Box>{row.storage}</Box>
                  <Box>
                    <button>edit</button>
                    <button
                      onClick={() => {
                        delee(row.id)
                      }}
                      className="btn"
                    >
                      delete
                    </button>
                  </Box>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="showing-page-bar">
            <p>Showing 5 of 6 products</p>
            <div>
              <div>
                <label htmlFor="1">Show</label>
                <select
                  name="amount_products"
                  id="1"
                  onClick={(e) => pageRows(e)}
                >
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
              <span>
                <i class="fa-solid fa-angle-left"></i>
                <span className="active-page">1</span>
                <span>2</span>
                <i class="fa-solid fa-angle-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
