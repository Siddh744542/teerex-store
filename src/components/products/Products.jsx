import React, {useContext} from 'react';
import { DataContext } from '../../context/dataProvider';
import Card from './Card';
import "./product.css"
const Products = () => {
    const { products, filteredProducts } = useContext(DataContext);
    const productData = filteredProducts.length>0 ? filteredProducts : products;
  return (
    <div className='products-container'>
        {productData.map((product) => (
            <Card key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Products