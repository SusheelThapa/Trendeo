import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";
import ActionButtons from "./ActionButtons";

interface ProductCardProps {
  imageUrl: string;
  price: string;
  rating: number;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  price,
  rating,
}) => {
  return (
    <div className="bg-white border border-gray-200 text-left relative shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-[#F5F5F5]">
        <ActionButtons />
        <Image
          src={imageUrl}
          alt="Product"
          width={120}
          height={120}
          className="w-full h-48 object-contain m-0 p-4 px-10"
        />
      </div>
      <div className="px-4 py-2">
        <div className="text-lg font-medium text-gray-800 mt-3">{name}</div>
        <div className="text-lg font-semibold mt-2 text-[#DB4444]">{price}</div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

export default ProductCard;
