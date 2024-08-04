import { NavLink } from 'react-router-dom'
import styles from './Cart.module.scss'

const Cart = () => {
  return (
    <NavLink to="/checkout">
      <button className={styles.CartIconContainer}>
        <img
          src="./cart-large.svg"
          alt="Shopping Cart"
          className={styles.CartIcon}
        />
      </button>
    </NavLink>
  )
}

export default Cart
