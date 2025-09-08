import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCurrentBreakpoint = (width: number | null) => {
    if (width === null) return null;
    if (width >= 1280) return "extraLarge";
    if (width >= 1024) return "large";
    if (width >= 768) return "medium";
    if (width >= 640) return "small";
    return "normal";
  };

  const breakpoint = getCurrentBreakpoint(windowWidth);
  return breakpoint;
};
