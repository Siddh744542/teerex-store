import React from 'react';
import FilterCategory from './FilterCategory';
import "./filter.css";

const Filter = () => {

  const colors = ["Black", "Grey", "White", "Red", "Blue", "Yellow", "Purple", "Green", "Pink"];
  const types = ["Polo", "Hoodie", "Basic"];
  const genders = ["Women", "Men"];
  const priceRanges = [{ name: "0-₹250", min: 0, max: 250 }, { name: "₹251-₹450", min: 251, max: 450 }, { name: "₹451-₹1000+", min: 451, max: 9999999 }];

  return (
    <div className='filter-container'>
      <h3>Apply filter </h3>
      <FilterCategory 
        name="Color"
        data={colors}
      />
      <FilterCategory
        name="Type"
        data={types}
      />
      <FilterCategory
        name="Gender"
        data={genders}
      />
      <FilterCategory
        name="PriceRange"
        data={priceRanges}
      />
    </div>
  )
}

export default Filter;