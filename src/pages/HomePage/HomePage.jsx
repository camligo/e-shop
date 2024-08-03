import styles from './HomePage.module.scss';
import { useState, useEffect } from "react";
import { getAllCategories } from '../../services/food-service';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Carousel from '../../components/Carousel/Carousel';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data))
  }, [])

  return (
    <div className={styles.HomePage}>
      <h1>Online Grocery Store</h1>
      <div>
        {categories.length > 0 && (
          <div className={styles.CategoriesContainer}>
            <Carousel>
              {categories.map((category) => (
                  <CategoryCard key={category.id} category={category}/>
                ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
