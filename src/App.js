import React from 'react';
import './App.css';
import { commerce } from './commerce.js';
import Navbar from './Navbar';
import ShopPage from './ShopPage';
import Home from './Home';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemPage from './ItemPage';
import { Cart } from './Cart';
import { useState, useEffect } from "react";
import Checkout from './Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const setItems = (newValue) => {
    setItemCount(newValue);
  };


  const setCount = async () => {
  setItemCount(await cart?.total_items);
};
useEffect(() => {
  setCount();
}, [cart?.total_items]); 



const fetchCart = async () => {
  try {
    setCart(await commerce.cart.retrieve());
    setIsLoading(false);
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
};

  useEffect(() => {
    fetchCart();
  }, []); // Empty dependency array ensures the effect runs only once on initial render

  return (
    <ChakraProvider>
      <>
        <Router>
          <Navbar  isLoading={isLoading} setIsLoading={setIsLoading} totalItems={itemCount} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop/:type" element={<ShopPage isLoading={isLoading} setIsLoading={setIsLoading} setItems={setItems}/>} />
            <Route path="/item/:productId" element={<ItemPage setItems={setItems}/>} />
            <Route exact path="/cart" element={<Cart isLoading={isLoading} setIsLoading={setIsLoading} setCount={setCount} itemCount={itemCount} fetchCart={fetchCart} cart={cart} setCart={setCart}/>} />
            <Route exact path="/Checkout" element={<Checkout cart={cart} id={cart?.id} />} />
          </Routes>
        </Router>
      </>
    </ChakraProvider>
  );
}

export default App;