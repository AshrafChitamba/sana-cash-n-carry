import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative h-[33rem] sm:h-[38rem] w-full overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/banner-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-primary/70 z-10"></div>

      <div className="absolute inset-0 w-full h-full z-20 flex flex-col items-center justify-center gap-y-8 px-4 text-center">
        <div>
          <Image
            src="/logo.png"
            alt="Sana Logo"
            width={300}
            height={200}
            className="w-auto h-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]"
            priority
          />
        </div>

        <h1 className="text-3xl lg:text-4xl text-[#f0efef] font-light max-w-4xl leading-relaxed">
          One Stop, Family Shopping
        </h1>

        <a
          href="#contact"
          className="inline-block bg-[#28c878] text-primary underline uppercase font-semibold py-4 px-8 rounded-full text-sm shadow-lg hover:shadow-xl"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};
