import React, { useContext } from 'react'
import { DataContext } from '../../context/dataProvider'
import "./card.css"
const Card = ({ product }) => {
    const { setCart } = useContext(DataContext);
  return (
    <div className='product-card'>
      <div className='product-thumb'>
        <img src={ product.imageURL } alt={ product.name } />
      </div>
        
        <h4>{ product.name }</h4>
        <h3>{ product.price }</h3>
        <button>Add to Cart</button>
    </div>
  )
}

export default Card