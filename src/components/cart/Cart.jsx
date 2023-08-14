import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context/dataProvider';
import CartItem from './CartItem';
import Header from '../header/Header';
import './cart.css';

const Cart = () => {
  const { cart, totalAmount, setTotalAmount } = useContext(DataContext);
  useEffect(() => {
    const addedTotal = cart.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
    setTotalAmount(addedTotal);
  }, [cart]);

  return (
    <div className='cart-container'>
      <Header />
      <h1 className='cart-heading'>Shopping Cart &gt;&gt;</h1>
      <div className='cart-items'>
        {cart.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.product.id} />
        ))}
        {cart.length > 0 && (
          <div className='cart-total'>
            <hr className='hr' />
            <p>Total Amount: ₹{totalAmount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
