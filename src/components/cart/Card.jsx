import React,{ useContext } from 'react'
import { DataContext } from '../../context/dataProvider'
import "./card.css"
const Card = ({ item }) => {
    const { setCart } = useContext( DataContext );
    console.log(item);
  return (
    <div className='cart-card' >
      <img src={item.product.imageURL} alt={item.product.name} />
      <div className='cart-detail'>
        <strong>{ item.product.name}</strong>
        <strong>{item.product.price}</strong>
      </div>
      
    </div>
  )
}

export default Card