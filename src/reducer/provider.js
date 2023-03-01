import { createContext  } from "react";
import { useReducer } from 'react'
import reducer from "./reducer";



export const items = createContext()

const initialState = {
    data: [],
    incr: true,
    save: true,
    transformButton: 0,
    takeId: 0
}


const Wrapper = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState)


    value.setId = (id) => {
      dispatch({type:'TAKEID', payload: id})
    }

    value.setTransformButton = (number) => {
      dispatch({type: 'TRANSFORMBUTTON', payload: number})
    }

    value.setData = (data) => {
        dispatch({type: 'DATA', payload: data})
    }
    value.setIncr = () => {
        dispatch({type:'INCR'})
    }
    value.handleSubmit = (name, amount, protein, storage) => {
        const bodyData = { name, amount, protein, storage }
       
        fetch('http://localhost:3001/item', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData),
        })
      }

    value.editDataBase = (data, id) => {
  
      fetch(`http://localhost:3001/item/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }
    value.setSave = () => {
      dispatch({type: 'SAVE'})
    }
    value.delee = (id) => {
     dispatch({type: 'INCR'})
  
      fetch(`http://localhost:3001/item/${id}`, {
        method: 'DELETE',
      })
    }


    return( 
    <items.Provider value={value}>
        {children}
    </items.Provider>
    )
}

export default Wrapper