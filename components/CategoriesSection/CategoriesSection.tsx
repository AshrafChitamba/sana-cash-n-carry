"use client";

import { categories } from "@/data/categories";
import { CategoryTemplateWrapper } from "./CategoryTemplateWrapper";

export const CategoriesSection = () => {
  return (
    <section id="categories" className="px-4 sm:px-8 py-8 bg-white">
      <div className="max-w-[93rem] mx-auto">
        <h2 className="text-3xl font-medium text-secondary mb-8">
          Our Categories
        </h2>

        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {categories.map((category, index) => (
              <CategoryTemplateWrapper
                key={index}
                index={index}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
