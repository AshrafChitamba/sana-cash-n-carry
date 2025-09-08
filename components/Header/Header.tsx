"use client";

import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { SocialLinks } from "./SocialLinks";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prevState) => !prevState);

  return (
    <>
      <header className="relative">
        <div className="bg-[#f9fafb] px-4 sm:px-8 py-2.5">
          <div className="flex justify-end gap-x-8 max-w-[93rem] mx-auto">
            <a href="tel:" className="text-secondary text-[14px]">
              (+265) 994 351 384
            </a>

            <SocialLinks isMobile={false} />
          </div>
        </div>
        <nav className="bg-primary p-4 md:px-8">
          <div className="max-w-[93rem] mx-auto flex justify-between">
            <div>
              <img src="/logo.png" alt="SANA_LOGO" className="object-contain" />
            </div>
            <NavLinks isMobile={false} />
            <div className="block md:hidden">
              <button onClick={toggleMobileMenu}>
                <HiBars3BottomRight className="text-[#FCFCFC]" size={30} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img
              src="/logo.png"
              alt="SANA_LOGO"
              className="object-contain h-12 grayscale"
            />
            <button onClick={toggleMobileMenu} className="p-2">
              <IoClose className="text-gray-600" size={24} />
            </button>
          </div>

          <nav>
            <NavLinks isMobile={true} />
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-x-4">
              <span className="text-secondary text-sm">Follow us:</span>
              <SocialLinks isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
