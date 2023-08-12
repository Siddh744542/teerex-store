import React, { useState, useContext } from 'react'
import { DataContext } from '../../context/dataProvider'
import "./card.css"
const Card = ({ item }) => {
  const { cart, setCart } = useContext( DataContext );

  const [selectedQty, setSelectedQty] = useState(1);
  
  const qtyOptions = [];
  for (let i = 1; i <= item.product.quantity; i++) {
    qtyOptions.push(<option key={i} value={i}>{i}</option>);
  }
  function handleQuantity(event){
    const index = cart.indexOf(item);
    setSelectedQty(parseInt(event.target.value));
    const updatedCart = [...cart];
    updatedCart[index].quantity = event.target.value;
    setCart(updatedCart);
  }

  function handleDelete(){
    setCart(cart.filter((cartItem)=>{
      return cartItem.product.name !== item.product.name;
    }));
  }
  return (
    <div className='cart-card' >
      <img src={item.product.imageURL} alt={item.product.name} />
      <div className='cart-detail'>
        <strong>{ item.product.name}</strong>
        <strong>₹{item.product.price}</strong>
      </div>
      <div className='card-qty'>
        <label htmlFor="sizeSelect">Qty: </label>
        <select
          id="select-Qty"
          value={selectedQty}
          onChange={handleQuantity}
        >
          {qtyOptions}
        </select>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Card