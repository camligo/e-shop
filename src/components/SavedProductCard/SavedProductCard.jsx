import styles from "./SavedProductCard.module.scss";
import Counter from "../Counter/Counter";
import SavedItem from "../SavedItem/SavedItem";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

const SavedProductCard = ({ food, onRemove, isSavedPage }) => {
  const handleRemove = (e) => {
    onRemove(food.id);
  };

  return (
    <article className={styles.CardContainer}>
      <div className={styles.CardHeading}>
        <h3>{food.name} ${food.price}</h3>
      </div>
      <div className={styles.CardContent}>
        <div className={styles.ImgContainer}>
          <img
            className={styles.ProductImg}
            src={food.imageLink}
            alt={food.name}
          />
        </div>
        <div className={styles.ProductInfo}>
          <div onClick={(e) => e.stopPropagation()} className={styles.BtnContainer}>
            <Counter initialValue={0} capacity={food.stockAmount} />
            <SavedItem food={food} isSavedPage={isSavedPage}/>
            <BtnPrimary className={styles.LongCardBtn}>Add to Cart</BtnPrimary>
            <button
              className={styles.BtnRemove}
              onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SavedProductCard
