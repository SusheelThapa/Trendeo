import React from "react";
import ProductCard from "./common/ProductCard";
import our_products from "@/public/json/our_products.json"; // Adjust the path as necessary
import ProductSection from "./common/ProductSection";

const OurProducts: React.FC = () => {
  return (
    <ProductSection
      section_title="Our Products"
      section_subtitle="Explore Our Products"
      products={our_products}
    />
  );
};

export default OurProducts;
