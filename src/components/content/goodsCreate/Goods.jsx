import React from 'react'

import styles from '../Content.module.css'
import {goods} from './goods.data'
import { ContentContext } from '../Content'

function Goods() {
    const {setCart, addCart} = React.useContext(ContentContext)
    
    return (
        <div>
            <h1 className={styles.title}>Catalog</h1>
            <div className={styles.blocks}>
                {goods.map( roll => {
                    return <div key={roll.id} className={styles.item}>
                        <div 
                        className={styles.image}
                        style={{
                            background: `url(${roll.img}) center no-repeat`
                        }}
                        />
                        <div className={styles.info}>
                            <h2>{roll.name}</h2>
                            <p className={styles.info__descr}>{roll.description}</p>
                            <p>{new Intl.NumberFormat('uk', {
                                style: 'currency',
                                currency: 'UAH',
                            }).format(roll.cost)}</p>
                            <button onClick={()=> { 
                                addCart(roll)
                                return setCart(roll) 
                            // return addCart()
                                // return props.setCart(roll)
                                // return  setCart({
                                //     id: roll.id,
                                //     name: roll.name,
                                //     description: roll.description,
                                //     cost: roll.cost,
                                // })
                            }} className={styles.btn__add} type='button'>Add</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
  }
  
export default Goods;