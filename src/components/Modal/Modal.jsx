import styles from './Modal.module.scss'

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className={styles.ModalOverlay} onClick={onClose}>
      <div className={styles.ModalContent}>
        <button onClick={onClose} className={styles.CloseBtn}>x</button>
        <h2>{product.name}</h2>
        <h4>{product.price}</h4>
        <img
          src={product.imageLink}
          alt={product.name}
          className={styles.ProductImg}
        />
        <p>{product.productDetails}</p>
        <p>{product.weight}</p>
      </div>
    </div>
  )
}

export default Modal
