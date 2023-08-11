import React, { useContext } from 'react';
import { DataContext } from '../../context/dataProvider';
import Card from './Card';
import Header from "../header/Header"
import "./cart.css";
const Cart = () => {
  const { cart } = useContext(DataContext);
  return (
    <div className='cart-container'>
      <Header />
      <h1 className='cart-heading'> Shopping Cart &gt;&gt;</h1>
      <div className='cart-items'>
        {
          cart.map((cartItem) => (
            <Card item={ cartItem } key={cartItem.product.id}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default Cart;