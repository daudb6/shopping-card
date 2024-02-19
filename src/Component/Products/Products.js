import React from 'react'
import "./products.css"
import {data} from "../data.js"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Features/CartSlice.js'



export const Products = () => {
  const dispatch = useDispatch()
 
  

const handleData = (e,s) => {
  s.preventDefault()
  s.target.classList.add("checked") 
  dispatch(addToCart(e))
 
}
  
  return (<>
  <div className='Card'>
  {data.map((e) => {
    return(
      <div className='card-info'>
    <div className='card-details'>
      <img src={e.image}></img>
      <h2>{e.name}</h2>
      </div>
      <div className='card-description'>
        <p>{e.description}</p>
        </div>
        <div className='price'>
        <span>Price: {e.price}$</span>
        <button onClick={(s) => handleData(e,s)} type='button'>Add To Cart</button>

    
         </div>
        </div>

    )
      
  })}   
   </div>
   </>
  )
}
