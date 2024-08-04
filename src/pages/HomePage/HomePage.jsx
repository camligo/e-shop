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
    <section className={styles.HomePage}>
      <h1>Online Grocery Store</h1>
      {categories.length > 0 && (
        <Carousel>
          {categories.map((category) => (
              <CategoryCard key={category.id} category={category}/>
            ))}
        </Carousel>
      )}
    </section>
  )
}

export default HomePage
