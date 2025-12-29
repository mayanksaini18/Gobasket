import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import ProductDetails from "../pages/ProductDetails";

import Dashboard from "../pages/Admin/Dashboard";
import Products from "../pages/Admin/Products";
import AdminOrders from "../pages/Admin/Orders";

import ProtectedRoute from "../components/layout/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      {/* Admin */}
      <Route element={<ProtectedRoute adminOnly />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
