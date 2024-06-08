import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = hasHalfStar ? 4 - fullStars : 5 - fullStars;

  return (
    <div className="flex">
      {Array.from({ length: fullStars }).map((_, index) => (
        <span key={index} className="text-[#FFAD33] text-lg">
          ★
        </span>
      ))}
      {hasHalfStar && <span className="text-[#FFAD33] text-lg">☆</span>}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300 text-lg">
          ☆
        </span>
      ))}
    </div>
  );
};

export default StarRating;
