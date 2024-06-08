import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";
import ActionButtons from "./ActionButtons";
import { Product } from "@/types/types";

const ProductCard: React.FC<Product> = ({
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
    <div className="bg-white border border-gray-200 text-left relative shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col m-2 md:mx-4 lg:my-6 max-w-xs rounded-md">
      <div className="bg-[#F5F5F5] relative group py-3 md:py-4 lg:py-5 flex-1 flex flex-col justify-between">
        {isNew && (
          <span className="absolute top-2 left-2 bg-green-500 font-semibold tracking-wider text-white text-xs px-2 py-1 rounded z-10">
            NEW
          </span>
        )}
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 font-semibold tracking-wider text-white text-xs px-2 py-1 rounded z-10">
            {discount}
          </span>
        )}
        <ActionButtons />
        <Image
          src={imageUrl}
          alt={name}
          width={120}
          height={120}
          className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-contain m-0 p-2"
        />
        <button className="absolute bottom-0 left-0 w-full text-base font-medium bg-black py-2 text-center rounded-md mx-auto text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>
      <div className="px-2 md:px-3 lg:px-4 py-2">
        <div className="text-xs md:text-sm lg:text-base font-medium text-gray-800 mt-2">
          {name}
        </div>
        <div className="flex items-center mt-1">
          <span className="text-xs md:text-sm lg:text-base font-semibold text-[#DB4444]">
            {price}
          </span>
          {originalPrice && (
            <span className="text-xs md:text-sm lg:text-base text-gray-500 line-through ml-2">
              {originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1">
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
