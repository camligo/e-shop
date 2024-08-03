import { useEffect, useState } from "react";
import styles from "./SavedItem.module.scss";
import { saveProduct } from "../../services/food-service";


const SavedItem = ({ food, isSavedPage }) => {
  const [isSaved, setIsSaved] = useState(food.saved);

  const handleClick = () => {
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    if (food) {
      saveProduct(food.id, isSaved);
    }
  }, [isSaved]);

  const classes = `${styles.BtnSecondary} ${
    isSaved ? styles.BtnSecondary_true : styles.BtnSecondary_false
  }`;

  if (isSavedPage) {
    return null;
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={classes}>
          {isSaved ? "Added to List!" : "Save to List"}
      </button>
    </>
  )
}

export default SavedItem
