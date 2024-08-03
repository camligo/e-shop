import styles from './BtnSecondary.module.scss'

const BtnSecondary = ({ children }) => {
  return (
    <button className={styles.BtnSecondary}>
      {children}
    </button>
  )
}

export default BtnSecondary
