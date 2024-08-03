import styles from "./ProductCard.module.scss";
import Counter from "../Counter/Counter";
import SavedItem from "../SavedItem/SavedItem";

const ProductCard = ({ food }) => {

  return (
    <article className={styles.CardContainer}>
      <img
        src={food.imageLink}
        alt={food.name}
      />
      {food.name}
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
