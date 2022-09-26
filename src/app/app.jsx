import React from "react";
import { products } from "/src/moke";
import ProductPage from "/src/product-page/product-page";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductPage product={products[0]} showInfoInAccordion />}
        />
      </Routes>
    </BrowserRouter>
  );
}
