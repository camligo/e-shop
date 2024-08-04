import styles from './SavedListPage.module.scss'
import { getSavedProducts } from '../../services/food-service'
import { useState, useEffect } from "react"
import SavedProductCard from '../../components/SavedProductCard/SavedProductCard'

const SavedListPage = () => {
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    const fetchSavedProducts = async () => {
      const products = await getSavedProducts();
      setSavedProducts(products);
    };
    fetchSavedProducts();
  }, []);

  const handleRemoveProduct = (productId) => {
    setSavedProducts(savedProducts.filter((product => product.id != productId)))
  };

  return (
    <section className={styles.PageContainer}>
      <h2 className={styles.Heading}>Saved Products</h2>
      <div className={styles.ListContainer}>
        {savedProducts.length > 0 ? (
          savedProducts.map((product) => (
            <SavedProductCard
              key={product.id}
              food={product}
              onRemove={handleRemoveProduct}
              isSavedPage={true}
            />
          ))
        ) : (
          <p>You don't have any saved products yet.</p>
        )}
      </div>
    </section>
  )
}

export default SavedListPage
