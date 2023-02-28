import Table from '../components/Table'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'
import TableRow from '../components/TableRow'
import Box from '../components/Box'
import '../App.css'
import { useEffect, useContext, useState, useLayoutEffect } from 'react'
import { items } from '../reducer/provider'
import { Link } from 'react-router-dom'

function Main() {
  const [select, setSelect] = useState(0)
  const [heightTable, setHeightTable] = useState(15)
  const [activePageValue, setActivePageValue] = useState(1)
  const [cssTransform, setCssTransform] = useState({})

  const {
    setData,
    data,
    incr,
    handleSubmit,
    delee,
    setTransformButton,
    transformButton,
  } = useContext(items)

  //*********** FINDING HOW MANY PAGES WILL BE IN THE TABLE ***********/
  const arr = new Array(
    data.length % (heightTable / 3 - 1)
      ? Math.floor(data.length / (heightTable / 3 - 1)) + 1
      : Math.floor(data.length / (heightTable / 3 - 1)),
  ).fill([])
  //*********** FINDING HOW MANY PAGES WILL BE IN THE TABLE ***********/

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

  //  ************ FINDING HOW MANY ROWS WILL BE IN THE TABLE ***********//
  const pageRows = (e) => {
    setSelect((prev) => prev + 1)
    if (select === 1) {
      setHeightTable((+e.target.value + 1) * 3)
      setSelect(0)
    }
  }
  //  ************ FINDING HOW MANY ROWS WILL BE IN THE TABLE ***********//

  useLayoutEffect(() => {
    if (transformButton < 0) {
      setTransformButton(1)
    }
    if (transformButton === arr.length) {
      setTransformButton(0)
    } else if (transformButton > arr.length - 2) {
      setTransformButton(-1)
    }

    setCssTransform({
      transform: `translateX(${transformButton * -2.5}rem)`,
    })
    console.log(arr.length)
  }, [transformButton])

  return (
    <>
      <div className="App">
        <h1 className="main-header">
          React CRUD application using JSON Server and useContext with
          useReducer
        </h1>
        <button className="add-product">ADD</button>
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
              {data
                .slice(
                  (heightTable / 3 - 1) * (activePageValue - 1),
                  (heightTable / 3 - 1) * activePageValue,
                )
                .map((row, idx) => {
                  return (
                    <TableRow key={row.id} id={idx}>
                      <Box className="id">{idx + 1}</Box>
                      <Box>{row.name}</Box>
                      <Box>{row.amount}</Box>
                      <Box>{row.protein}</Box>
                      <Box>{row.storage}</Box>
                      <Box>

                        <Link to={`/edit`}><button className="edit">edit</button></Link>
                        <button
                          onClick={() => {
                            delee(row.id)
                          }}
                          className="delete"
                        >
                          delete
                        </button>
                      </Box>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>

          <div className="showing-page-bar">
            <p>
              Showing {heightTable / 3 - 1} of {data.length} products
            </p>
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
                </select>
              </div>
              <span>
                <i
                  class="fa-solid fa-angle-left"
                  onClick={() => setTransformButton(-1)}
                ></i>
                <div className="wrapper-carusel">
                  <div className="wrapper-pages" style={cssTransform}>
                    {arr.map((_, idx) => (
                      <>
                        <span
                          className={
                            activePageValue == idx + 1 ? `active-page` : null
                          }
                          key={idx}
                          onClick={() => setActivePageValue(idx + 1)}
                        >
                          {idx + 1}
                        </span>
                      </>
                    ))}
                  </div>
                </div>
                <i
                  class="fa-solid fa-angle-right"
                  onClick={() => setTransformButton(1)}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
