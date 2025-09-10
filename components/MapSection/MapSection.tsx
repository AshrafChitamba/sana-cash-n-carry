"use client";

import { MapWrapper } from "./MapWrapper";

export const MapSection = () => {
  return (
    <section className="bg-[#f0efef]">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-secondary grid place-content-center">
          <div className="flex flex-col items-start gap-4 max-w-lg">
            <h2 className="text-6xl text-primary font-bold">
              Find Your Nearest SANA
            </h2>
            <a
              href="https://maps.app.goo.gl/JRVRcCywJCoPyJpe7"
              className="bg-[#e5ffb8] text-primary underline uppercase font-semibold py-4 px-8 rounded-full text-sm shadow-lg hover:shadow-xl border border-primary"
            >
              Let&apos;s go
            </a>
          </div>
        </div>
        <div className="w-full h-[600px] py-10 px-8">
          <div className="w-full h-full">
            <MapWrapper />
          </div>
        </div>
      </div>
    </section>
  );
};
