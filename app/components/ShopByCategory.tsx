'use client';

import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const categories = [
  { 
    name: "Woman’s Fashion", 
    subcategories: ["Dresses", "Tops", "Skirts", "Accessories"]
  },
  { 
    name: "Men’s Fashion", 
    subcategories: ["Shirts", "Pants", "Jackets", "Accessories"]
  },
  { 
    name: "Electronics", 
    subcategories: ["Mobile Phones", "Laptops", "Cameras", "Accessories"]
  },
  { 
    name: "Home & Lifestyle"
  },
  { 
    name: "Medicine"
  },
  { 
    name: "Sports & Outdoor"
  },
  { 
    name: "Baby’s & Toys"
  },
  { 
    name: "Groceries & Pets"
  },
  { 
    name: "Health & Beauty"
  }
];

const ShopByCategory: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <div className="relative w-80 border-r border-r-gray-300 p-4 text-lg pt-6">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="flex justify-between items-center py-2 hover:bg-gray-100 cursor-pointer transition duration-200 relative"
          onMouseEnter={() => setHoveredCategory(index)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <span>{category.name}</span>
          {category.subcategories && <FiChevronRight className="text-gray-500" />}
          {hoveredCategory === index && category.subcategories && (
            <div className="absolute left-full top-0 w-80 bg-white shadow-lg border border-gray-300 p-4 z-50">
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="py-2 hover:bg-gray-100 cursor-pointer transition duration-200 px-4">
                  {subcategory}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShopByCategory;