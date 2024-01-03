import React, { useEffect, useState } from 'react';
import { Routes,Route } from "react-router-dom";
import './assets/global.css'

import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import CartPage from './components/cart/CartPage'
export const ContentContext = React.createContext()

function App() {

  let sumCost = 0
  const [goods, setGoods] = useState([])
  const [cart, setCart] = useState([])
  const [cost, setCost] = useState(sumCost)
  useEffect(()=>{
    fetch('https://64a14e530079ce56e2daf3da.mockapi.io/items').then(res=>{
      return res.json()
    }).then((arr)=>{
      setGoods(arr)
    })
  }, [])

  function changeCart(item) {
    const itemExist = cart.find(el=>el.id === item.id)
    if(itemExist){
      increment(item.id)
    } else {
      setCart([...cart, {...item}])
    }
    setCost(()=>cost + item.cost)
  }

  function removeItemCart(item, id) {
    setCart(cart.filter(el=>el.id !== id))
    setCost(()=>cost - (item.cost * item.count))
  }

  function increment(id) {
    setCart(cart.map(el=>{
      if(el.id === id) {
        el.count++
      }
      setCost(()=>cost + el.cost)
      return el
    }))
  }

  function descrement(item, id, count) {
    if(count === 1) {
      setCart(cart.filter(el=>el.id !== id))
      setCost(()=>cost - item.cost)
    } else {
      setCart(cart.map((el, i)=>{
        if(el.id === id) {
          setCart(()=>el.count--)
        }
      setCost(()=>cost - el.cost)
        return el
      }))
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('cart') !== null){
      setCart(JSON.parse(localStorage.getItem('cart')))
      setCost(JSON.parse(localStorage.getItem('cost')))
    }
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(()=>{
    localStorage.setItem('cost', JSON.stringify(cost))
  }, [cost])

  const value = {
    goods, cart, cost, sumCost, changeCart, setCart, removeItemCart, increment, descrement, setCost
  }

  return (
    <div className="App">
      <Header />
      <ContentContext.Provider value={value}>
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
