import React from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  label: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, label }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-md shadow-md border bg-white hover:bg-red-400 hover:border-transparent transition-colors duration-200
    w-full h-32 sm:w-48 sm:h-36 md:w-48 md:h-36 lg:w-48 lg:h-36`}
    >
      <div className="text-4xl sm:text-5xl lg:text-5xl mb-2 font-thin">
        {icon}
      </div>
      <div className="text-sm sm:text-base lg:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

export default CategoryCard;
