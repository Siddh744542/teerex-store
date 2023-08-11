import React,{ useContext } from 'react'
import { DataContext } from '../../context/dataProvider'
const Card = () => {
    const { setCart } = useContext( DataContext );
  return (
    <div className='cart-container' >

    </div>
  )
}

export default Card