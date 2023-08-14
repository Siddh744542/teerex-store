import React, { Fragment, useContext, useEffect } from 'react';
import { DataContext } from '../../context/dataProvider'

const FilterCategory = ({ name, data }) => {
  const { products, filteredProducts, setFilteredProducts } = useContext(DataContext);

  useEffect(() => {
    return () => {
      setFilteredProducts([]);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleSubmit(event){
    const filterName = event.target.name;
    const selectedValue = event.target.value;
    let filtered = products;
    const unfilteredData = filteredProducts.length > 0 ? filteredProducts : products;
  
    if (filterName === 'PriceRange') {
      const priceRange = JSON.parse(selectedValue);
      filtered = unfilteredData.filter(
        (product) =>
          product.price >= priceRange.min && product.price <= priceRange.max
      );
    } else {
      filtered = products.filter((product) => product[filterName.toLowerCase()] === selectedValue);
    }

    setFilteredProducts(filtered);
  }
    return (
      <div>
        <h4> {name} : </h4>
        <div>
          <form onChange={handleSubmit}>
            {data.map((item, index) => {
              const labelValue = name === "PriceRange" ? item.name : item;
              const inputId = item.name || item;         
              return (
                <Fragment key={index}>
                  <input
                    type="radio"
                    id={inputId}
                    name={name}
                    value={name === 'PriceRange' ? JSON.stringify({ min: item.min, max: item.max }) : item}
                  />
                  <label htmlFor={inputId}>{labelValue}</label>
                </Fragment>
              );
            })}
          </form>
        </div>
      </div>
    );
  };
  
  export default FilterCategory;