import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = ({ onClick, isOpen }) => {
  return (
    <div className={styles.Container} onClick={onClick}>
      {isOpen ? (
        <img
          src="../../close.svg"
          alt="Close menu"
          className={styles.Icon}
        />
      ) : (
        <img
          src="../../hamburger-menu.svg"
          alt="Open menu"
          className={styles.Icon}
        />
      )}
    </div>
  )
}

export default HamburgerMenu
