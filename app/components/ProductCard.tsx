import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";
import ActionButtons from "./ActionButtons";

interface ProductCardProps {
  imageUrl: string;
  price: string;
  originalPrice?: string;
  rating: number;
  remainingItems: number;
  name: string;
  isNew?: boolean;
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  price,
  originalPrice,
  rating,
  remainingItems,
  isNew = false,
  discount,
}) => {
  return (
    <div className="bg-white border border-gray-200 text-left relative shadow-md hover:shadow-lg transition-shadow duration-300 ">
      <div className="bg-[#F5F5F5] relative group py-4 md:py-6 lg:py-8">
        {isNew && (
          <span className="absolute top-2 left-2 bg-green-500 font-semibold tracking-wider text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 font-semibold tracking-wider text-white text-xs px-2 py-1 rounded">
            {discount}
          </span>
        )}
        <ActionButtons />
        <Image
          src={imageUrl}
          alt="Product"
          width={120}
          height={120}
          className="w-full h-32 md:h-48 lg:h-64 object-contain m-0 p-4 px-10"
        />
        <button className="absolute bottom-0 left-0 w-full text-lg font-medium bg-black py-2 text-center rounded-md mx-auto text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>
      <div className="px-4 py-2">
        <div className="text-sm md:text-lg lg:text-xl font-medium text-gray-800 mt-3">
          {name}
        </div>
        <div className="flex items-center mt-2">
          <span className="text-sm md:text-lg lg:text-xl font-semibold text-[#DB4444]">
            {price}
          </span>
          {originalPrice && (
            <span className="text-xs md:text-sm lg:text-base text-gray-500 line-through ml-2">
              {originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={rating} />
          <div className="text-xs md:text-sm lg:text-base text-gray-500">
            ({remainingItems})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
