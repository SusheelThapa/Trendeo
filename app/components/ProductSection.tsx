import React from "react";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { Product } from "@/types/types";
import PopupAnimation from "./PopupAnimation";

interface Props {
  section_title: string;
  section_subtitle: string;
  products: Product[];
  showTimer?: boolean;
}
const ProductSection: React.FC<Props> = ({
  products,
  section_title,
  section_subtitle,
}) => {
  return (
    <section className="py-4 px-6 sm:px-14 lg:px-28 ">
      <SectionHeader title={section_title} subtitle={section_subtitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <PopupAnimation key={index}>
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
          </PopupAnimation>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button color="red" text="View All Products" />
      </div>
      <hr className="my-10 border-t-2 border-gray-300" />
    </section>
  );
};

export default ProductSection;
