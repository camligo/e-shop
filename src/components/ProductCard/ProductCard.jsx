import styles from "./ProductCard.module.scss";
import Counter from "../Counter/Counter";
import SavedItem from "../SavedItem/SavedItem";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

const ProductCard = ({ food, onClick }) => {

  return (
    <article className={styles.CardContainer} onClick={onClick}>
      <div className={styles.ImgContainer}>
        <img
          className={styles.ProductImg}
          src={food.imageLink}
          alt={food.name}
        />
      </div>
      <h3 className={styles.ProductName}>{food.name}</h3>
      <h4>${food.price} ({food.weight})</h4>
      <div onClick={(e) => e.stopPropagation()} className={styles.BtnContainer}>
        <Counter initialValue={0} capacity={food.stockAmount} />
        <BtnPrimary>Add to Cart</BtnPrimary>
        {/* pass the food prop to the SavedItem component */}
        <SavedItem food={food} />
      </div>
    </article>
  )
}

export default ProductCard
