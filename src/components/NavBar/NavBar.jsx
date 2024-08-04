import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './NavBar.module.scss'
import Cart from '../Cart/Cart'
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const NavBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const classes = `${styles.Header} ${
    isHamburgerMenuOpen ? styles.Header_expanded : styles.Header
  }`;

  return (
  <header className={classes}>
    <nav className={styles.NavContainer}>
      <div className={styles.MenuContainer}>
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
      <HamburgerMenu onClick={toggleHamburgerMenu} isOpen={isHamburgerMenuOpen}/>
    </nav>
    {isHamburgerMenuOpen && (
      <div className={styles.DropdownMenuContainer}>
        <div className={styles.DropdownMenu}>
          <NavLink
            to="/"
            className={styles.DropdownItem}
            onClick={toggleHamburgerMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={styles.DropdownItem}
            onClick={toggleHamburgerMenu}
          >
            Browse Products
          </NavLink>
          <NavLink
            to="/products/saved"
            className={styles.DropdownItem}
            onClick={toggleHamburgerMenu}
          >
            Saved List
          </NavLink>
        </div>
      </div>
    )}
  </header>
  )
}

export default NavBar;
