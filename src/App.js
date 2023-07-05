import React from 'react';
import { useState } from 'react';
import './assets/global.css'
import { Routes,Route } from "react-router-dom";

import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import CartPage from './components/cart/CartPage'
export const ContentContext = React.createContext()

const arrCart = []

function App() {
  let [cart, setCart] = useState()
  function addCart(item) {
    arrCart.push(item)
    console.log(typeof cart)
  }
  return (
    <div className="App">
      <Header />
      <ContentContext.Provider value={{arrCart, addCart, setCart}}>
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='cart' element={<CartPage />}></Route>
        </Routes>
      </ContentContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
