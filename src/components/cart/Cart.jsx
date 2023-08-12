import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context/dataProvider';
import Card from './Card';
import Header from "../header/Header"
import "./cart.css";
const Cart = () => {
  const { cart, totalAmount, setTotalAmount } = useContext(DataContext);
  useEffect(()=>{
    if(cart.length > 0){
        const added = cart.reduce(( acc, curr ) => {
        return acc + (curr.product.price * curr.quantity);
      },0)
      setTotalAmount(added);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cart]);
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
       { cart.length > 0 ? <div className='cart-total'>
          <hr className='hr'/>
          <p>Total Amount : ₹{totalAmount}</p>
        </div> : <></>
        }
        
      </div>
      
    </div>
  )
}

export default Cart;