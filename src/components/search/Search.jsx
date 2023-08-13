import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../context/dataProvider';
import SearchIcon from "./Search.png";
import "./search.css"
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { products, setFilteredProducts } = useContext(DataContext);

    const handleSearch = () => {
      const searchTerms = searchTerm.toLowerCase().split(' ');

      const filtered = products.filter(product =>
        searchTerms.every(term =>
          product.name.toLowerCase().includes(term) ||
          product.color.toLowerCase().includes(term) ||
          product.type.toLowerCase().includes(term)
        )
      );
        setFilteredProducts(filtered);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch();
      };

  return (
  <div className='search-wrapper'>
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div onClick={handleSubmit} className='search-button' ><img className="search-icon" src={SearchIcon} alt="search-icon"/></div>
    </div>
  </div>
    
  )
}

export default Search;