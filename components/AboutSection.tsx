import { CheckIcon } from "./CheckIcon";

export const AboutSection = () => {
  return (
    <section className="py-10 lg:py-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 max-w-7xl mx-auto">
        <div className="w-full h-full">
          <img
            src="/furniture.jpg"
            alt="sana-Mega-Store"
            className="w-full h-[300px] sm:h-[400px] md:h-[480px] xl:h-[420px] object-cover rounded-[10px] grayscale"
          />
        </div>
        <div className="self-center lg:py-3.5 text-primary">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Malawi&apos;s Leading Supermarket
          </h2>

          <div className="mt-6">
            <div className="flex items-center gap-0.5 mb-1">
              <CheckIcon />
              <h3 className="font-semibold">Proudly Malawian at our core</h3>
            </div>
            <p className="text-sm sm:max-w-[75%] sm:ml-5">
              Our story began and continues in Malawi, where our roots, pride,
              and purpose remain firmly grounded. Every step of our journey is
              shaped by Malawian values — community, trust, and resilience — as
              we grow alongside the people we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
