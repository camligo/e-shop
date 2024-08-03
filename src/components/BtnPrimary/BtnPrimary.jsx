import styles from './BtnPrimary.module.scss'

const BtnPrimary = ({ children }) => {
  return (
    <>
      <button className={styles.BtnPrimary}>
        {children}
      </button>
    </>
  )
}

export default BtnPrimary
