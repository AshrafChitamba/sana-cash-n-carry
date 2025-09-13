import { CheckIcon } from "./CheckIcon";

export const StorySection = () => {
  return (
    <section className="bg-primary py-10 lg:py-16 2xl:py-20 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 max-w-7xl mx-auto">
        <div className="order-2 w-full h-full">
          <img
            src="/story-section.jpeg"
            alt="sana-Mega-Store"
            className="w-full h-[300px] sm:h-[400px] md:h-[480px] xl:h-[420px] object-cover rounded-[10px]"
          />
        </div>
        <div className="order-1 self-center lg:py-3.5 text-[#f0efef]">
          <h2 className="text-4xl sm:text-5xl font-bold text-end capitalize">
            We&apos;re Here Because of You
          </h2>

          <div className="mt-6">
            <div className="flex flex-row-reverse items-start sm:items-center justify-start gap-0.5 mb-1">
              <CheckIcon color="#7db942" />
              <h3 className="font-semibold text-end">
                From Humble Beginnings to a National Presence
              </h3>
            </div>
            <p className="text-sm sm:mr-5 text-end sm:pl-[25%]">
              What started as a single cornershop has blossomed into more than
              25 branches across Malawi. Our growth is a reflection of the trust
              and support Malawians have placed in us. We are proud to serve the
              communities that built us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
