import styles from './Modal.module.scss'
import BtnPrimary from '../BtnPrimary/BtnPrimary'
import BtnSecondary from '../BtnSecondary/BtnSecondary';

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className={styles.ModalOverlay} onClick={onClose}>
      <div className={styles.ModalContent}>
        <button
          onClick={onClose}
          className={styles.BtnClose}
        >
          x
        </button>
        <h2>{product.name}</h2>
        <h4>${product.price} ({product.weight})</h4>
        <p></p>
        <img
          src={product.imageLink}
          alt={product.name}
          className={styles.ProductImg}
        />
        <p>{product.productDetails}</p>
        <div className={styles.BtnContainer}>
          <BtnPrimary>Add to Cart</BtnPrimary>
          <BtnSecondary>Save to List</BtnSecondary>
        </div>
      </div>
    </div>
  )
}

export default Modal
