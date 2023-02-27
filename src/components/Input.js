import '../App.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { items } from '../reducer/provider'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import Box from './Box'


export default function Input({ setData }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [protein, setProtein] = useState('')
  const [storage, setStorage] = useState('')

  const { incr, setIncr } = useContext(items)

  const datas = (e) => {
    e.target.name == 'name'
      ? setName(e.target.value)
      : e.target.name == 'amount'
      ? setAmount(e.target.value)
      : e.target.name == 'protein'
      ? setProtein(e.target.value)
      : setStorage(e.target.value)
  }

  useEffect(() => {
    setName('')
    setAmount('')
    setProtein('')
    setStorage('')
  }, [incr])

  return (
    <>
      <div className='table2'>
        <TableHead>
          <div className="hrow">
            <Box></Box>
            <Box>Products</Box>
            <Box>Amount of products</Box>
            <Box>Protein</Box>
            <Box>Period of storage</Box>
          </div>
        </TableHead>
        <TableBody>
          <TableRow>
            <Box> </Box>
            <Box>
              <input 
                name="name" 
                type="text" 
                value={name} 
                placeholder='products'
                onChange={datas} />
            </Box>
            <Box>
              <input
                name="amount"
                type="text"
                value={amount}
                placeholder='amount of products'
                onChange={datas}
              />
            </Box>
            <Box>
              <input
                name="protein"
                type="text"
                value={protein}
                placeholder='protein'
                onChange={datas}
              />
            </Box>
            <Box>
              <input
                name="storage"
                type="text"
                value={storage}
                placeholder='period of storage'
                onChange={datas}
              />
            </Box>
            <button
              onClick={() => {
                setData(name, amount, protein, storage)
                setIncr()
              }}
            >
              add
            </button>
          </TableRow>
        </TableBody>
    </div>
    </>

  )
}
