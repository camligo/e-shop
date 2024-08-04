import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { addFoodsToFirestore } from "./services/food-service";
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SavedListPage from "./pages/SavedListPage/SavedListPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Layout from './containers/Layout/Layout';
import NavBar from './components/NavBar/NavBar';
import './App.scss';

function App() {
  useEffect(() => {
    addFoodsToFirestore();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories/:id" element={<CategoryPage />}/>
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/products/saved" element={<SavedListPage />}/>
            <Route path="/checkout" element={<CheckoutPage />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
