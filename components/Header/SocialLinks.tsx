import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-x-2.5">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={17} className="text-secondary" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={17} className="text-secondary" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={17} className="text-secondary" />
      </a>
    </div>
  );
};
