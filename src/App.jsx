import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { addFoodsToFirestore } from "./services/food-service";
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SavedListPage from "./pages/SavedListPage/SavedListPage";
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
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/products/saved" element={<SavedListPage />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
