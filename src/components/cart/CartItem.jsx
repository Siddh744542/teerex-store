import React, { useState, useContext } from 'react'
import { DataContext } from '../../context/dataProvider'
import "./cartitem.css";
const CartItem = ({ item }) => {
  const { cart, setCart } = useContext( DataContext );

  const [selectedQuantity, setselectedQuantity] = useState(1);
  
  const quantityOptions  = [];
  for (let i = 1; i <= item.product.quantity; i++) {
    quantityOptions.push(<option key={i} value={i}>{i}</option>);
  }
  function handleQuantityChange(event) {
    const newQuantity = parseInt(event.target.value);
    setselectedQuantity(newQuantity);
    const updatedCart = cart.map(cartItem =>
      cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
  }

  function handleItemDelete() {
    const updatedCart = cart.filter(cartItem =>
      cartItem.product.name !== item.product.name
    );
    setCart(updatedCart);
  }
  return (
    <div className='cart-card' >
      <img src={item.product.imageURL} alt={item.product.name} />
      <div className='cart-detail'>
        <strong>{ item.product.name}</strong>
        <strong>₹{item.product.price}</strong>
      </div>
      <div>
        <label htmlFor="quantitySelect">Qty: </label>
        <select
          id="select-quantity"
          value={selectedQuantity}
          onChange={handleQuantityChange}
        >
          {quantityOptions }
        </select>
      </div>
      <button className="delete-button" onClick={handleItemDelete}>Delete</button>
    </div>
  )
}

export default CartItem