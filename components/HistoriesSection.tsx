"use client"

import { histories } from "@/data/histories";
import { AnimatePresence, wrap } from "motion/react";
import { useState } from "react";
import { HistorySlide } from "./HistorySlide";

export const HistoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const nextIndex = wrap(0, histories.length, currentIndex + newDirection);
    setCurrentIndex(nextIndex);
    setDirection(newDirection);
  }
  return (
    <section className="py-6 px-4 sm:px-8">
      <div className="max-w-[93rem] mx-auto">
        <h2 className="text-3xl font-medium text-header-text mb-2">
          Sana Cash n Carry
        </h2>
        <p className="text-[14px] text-[#456665]">
          Registered in the year 2009 <br /> Sana Cash &apos;n&apos; Carry has
          over 15 retails stores across Malawi
        </p>
      </div>

      <div className="py-8 overflow-hidden max-w-[93rem] mx-auto">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <HistorySlide
            key={currentIndex}
            {...histories[currentIndex]}
            setSlide={setSlide}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};
