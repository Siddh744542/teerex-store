import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/dataProvider'
import "./card.css"
const Card = ({ product }) => {
    const { cart, setCart } = useContext(DataContext);
    const [buttonName, setButtonName] = useState("Add to Cart");
    function addToCart(){
      setCart([...cart, {product : product, quantity:1}]);
      setButtonName("Added!")
    }

  return (
    <div className='product-card'>
      <div className='product-thumb'>
        <img className="product-img" src={ product.imageURL } alt={ product.name } />
      </div>
        <h4>{ product.name }</h4>
        <h3>₹{ product.price }</h3>
        <button onClick={addToCart}>{buttonName}</button>
    </div>
  )
}

export default Card