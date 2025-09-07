import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="relative">
      <div className="bg-[#f9fafb] px-8 py-3">
        <div className="flex justify-end gap-x-8 max-w-[93rem] mx-auto">
          <span className="text-header-text text-[14px]">
            (+265) 994 351 384
          </span>

          <div className="flex items-center gap-x-2.5">
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-header-text" />
            </a>
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-header-text" />
            </a>
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-header-text" />
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-primary py-4 px-8">
        <div className="max-w-[93rem] mx-auto flex justify-between">
          <div>
            <img src="/logo.png" alt="SANA_LOGO" className="object-contain" />
          </div>
          <ul className="flex items-center gap-x-8 text-[#FCFCFC]">
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
        </div>
      </nav>
    </header>
  );
};
