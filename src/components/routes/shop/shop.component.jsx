import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <div className="shop-container">
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />}></Route>
      </Routes>
    </div>
  );
};

export default Shop;
