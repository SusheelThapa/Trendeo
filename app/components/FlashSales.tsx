import React from "react";
import ProductCard from "./ProductCard";
import flash_sales_products from "@/public/json/flash_sales.json"; // Adjust the path as necessary
import ProductSection from "./ProductSection";

const FlashSales: React.FC = () => {
  return (
    <ProductSection
      section_title="Today's"
      section_subtitle="Flash Sales"
      products={flash_sales_products}
      showTimer={true}
    />
  );
};

export default FlashSales;
