"use client";

import React from "react";
import {} from "react-hook-form";

export const HeroSection = () => {
  return (
    <section className="bg-[#f0fafb] px-8 py-4">
      <div className="relative h-[580px] w-full rounded-[10px] overflow-hidden">
        <img
          src="/hero-banner.jpg"
          alt="supermarket"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#01333499] from-60% to-[#d9d9d900]"></div>
      </div>
    </section>
  );
};
