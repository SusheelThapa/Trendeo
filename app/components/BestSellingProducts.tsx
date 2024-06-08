import React from "react";
import ProductCard from "./ProductCard";
import best_selling_products from "@/public/json/best_selling.json"; // Adjust the path as necessary
import ProductSection from "./ProductSection";

const BestSellingProducts: React.FC = () => {
  return (
    <ProductSection
      section_title="This month"
      section_subtitle="Best Selling Products"
      products={best_selling_products}
    />
  );
};

export default BestSellingProducts;
