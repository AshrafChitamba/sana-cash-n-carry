import { Highlights } from "./Highlights";

export const HeroSection = () => {
  return (
    <section id="home" className="bg-[#f0fafb] p-0 sm:p-4 md:py-4 md:px-8">
      <div className="relative h-[380px] sm:h-[450px] md:h-[580px] w-full bg-[url('/hero-banner.jpg')] bg-cover bg-center sm:rounded-[10px] overflow-hidden grid content-center pl-[5%] max-w-[93rem] mx-auto">
        <div className="relative z-10 text-white flex flex-col gap-y-5">
          <span className="font-medium">
            Sana Cash <span className="font-bold">n</span> Carry
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-snug">
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
            href="/#contact"
            className="w-fit bg-[#fcfcfc] font-semibold text-secondary text-[14px] px-7 py-2.5 rounded-3xl"
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
