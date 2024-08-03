import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss'

const NavBar = () => {


  return (
    <nav className={styles.NavContainer}>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/products">
        Browse Products
      </NavLink>
      <NavLink>
        Saved List
      </NavLink>
    </nav>
  )
}

export default NavBar;
