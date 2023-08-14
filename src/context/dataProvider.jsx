import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    const [isFilterApplied, setIsFilterApplied]= useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] =useState(0);
    return(
        <DataContext.Provider value={{
            products,
            setProducts,
            cart,
            setCart,
            totalAmount,
            setTotalAmount,
            filteredProducts,
            setFilteredProducts,
            isFilterApplied,
            setIsFilterApplied
        }}> 
        {children}
        </DataContext.Provider>
    )
}

export default DataProvider;