import { useEffect, useState } from "react";
import { getAllFoods } from "../../services/food-service";
import styles from "./ProductsPage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsPage = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getAllFoods().then((data) => setFoods(data))
  }, [])

  return (
    <div>
      <h1>Products</h1>
      {foods.length > 0 && (
        <div className={styles.ProductsContainer}>
          {foods.map((food) => (
            <ProductCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsPage;
