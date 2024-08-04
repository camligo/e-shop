import { useEffect, useState } from "react";
import { getAllFoods } from "../../services/food-service";
import styles from "./ProductsPage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import Modal from "../../components/Modal/Modal";

const ProductsPage = () => {
  const [foods, setFoods] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getAllFoods().then((data) => setFoods(data))
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <section className={styles.PageContainer}>
      <h1 className={styles.MainHeading}>All Products</h1>
      {foods.length > 0 && (
        <div className={styles.ProductsContainer}>
          {foods.map((food) => (
            <ProductCard key={food.id} food={food} onClick={() => handleProductClick(food)}/>
          ))}
        </div>
      )}
      <Modal product={selectedProduct} onClose={handleCloseModal}/>
    </section>
  )
}

export default ProductsPage;
