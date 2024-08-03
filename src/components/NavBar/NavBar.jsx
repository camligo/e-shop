import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss'
import Cart from '../Cart/Cart'

const NavBar = () => {
  return (
  <header>
    <nav className={styles.Container}>
      <div className={styles.NavContainer}>
        <NavLink to="/" className={styles.NavItem}>
          Home
        </NavLink>
        <NavLink to="/products" className={styles.NavItem}>
          Browse Products
        </NavLink>
        <NavLink to="/products/saved" className={styles.NavItem}>
          Saved List
        </NavLink>
      </div>
      <div className={styles.CartContainer}>
        <Cart />
      </div>
    </nav>
  </header>
  )
}

export default NavBar;
