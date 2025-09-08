import clsx from "clsx";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const MOBILE_ICON_SIZE = 18.5;
const DESKTOP_ICONS_SIZE = 17;

export const SocialLinks = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={clsx("flex items-center", isMobile ? "gap-x-3" : "gap-x-2.5")}
    >
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors"
      >
        <FaFacebookF size={isMobile ? MOBILE_ICON_SIZE : DESKTOP_ICONS_SIZE} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors"
      >
        <FaInstagram size={isMobile ? MOBILE_ICON_SIZE : DESKTOP_ICONS_SIZE} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors"
      >
        <FaLinkedinIn size={isMobile ? MOBILE_ICON_SIZE : DESKTOP_ICONS_SIZE} />
      </a>
    </div>
  );
};
