import React from "react";

import styles from './CartPage.module.css'
import { ContentContext } from '../../App'


function CartPage() {
    let {arrCart} = React.useContext(ContentContext)

    return (
        <div className={styles.page__cart}>
            <div className={styles.cart__block}>
                <h1>Your shopping cart</h1>
                {arrCart.map(item => {
                    return <div key={item.id} className={styles.cart__item}>
                        <div 
                            className={styles.cart__image}
                            style={{
                                background: `url(${item.img}) center no-repeat`
                            }}/>
                        <div className={styles.cart__info}>
                            <h2>{item.name}</h2>
                            <p className={styles.cart__descr}>{item.description}</p>
                            <p>{new Intl.NumberFormat('uk', {
                                style: 'currency',
                                currency: 'UAH',
                            }).format(item.cost)}</p>
                        </div>
                    </div>
                })}
            </div>
    </div>
    )
}

export default CartPage