import React, { useEffect, useContext } from 'react';
import { DataContext } from "../../context/dataProvider";
import Header from '../header/Header';
import Products from "../products/Products";
import Filter from "../Filter/Filter";
import Search from '../search/Search';
import "./home.css";
const Home = () => {
  const { setProducts } = useContext(DataContext);

  useEffect(()=>{
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    .then((response) => response.json())
    .then((data) => {setProducts(data)})
    .catch((error) => console.error(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <Header />
        <Search />
      <div className='container'>
        <Filter />
        <Products />  
      </div>
    </div>
  )
}

export default Home;