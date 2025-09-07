"use client";

import { FaCheck } from "react-icons/fa";

const highlights = [
  "2019 Supermarket Award",
  "10000+ Customers",
  "500+ Employees",
  "Malawi's leading retail",
  "20+ Supermarkets",
  "Verified Warehouse",
];

export const Highlights = () => {
  return (
    <section className="w-full overflow-x-auto">
      <div className="flex flex-wrap gap-4 py-6 w-full max-w-[93rem] mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 border rounded-[20px] border-header-text whitespace-nowrap bg-[#F0FAFB] cursor-context-menu"
          >
            <FaCheck className="text-header-text" />
            <span className="text-header-text text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
