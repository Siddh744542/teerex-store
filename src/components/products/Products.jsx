import React, {useContext} from 'react'
import { DataContext } from '../../context/dataProvider'
import Card from './Card';
import "./product.css"
const Products = () => {
    const { products } = useContext(DataContext);
  return (
    <div className='products-container'>
        {products.map((product) => (
            <Card key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Products