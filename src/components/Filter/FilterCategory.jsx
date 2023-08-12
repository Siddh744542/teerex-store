import React from 'react';
const FilterCategory = ({ name, data }) => {
    return (
      <div>
        <h4> {name} : </h4>
        <div>
          {data.map((item) => {
            const labelValue = name === "PriceRange" ? item.name : item;
            const inputId = name === "PriceRange" ? item.name : item;
            
            return (
              <>
                <input
                  type="radio"
                  id={inputId}
                  name={name}
                  value={name === "PriceRange" ? { min: item.min, max: item.max } : item}
                />
                <label htmlFor={inputId}>{labelValue}</label>
              </>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default FilterCategory;