import React from 'react'

import styles from '../Content.module.css'
import { ContentContext } from '../../../App'

function Goods() {
    const {changeCart, goods} = React.useContext(ContentContext)
    return (
        <div>
            <h1 className={styles.title}>Catalog</h1>
            <div className={styles.blocks}>
                {goods.map( roll => {
                    return <div key={roll.id} className={styles.item}>
                        <img 
                            className={styles.image}
                            src={roll.img}
                            alt='goods'
                        />
                        <div className={styles.info}>
                            <h2>{roll.name}</h2>
                            <p className={styles.info__descr}>{roll.description}</p>
                            <p>{new Intl.NumberFormat('uk', {
                                style: 'currency',
                                currency: 'UAH',
                            }).format(roll.cost)}</p>
                            <button onClick={()=> { 
                                changeCart(roll)
                            }} className={styles.btn__add} type='button'>Add</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
  }
  
export default Goods;