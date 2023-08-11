import DataProvider from './context/dataProvider';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//components
import Home from "./components/home/Home";
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </DataProvider>
    
  );
}

export default App;
