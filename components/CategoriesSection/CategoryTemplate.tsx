"use client";

import { CategoryType } from "@/data/categories";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import clsx from "clsx";

export type CategoryTemplateProps = {
  index: number;
  category: CategoryType;
};

const CategoryTemplate = (props: CategoryTemplateProps) => {
  const breakpoint = useWindowWidth();

  return (
    <div
      key={props.index}
      className={clsx(
        "bg-white p-6 text-center hover:bg-gray-50 transition-colors duration-200 cursor-context-menu border-gray-300",
        breakpoint === "normal" && props.index > 1 ? "border-t" : "",
        breakpoint === "normal" && props.index % 2 !== 1 ? "border-r" : "",
        breakpoint === "small" && props.index > 2 ? "border-t" : "",
        breakpoint === "small" && props.index % 3 !== 2 ? "border-r" : "",
        breakpoint === "medium" && props.index > 3 ? "border-t" : "",
        breakpoint === "medium" && props.index % 4 !== 3 ? "border-r" : "",
        breakpoint === "large" && props.index > 4 ? "border-t" : "",
        breakpoint === "large" && props.index % 5 !== 4 ? "border-r" : "",
        breakpoint === "extraLarge" && props.index > 5 ? "border-t" : "",
        breakpoint === "extraLarge" && props.index % 6 !== 5 ? "border-r" : "",
      )}
    >
      <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-gray-100">
        <img
          src={props.category.image}
          alt={props.category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium text-header-text">
        {props.category.name}
      </h3>
    </div>
  );
};
export default CategoryTemplate;
