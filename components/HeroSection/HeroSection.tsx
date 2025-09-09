import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/banner-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#012b1b]/70 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Sana Logo"
            width={300}
            height={200}
            className="w-auto h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px]"
            priority
          />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#f0efef] font-light mb-12 max-w-4xl leading-relaxed">
          One Stop, Family Shopping
        </h1>

        <button className="bg-[#28c878] text-[#012b1b] underline uppercase font-semibold py-4 px-8 rounded-full text-sm shadow-lg hover:shadow-xl">
          Contact Us
        </button>
      </div>
    </section>
  );
};
