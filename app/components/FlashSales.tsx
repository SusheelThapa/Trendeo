import React from "react";
import ProductCard from "./ProductCard";
import flash_sales_products from "@/public/json/flash_sales.json"; // Adjust the path as necessary
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import Timer from "./Timer";

const FlashSales: React.FC = () => {
  return (
    <section className="py-4 px-6 sm:px-14 lg:px-28 ">
      <SectionHeader title="Today's" subtitle="Flash Sales">
        <Timer targetDate="2024-06-31T00:00:00Z" />
      </SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {flash_sales_products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            remainingItems={product.remainingItems}
            discount={product.discount}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <Button color="red" text="View All Products" />
      </div>
      <hr className="my-10 border-t-2 border-gray-300" />
    </section>
  );
};

export default FlashSales;
