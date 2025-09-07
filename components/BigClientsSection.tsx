"use client"

import { bigClients } from "@/data/bigClients";
import { useCarouselAutoPlay } from "@/hooks/useCarouselAutoPlay";
import { motion } from "motion/react";
import { useRef } from "react";

export const BigClientsSection = () => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const { horizontalPosition, revealingItems } = useCarouselAutoPlay<string>({
    carouselContainerRef,
    items: bigClients,
  });

  return (
    <div className="bg-white py-7 px-8 overflow-hidden w-full">
      <motion.div
        ref={carouselContainerRef}
        className="grid grid-flow-col justify-center auto-cols-[90px] md:auto-cols-[200px] gap-8 max-w-[93rem] mx-auto"
        style={{ x: horizontalPosition }}
      >
        {revealingItems.map((logoUrl, itemIndex) => (
          <div key={itemIndex} className="flex items-center justify-center">
            <img
              src={logoUrl}
              alt={`Client logo ${itemIndex + 1}`}
              className="w-24 h-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
