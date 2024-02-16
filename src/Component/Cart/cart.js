import React from "react";
import "./cart.css";
export const Cart = () => {
  return (
    <div className="main-cart">
      <div className="heading">
        <h1>YOUR BAG</h1>
      </div>
      <div className="ycard">
        <div className="cart-data">
          <div className="img">
            <img
              src="https://www.course-api.com/images/cart/phone-4.png"
              alt="Mobile Pic"
            />
          </div>
          <div className="Items">
            <div className="details">
              <h3>Iphone 15 PRO</h3>
            </div>
            <div className="Price">
              <span>Price: $400 </span>
              <button className="btn" type="button">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="cart-data">
          <div className="img">
            <img
              src="https://www.course-api.com/images/cart/phone-4.png"
              alt="Mobile Pic"
            />
          </div>
          <div className="Items">
            <div className="details">
              <h3>Iphone 15 PRO</h3>
            </div>
            <div className="Price">
              <span>Price: $400 </span>
              <button className="btn" type="button">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="cart-data">
          <div className="img">
            <img
              src="https://www.course-api.com/images/cart/phone-4.png"
              alt="Mobile Pic"
            />
          </div>
          <div className="Items">
            <div className="details">
              <h3>Iphone 15 PRO</h3>
            </div>
            <div className="Price">
              <span>Price: $400 </span>
              <button className="btn" type="button">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="cart-data">
          <div className="img">
            <img
              src="https://www.course-api.com/images/cart/phone-4.png"
              alt="Mobile Pic"
            />
          </div>
          <div className="Items">
            <div className="details">
              <h3>Iphone 15 PRO</h3>
            </div>
            <div className="Price">
              <span>Price: $400 </span>
              <button className="btn" type="button">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
