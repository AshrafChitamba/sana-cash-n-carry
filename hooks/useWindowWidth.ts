import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCurrentBreakpoint = () => {
    if (windowWidth >= 1280) return "xl";
    if (windowWidth >= 1024) return "lg";
    if (windowWidth >= 768) return "md";
    if (windowWidth >= 640) return "sm";
    return "nm";
  };

  const breakpoint = getCurrentBreakpoint();
  console.log({ breakpoint, windowWidth });
  return breakpoint;
};
