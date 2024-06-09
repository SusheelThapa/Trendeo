import React from "react";
import ProductCard from "./common/ProductCard";
import flash_sales_products from "@/public/json/flash_sales.json"; // Adjust the path as necessary
import ProductSection from "./common/ProductSection";

const FlashSales: React.FC = () => {
  return (
    <ProductSection
      section_title="Today's"
      section_subtitle="Flash Sales"
      products={flash_sales_products}
    />
  );
};

export default FlashSales;
