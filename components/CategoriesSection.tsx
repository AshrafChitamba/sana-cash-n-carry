import { categories } from "@/data/categories";
import React from "react";

export const CategoriesSection = () => {
  return (
    <div className="px-8 py-8 bg-white">
      <h2 className="text-3xl font-medium text-header-text mb-8">
        Our Categories
      </h2>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="grid grid-cols-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`
                bg-white p-6 text-center hover:bg-gray-50 transition-colors duration-200 cursor-context-menu border-gray-300
                ${index > 6 ? "border-t" : ""}
                ${index % 6 !== 5 ? "border-r" : ""}
              `}
            >
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-header-text">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
