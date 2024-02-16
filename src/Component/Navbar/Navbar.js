import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cartReducer.cart);

  return (
    <div className="navbar">
      <h1>Iphone Store</h1>
      <nav>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          Cart<span>({items && items.length})</span>
        </NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
