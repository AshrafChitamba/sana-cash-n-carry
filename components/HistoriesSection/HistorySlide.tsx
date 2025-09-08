"use client";

import { HistorySlideType } from "@/data/histories";
import { usePresenceData, motion } from "motion/react";
import { Fragment, useRef } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { getFormattedDate, getDateYear } from "@/utils/formatDate";

type HistorySlideProps = HistorySlideType & {
  setSlide(newDirection: 1 | -1): void;
};

export const HistorySlide = (props: HistorySlideProps) => {
  const direction = usePresenceData();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0,
          type: "tween",
          visualDuration: 0.1,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 w-full h-full">
          <img
            src={props.image}
            alt={`${props.image}_History`}
            className="w-full h-[300px] sm:h-[400px] md:h-[480px] xl:h-[420px] object-cover rounded-[10px] grayscale"
          />
        </div>
        <div className="lg:col-span-3 flex flex-col justify-between gap-y-4 sm:gap-y-5 lg:py-3.5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.slideHistories.slice(0, 2).map((slideHistory, index) => (
              <Fragment key={index}>
                {slideHistory ? (
                  <div>
                    <h3 className="text-[#101828] text-[21px] font-medium mb-2.5">
                      {getDateYear(slideHistory.date)}
                    </h3>
                    <h4 className="text-[#101828] font-medium mb-2.5">
                      {slideHistory.title}
                    </h4>
                    <p className="text-[#4A5565] mb-3">
                      {slideHistory.description}
                    </p>
                    <span className="text-[#4A5565] text-[12px] uppercase">
                      {getFormattedDate(slideHistory.date)}
                    </span>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              initial={false}
              aria-label="Previous"
              style={{}}
              onClick={() => props.setSlide(-1)}
              whileTap={{ scale: 0.95 }}
            >
              <TbChevronLeft
                className="bg-[#D9D9D9] text-header-text p-2 hover:bg-[#009689] hover:text-white rounded-full cursor-pointer"
                size={40}
              />
            </motion.button>

            <motion.button
              initial={false}
              aria-label="Next"
              style={{}}
              onClick={() => props.setSlide(1)}
              whileTap={{ scale: 0.95 }}
            >
              <TbChevronRight
                className="bg-[#D9D9D9] text-header-text p-2 hover:bg-[#009689] hover:text-white rounded-full cursor-pointer"
                size={40}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
