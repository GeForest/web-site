import styles from './Header.module.css'

function Header() {
    return (
    <div className={styles.header}>
        <div>
            <h3>WO Sushi</h3>
        </div>
        <div className={styles.header__menu}>
            <div>Block 1</div>
            <div>Block 2</div>
            <div>Block 3</div>
        </div>
</div>
    );
  }
  
  export default Header;