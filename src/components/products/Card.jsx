import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/dataProvider';
import "./card.css";
const Card = ({ product }) => {
    const [clickedCSS, setClickedCSS] = useState("");
    const { cart, setCart } = useContext(DataContext);
    const [buttonName, setButtonName] = useState("Add to Cart");
    function addToCart(){
      setClickedCSS("add-to-cart-after-click");
      setCart([...cart, {product : product, quantity:1}]);
      setButtonName("Added!")
    }

  return (
    <div className='product-card'>
      <div className='product-detail'>
        <div className='product-thumb'>
          <img className="product-img" src={ product.imageURL } alt={ product.name } />
        </div>
        <p>{ product.name }</p>
        <p style={{fontWeight:"600"}}>₹{ product.price }</p>
      </div>

      <div className={`add-cart-button ${clickedCSS}`} onClick={addToCart}>
        {buttonName}
      </div>
    </div>
  )
}

export default Card