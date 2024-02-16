import React from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state) =>state.cartReducer.cart )

  return (
    <div className='navbar'>
      <h1>Iphone Store</h1>
      <nav>
        <a href='/products'>Products</a>
        <a href='#'>Cart
        <span>({items && items.length})</span></a>
        <a href='#'>Login</a>
        
      </nav>
    </div>
  )
}

export default Navbar