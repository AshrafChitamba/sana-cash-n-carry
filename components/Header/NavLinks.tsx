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
            !isMobile && "hover:text-white",
            isMobile && `${mobileLinkClassName} hover:text-secondary`
          )}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#categories"
          className={clsx(
            !isMobile && "hover:text-white",
            isMobile && `${mobileLinkClassName} hover:text-secondary`
          )}
        >
          Categories
        </a>
      </li>
      <li>
        <a
          href="#history"
          className={clsx(
            !isMobile && "hover:text-white",
            isMobile && `${mobileLinkClassName} hover:text-secondary`
          )}
        >
          History
        </a>
      </li>
      <li>
        <a
          href="#stores"
          className={clsx(
            !isMobile && "hover:text-white",
            isMobile && `${mobileLinkClassName} hover:text-secondary`
          )}
        >
          Find a store
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={clsx(
            !isMobile && "hover:text-white",
            isMobile && `${mobileLinkClassName} hover:text-secondary`
          )}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
