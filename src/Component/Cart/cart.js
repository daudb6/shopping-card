
import React, { useState,useEffect } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, addCartData, addToCart, increment, removeCart } from "../../Features/CartSlice";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const cartTotal = useSelector((state) => state.cartReducer.cartTotal);
  const dispatch = useDispatch();

 let handleClick =  (index) => {
    dispatch(removeCart(index));
    let localData = JSON.parse(localStorage.getItem('save'))
    localStorage.setItem('save',JSON.stringify(localData.filter((v,i) => i !== index))) 

  }

  useEffect(() => {
    
    if(cartItems.length === 0){
      
      let localData =JSON.parse(localStorage.getItem('save'))
      localData.map((a) => {
       dispatch(addToCart(a))
  
      })

    }
   

 },[])

  return (
    
    <div className="main-cart">
      <div className="heading">
        <h1>YOUR BAG</h1>
      </div>
      
      <div className="ycard">
        {cartItems.map((item, i) => (
          <div className="cart-data" key={i}>
            <div className="img">
              <img src={item.image} alt="Mobile Pic" />
            </div>
            <div className="Items">
              <div className="details">
                <h3>{item.name}</h3>
              </div>
              <div className="Price">
                <span>Price: ${item.price} </span>
                <button
                  onClick={() => handleClick(i)}
                  className="btn"
                  type="button"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="y-btn">
             
        <button onClick = {() => dispatch(increment(i))}type="button">+</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(Decrement(i))} type="button">-</button>
      </div>
          </div>
        ))}
      </div>    
      <hr />

      <div className="total">
        <h4>Total</h4>
        <span>${cartTotal}</span>
      </div>
    </div>

   
   
  );
};
