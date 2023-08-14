import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/dataProvider';
import './card.css';

const Card = ({ product }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { cart, setCart } = useContext(DataContext);
  const [buttonText, setButtonText] = useState('Add to Cart');

  const addToCart = () => {
    setIsClicked(true);
    setCart([...cart, { product: product, quantity: 1 }]);
    setButtonText('Added!');
  };

  return (
    <div className='product-card'>
      <div className='product-detail'>
        <div className='product-thumb'>
          <img className='product-img' src={product.imageURL} alt={product.name} />
        </div>
        <p>{product.name}</p>
        <p style={{ fontWeight: '600' }}>₹{product.price}</p>
      </div>

      <div className={`add-cart-button ${isClicked ? 'add-to-cart-after-click' : ''}`} onClick={addToCart}>
        {buttonText}
      </div>
    </div>
  );
};

export default Card;