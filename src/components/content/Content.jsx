import React from 'react';

import styles from './Content.module.css'
import Goods from './goodsCreate/Goods';
import Cart from './cartCreate/Cart';
// import { ContentContext } from '../../App';
// import { useState } from 'react';

// export const ContentContext = React.createContext()
// const arrCart = []

function Content() {
  // const {arrCart, setCart, addCart} = React.useContext(ContentContext)
  // let [cart, setCart] = useState()
  // function addCart(item) {
  //   arrCart.push(item)
  //   console.log(typeof cart)
  // }
  return (
    // <ContentContext.Provide value={{arrCart, addCart, setCart}}>
      <div className={styles.content} >
          <Goods />
          <Cart />
      </div>
    // </ContentContext.Provide>
  );
}

export default Content;