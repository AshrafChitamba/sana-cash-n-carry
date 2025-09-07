"use client";

import { CategoryType } from "@/data/categories";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export type CategoryTemplateProps = {
  index: number;
  category: CategoryType;
};

const CategoryTemplate = (props: CategoryTemplateProps) => {
  const breakpoint = useWindowWidth();

  return (
    <div
      key={props.index}
      className={`bg-white p-6 text-center hover:bg-gray-50 transition-colors duration-200 cursor-context-menu border-gray-300
                ${breakpoint === "xl" && props.index > 5 ? "border-t" : ""}
                ${
                  breakpoint === "xl" && props.index % 6 !== 5 ? "border-r" : ""
                }
                ${breakpoint === "nm" && props.index > 1 ? "border-t" : ""}
                ${
                  breakpoint === "nm" && props.index % 2 !== 1 ? "border-r" : ""
                }
                ${breakpoint === "sm" && props.index > 2 ? "border-t" : ""}
                ${
                  breakpoint === "sm" && props.index % 3 !== 2 ? "border-r" : ""
                }
                ${breakpoint === "md" && props.index > 3 ? "border-t" : ""}
                ${
                  breakpoint === "md" && props.index % 4 !== 3 ? "border-r" : ""
                }
                ${breakpoint === "lg" && props.index > 4 ? "border-t" : ""}
                ${
                  breakpoint === "lg" && props.index % 5 !== 4 ? "border-r" : ""
                }
              `}
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
