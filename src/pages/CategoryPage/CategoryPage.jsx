import { useState, useEffect } from "react";
import { getCategoryById, getFoodsByCategory } from "../../services/food-service";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './CategoryPage.module.scss'

const CategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryData = await getCategoryById(id);
        if (!categoryData) {
          throw new Error("Category not found");
        }
        const foodItems = await getFoodsByCategory(categoryData.name);
        setCategory(categoryData);
        setFoods(foodItems);
        setLoading(false);
      } catch (error) {
        console.error("Failed fetching category food items");
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className={styles.PageContainer}>
      <h1>{category.name}</h1>
      <div className={styles.ProductsContainer}>
        {foods.map(food => (
          <ProductCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
