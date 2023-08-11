import React, { useContext } from 'react';
import { DataContext } from '../../context/dataProvider';
import Card from './Card';
import "./cart.css";
const Cart = () => {
  const { cart } = useContext(DataContext);
  return (
    <div className='cart-container'>
      {
        cart.map((cartItem) => (
          <Card item={ cartItem } key={cartItem.product.id}/>
        ))
      }
    </div>
  )
}

export default Cart;