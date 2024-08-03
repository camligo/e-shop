import styles from "./ProductCard.module.scss";
import Counter from "../Counter/Counter";
import SavedItem from "../SavedItem/SavedItem";

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
      <h3>{food.name}</h3>
      <Counter initialValue={0} capacity={food.stockAmount} />
      <button>
        Add to Cart
      </button>
      {/* pass the food prop to the SavedItem component */}
      <SavedItem food={food} />
    </article>
  )
}

export default ProductCard
