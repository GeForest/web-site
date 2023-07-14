import React from 'react';

import styles from '../Content.module.css'
import { ContentContext } from '../../../App'

function Cart() {

    let { increment, descrement, cost, cart, removeItemCart} = React.useContext(ContentContext)
    
    return (
    <div className={styles.cart__main}>
        <div className={styles.cart__block}>
            <h1>Your shopping cart:</h1>
            {cart.map(item => {
                return <div key={item.id} className={styles.cart__item}>
                    <img 
                        className={styles.cart__image}
                        alt='goods__rolls'
                        src={item.img}
                    />
                    <div className={styles.cart__info}>
                        <h2>{item.name}</h2>
                        <div className={styles.cart__count}>
                            <button onClick={()=>{descrement(item, item.id, item.count)}}>-</button>
                            <span>{item.count}</span>
                            <button onClick={()=>{increment(item.id, item)}}>+</button>
                        </div>
                        <p>{new Intl.NumberFormat('uk', {
                            style: 'currency',
                            currency: 'UAH',
                        }).format(item.cost)}</p>
                    </div>
                    <button onClick={()=>removeItemCart(item, item.id)} className={styles.remove__btn}></button>
                </div>
            })}
        </div>
        <div className={styles.cart__cost_btn}>
                <p>{new Intl.NumberFormat('uk', {
                    style: 'currency',
                    currency: 'UAH',
                }).format(cost)}</p>
            <button>Заказать!</button>
        </div>
    </div>
    );
}
  
export default Cart;