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
      <button
        className={styles.BtnClose}
        onClick={handleRemove}>
        x
      </button>
      <div className={styles.ImgContainer}>
        <img
          className={styles.ProductImg}
          src={food.imageLink}
          alt={food.name}
        />
      </div>
      <h3>{food.name}</h3>
      <div onClick={(e) => e.stopPropagation()} className={styles.BtnContainer}>
        <Counter initialValue={0} capacity={food.stockAmount} />
        <SavedItem food={food} isSavedPage={isSavedPage}/>
        <BtnPrimary>Add to Cart</BtnPrimary>
      </div>
    </article>
  )
}

export default SavedProductCard
