import Home from './components/home/Home';
import Header from './components/header/Header';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Home />
      } />
      <Route path="/shop" element={
        <>
          <Header />
          <ProductList />
        </>
      } />
      <Route path="/product/:id" element={
        <>
          <Header />
          <ProductDetail />
        </>
      } />
      <Route path="*" element={
        '404 없는 페이지'
      } />
    </Routes>
  );
}
