import '../App.css'
import { useState, useEffect } from 'react'
import Box from './Box'
import TableRow from './TableRow'
import { useContext } from 'react'
import { items } from '../reducer/provider'
import { Link } from 'react-router-dom'

export default function Input2({ item, id, keyy }) {
  const { editDataBase, save } = useContext(items)

  const [name, setName] = useState(item.name)
  const [amount, setAmount] = useState(item.name)
  const [protein, setProtein] = useState(item.protein)
  const [storage, setStorage] = useState(item.storage)

  const datas = (e) => {
    e.target.name == 'name'
      ? setName(e.target.value)
      : e.target.name == 'amount'
      ? setAmount(e.target.value)
      : e.target.name == 'protein'
      ? setProtein(e.target.value)
      : setStorage(e.target.value)
  }




  useEffect(()=> {
    editDataBase({ name, amount, protein, storage }, keyy)
    console.log('save');
  }, [save])
 

  return (
    <>
   
      <TableRow key={id} id={id}>
        <Box>{id + 1}</Box>
        <Box>
          <input
            name="name"
            type="text"
            value={name}
            onChange={datas}
            className="inp"
            style={{ backgroundColor: id % 2 === 0 ? '#eeeeee ' : 'white' }}
          />
        </Box>
        <Box>
          <input
            name="amount"
            type="text"
            value={amount}
            onChange={datas}
            className="inp"
            style={{ backgroundColor: id % 2 === 0 ? '#eeeeee ' : 'white' }}
          />
        </Box>
        <Box>
          <input
            name="protein"
            type="text"
            value={protein}
            onChange={datas}
            className="inp"
            style={{ backgroundColor: id % 2 === 0 ? '#eeeeee ' : 'white' }}
          />
        </Box>
        <Box>
          <input
            name="storage"
            type="text"
            value={storage}
            onChange={datas}
            className="inp"
            style={{ backgroundColor: id % 2 === 0 ? '#eeeeee ' : 'white' }}
          />
        </Box>
        <div className="spare"></div>
      </TableRow>
     

    </>
  )
}
