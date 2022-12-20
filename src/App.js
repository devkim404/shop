import Header from './components/common/Header';
import Home from './components/home/Home';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Home />
      } />
      <Route path="/detail" element={
        <Header />
      } />
      <Route path="/about" element={
        <Header />
      } />
    </Routes>
  );
}
