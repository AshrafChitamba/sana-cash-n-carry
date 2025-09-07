"use client";

import dynamic from "next/dynamic";
import { CategoryTemplateProps } from "./CategoryTemplate";

const CategoryTemplate = dynamic(() => import("./CategoryTemplate"), {
  ssr: false,
});

export const CategoryTemplateWrapper = (props: CategoryTemplateProps) => (
  <CategoryTemplate {...props} />
);
