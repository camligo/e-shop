import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss'
import Cart from '../Cart/Cart'

const NavBar = () => {


  return (
    <nav className={styles.NavContainer}>
      <NavLink to="/" className={styles.NavLink}>
        Home
      </NavLink>
      <NavLink to="/products" className={styles.NavLink}>
        Browse Products
      </NavLink>
      <NavLink to="/products/saved" className={styles.NavLink}>
        Saved List
      </NavLink>
      <div className={styles.CartContainer}>
        <Cart />
      </div>
    </nav>
  )
}

export default NavBar;
