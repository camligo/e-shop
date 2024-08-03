import styles from "./CategoryCard.module.scss";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category.id}`}>
      <article className={styles.Card}>
        <img
          className={styles.Img}
          src={category.imageLink}
          alt={category.name}
        />
        <h2 className={styles.Title}>{category.name}</h2>
      </article>
    </Link>
  )
}

export default CategoryCard
