import Input from '../components/Input'
import Table from '../components/Table'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'
import TableRow from '../components/TableRow'
import Box from '../components/Box'
import '../App.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { items } from '../reducer/provider'
import { Link } from 'react-router-dom'

function Main() {

  const { setData, data,  incr,  handleSubmit, delee } = useContext(items)



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

  return (
    <>
      <div className="App">
        <Table>
          <TableHead>
            <div className="hrow">
              <Box className="id">ID</Box>
              <Box>Products</Box>
              <Box>Amount of products</Box>
              <Box>Protein</Box>
              <Box>Period of storage</Box>
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
                <button
                  onClick={() => {
                    delee(row.id)
                  }}
                  className="btn"
                >
                  delete
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      <Input
        setData={handleSubmit}
      />
      <Link to={`/edit`} className='link-edit'>
        <button className='edit'>
              edit data
        </button>
      </Link>
      </div>
    </>
  )
}

export default Main
