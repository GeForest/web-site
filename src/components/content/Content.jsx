import React from 'react';

import styles from './Content.module.css'
import Goods from './goodsCreate/Goods';
import Cart from './cartCreate/Cart';

function Content() {
  return (
      <div className={styles.content} >
          <Goods />
          <Cart />
      </div>
  );
}

export default Content;