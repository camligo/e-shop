import { useEffect, useState } from "react";
import styles from "./SavedItem.module.scss";
import { saveProduct } from "../../services/food-service";

const SavedItem = ({ food }) => {
  const [isSaved, setIsSaved] = useState(food.saved);

  const handleClick = () => {
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    if (food) {
      saveProduct(food.id, isSaved);
      console.log(isSaved);
    }
  }, [isSaved]);

  const classes = `${styles.SaveLogo} ${
    isSaved ? styles.SaveLogo_true : styles.SaveLogo_false
  }`;

  return (
    <div>
      <button
        onClick={handleClick}
        className={classes}>
          Save to List
      </button>
    </div>
  )
}

export default SavedItem
