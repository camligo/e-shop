import styles from './SavedListPage.module.scss'
import { getSavedProducts } from '../../services/food-service'
import { useState, useEffect } from "react"

const SavedListPage = () => {
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    const fetchSavedProducts = async () => {
      const products = await getSavedProducts();
      setSavedProducts(products);
    };
    fetchSavedProducts();
  }, []);

  return (
    <div>
      <h2>Saved Products</h2>
      <div>
        {savedProducts.length > 0 ? (
          savedProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
            </div>
          ))
        ) : (
          <p>You don't have any saved products yet.</p>
        )}
      </div>
    </div>
  )
}

export default SavedListPage
