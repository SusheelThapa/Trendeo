import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <span
          key={index}
          className="text-[#FFAD33] text-xl md:text-2xl lg:text-3xl"
        >
          ★
        </span>
      ))}
      {hasHalfStar && (
        <span className="text-[#FFAD33] text-xl md:text-2xl lg:text-3xl relative">
          <span
            className="absolute left-0 top-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            ★
          </span>
          <span className="text-gray-300">★</span>
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <span
          key={`empty-${index}`}
          className="text-gray-300 text-xl md:text-2xl lg:text-3xl"
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
