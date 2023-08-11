import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    return(
        <DataContext.Provider value={{
            products,
            setProducts,
            cart,
            setCart
        }}> 
        {children}
        </DataContext.Provider>
    )
}

export default DataProvider;