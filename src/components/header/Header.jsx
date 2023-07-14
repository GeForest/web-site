import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import img from './image/icons-64.png'

function Header() {
    return (
    <div className={styles.header}>
        <div>
            <Link to={'/'} className={styles.link}>
                <h3>WO Sushi</h3>
            </Link>
        </div>
        <div className={styles.header__menu}>
            <div>Block 1</div>
            <div>Block 2</div>
            <div>Block 3</div>
        </div>
        <div className={styles.header__cart}>
            <Link to={'cart'} className={styles.btn__cart}>
                <img src={img} alt="cart-icon" />
            </Link>
        </div>
</div>
    );
  }
  
  export default Header;