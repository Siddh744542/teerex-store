import React, {useContext} from 'react';
import { DataContext } from '../../context/dataProvider';
import Card from './Card';
import "./product.css"
const Products = () => {
    const { products, filteredProducts, isFilterApplied } = useContext(DataContext);
    const productData = isFilterApplied ? filteredProducts : products;
  return (
    <>
      {
        productData.length > 0 ?
         <div className='products-container'>
          {productData.map((product) => (
              <Card key={product.id} product={product}/>
          ))}
        </div> :
        <div style={{flex:"1", textAlign:"center"}}>
          {
            products.length > 0 ? <p>No Matching products...</p> : <p>Loading...</p>
          }
          
        </div>
      }
    </>
   
  )
}

export default Products