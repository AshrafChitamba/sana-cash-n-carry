import React from "react";
import { Highlights } from "./Highlights";

export const HeroSection = () => {
  return (
    <section className="bg-[#f0fafb] px-8 py-4">
      <div className="relative h-[580px] w-full bg-[url('/hero-banner.jpg')] bg-cover bg-center rounded-[10px] overflow-hidden grid content-center pl-[5%] max-w-[93rem] mx-auto">
        <div className="relative z-10 text-white flex flex-col gap-y-5">
          <span className="font-medium">
            Sana Cash <span className="font-bold">n</span> Carry
          </span>
          <h1 className="text-7xl font-extrabold leading-snug">
            Malawi&apos;s
            <span className="relative inline-block indent-3">
              leading
              <img
                src="line.svg"
                alt="line"
                className="absolute bottom-0 left-0"
              />
            </span>
            <br />
            Supermarket
          </h1>
          <a
            href="#"
            className="w-fit bg-[#fcfcfc] font-semibold text-header-text text-[14px] px-7 py-2.5 rounded-3xl"
          >
            contact us
          </a>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#01333499] from-60% to-[#d9d9d900]"></div>
      </div>

      <Highlights />
    </section>
  );
};
