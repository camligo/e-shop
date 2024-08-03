import styles from './Cart.module.scss'

const Cart = () => {
  return (
    <div>
      <button className={styles.CartIconContainer}>
        <img
          src="public/cart-large.svg"
          alt="Shopping Cart"
          className={styles.CartIcon}
        />
      </button>
    </div>
  )
}

export default Cart
