import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
