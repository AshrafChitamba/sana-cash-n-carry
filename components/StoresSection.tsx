import { MdOutlineLocationOn, MdAccessTime, MdCall } from "react-icons/md";

export const StoresSection = () => {
  return (
    <section className="bg-[#f9fafb] py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-header-text mb-3">
            Find Our Stores
          </h2>
          <p>
            Visit any of our conveniently located stores across Malawi for{" "}
            <br /> the best shopping experience.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="relative w-fulll h-full bg-[#009689] text-white rounded-[10px] pt-6 pb-16 px-8">
            <h4 className="text-2xl mb-3">
              Sana Cash n Cary - <br /> Lilongwe Mega Store
            </h4>
            <div className="relative z-10 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MdOutlineLocationOn size={16} className="mt-0.5" />
                <div className="space-y-0.5">
                  <h6 className="font-medium">Address</h6>
                  <p>Kenyatta Road, Area 4, lilongwe</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MdCall className="mt-0.5" />
                <div className="space-y-0.5">
                  <h6 className="font-medium">Contact</h6>
                  <p>+265 994 351 384</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MdAccessTime className="mt-0.5" />
                <div className="space-y-0.5">
                  <h6 className="font-medium">Working Hours</h6>
                  <p>Mon &ndash; Fri, 7:30 AM &ndash; 4:00 PM PT</p>
                  <p>Sat, 8:00 AM &ndash; 1:00 PM PT</p>
                  <p>Sun, Closed</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0">
              <img src="/lines.svg" alt="lines" />
            </div>
          </div>
          <div className="col-span-2 w-fulll h-full"></div>
        </div>
      </div>
    </section>
  );
};
