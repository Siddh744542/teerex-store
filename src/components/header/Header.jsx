import React from 'react';
import { Link } from 'react-router-dom';
import img from "./cart.png";
import "./header.css";
const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <Link className="link" to="/"><h1>TeeREX Store</h1></Link> 
            <Link className='cart-icon link' to="/cart"><img style={{height:"2rem", width:"2rem", margin: "0 0.5rem"}} src={img} alt='cart-icon'/>Cart</Link>
        </div>
    </div>
  )
}

export default Header