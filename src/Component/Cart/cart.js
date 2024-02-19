
import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addCartData, removeCart } from "../../Features/CartSlice";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const cartTotal = useSelector((state) => state.cartReducer.cartTotal);
  const dispatch = useDispatch();

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
                  onClick={() => {
                    dispatch(removeCart(i));
                  }}
                  className="btn"
                  type="button"
                >
                  Remove
                </button>
              </div>
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
