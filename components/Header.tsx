"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prevState) => !prevState);

  return (
    <>
      <header className="relative">
        <div className="bg-[#f9fafb] px-8 py-3">
          <div className="flex justify-end gap-x-8 max-w-[93rem] mx-auto">
            <span className="text-header-text text-[14px]">
              (+265) 994 351 384
            </span>

            <div className="flex items-center gap-x-2.5">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={16} className="text-header-text" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={16} className="text-header-text" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={16} className="text-header-text" />
              </a>
            </div>
          </div>
        </div>
        <nav className="bg-primary p-4 md:px-8">
          <div className="max-w-[93rem] mx-auto flex justify-between">
            <div>
              <img src="/logo.png" alt="SANA_LOGO" className="object-contain" />
            </div>
            <ul className="items-center gap-x-8 text-[#FCFCFC] hidden md:flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Find a store</a>
              </li>
            </ul>
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
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="block text-gray-800 text-lg font-medium py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 text-lg font-medium py-2"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 text-lg font-medium py-2"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 text-lg font-medium py-2"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 text-lg font-medium py-2"
                >
                  Find a store
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-x-4">
              <span className="text-header-text text-sm">Follow us:</span>
              <div className="flex items-center gap-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={18} className="text-header-text" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={18} className="text-header-text" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={18} className="text-header-text" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
