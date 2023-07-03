import React from 'react';

import styles from './Content.module.css'
import Goods from './goodsCreate/Goods';
import Cart from './cartCreate/Cart';
import { useState } from 'react';

export const ContentContext = React.createContext()
const arrCart = []

function Content() {
  let [cart, setCart] = useState()
  function addCart(item) {
    arrCart.push(item)
    console.log(typeof cart)
  }
  return (
    <ContentContext.Provider value={{arrCart, addCart, setCart}}>
    <div className={styles.content}>
        <Goods />
        <Cart />
    </div>
    </ContentContext.Provider>
  );
}

export default Content;