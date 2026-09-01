import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import OrderForm from "./pages/OrderForm";
import OrderConfirmation from "./pages/OrderConfirmation";
import UploadProduct from "./pages/UploadProduct";
import UploadConfirmation from "./pages/UploadConfirmation";
import ManageListings from "./pages/ManageListings";
import EditListing from "./pages/EditListing";
import DeleteConfirmation from "./pages/DeleteConfirmation";
import EditConfirmation from "./pages/EditConfirmation";
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<ProductList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/order/:id" element={<OrderForm />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/upload" element={<UploadProduct />} />
      <Route path="/upload-confirmation" element={<UploadConfirmation />} />
      <Route path="/manage-listings" element={<ManageListings />} />
      <Route path="/edit/:id" element={<EditListing />} />
      <Route path="/edit-confirmation" element={<EditConfirmation />} />
      <Route path="/delete/:id" element={<DeleteConfirmation />} />
      <Route path="/my-orders" element={<MyOrders />} />
    </Routes>
  </BrowserRouter>
);
