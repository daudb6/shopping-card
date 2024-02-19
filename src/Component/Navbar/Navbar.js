import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Features/authSlice";


const Navbar = () => {
  const items = useSelector((state) => state.cartReducer.cart);
  const team = useSelector((state) => state.authreducer.login);
  console.log(team)
  
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <h1>Iphone Store</h1>
      <nav>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          Cart<span>({items && items.length})</span>
        </NavLink>
        {team === 'true' ? <button onClick={() => dispatch(login())} to="/login">Login</button> : <button onClick={() => dispatch(logout())} to="/login">Logout</button> }
        
      </nav>
    </div>
  );
};

export default Navbar;
