import clsx from "clsx";
import React from "react";

export const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  const mobileLinkClassName = "block text-black/90 text-base font-medium py-2";

  return (
    <ul
      className={clsx(
        !isMobile && "items-center gap-x-8 text-[#FCFCFC] hidden md:flex",
        isMobile && "space-y-4"
      )}
    >
      <li>
        <a
          href="#home"
          className={clsx(
            "hover:text-secondary",
            isMobile && mobileLinkClassName
          )}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#categories"
          className={clsx(
            "hover:text-secondary",
            isMobile && mobileLinkClassName
          )}
        >
          Categories
        </a>
      </li>
      <li>
        <a
          href="#history"
          className={clsx(
            "hover:text-secondary",
            isMobile && mobileLinkClassName
          )}
        >
          History
        </a>
      </li>
      <li>
        <a
          href="#stores"
          className={clsx(
            "hover:text-secondary",
            isMobile && mobileLinkClassName
          )}
        >
          Find a store
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={clsx(
            "hover:text-secondary",
            isMobile && mobileLinkClassName
          )}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
