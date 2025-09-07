import { histories } from "@/data/histories";

export const HistoriesSection = () => {
  return (
    <div className="py-6 px-8">
      <div>
        <h2 className="text-3xl font-medium text-header-text mb-2">
          Sana Cash n Carry
        </h2>
        <p className="text-[14px] text-[#456665]">
          Registered in the year 2009 <br /> Sana Cash &apos;n&apos; Carry has
          over 15 retails stores across Malawi
        </p>
      </div>

      <div className="mt-5">
        {histories.map((history, index) => {
          return (
            <div key={index} className="grid grid-cols-3 gap-4">
              <div className="w-full h-full">
                <img
                  src={history.image}
                  alt={`${history.image}_History`}
                  className="w-full h-[370px] object-cover rounded-[10px] grayscale"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  {history.slideHistories
                    .slice(0, 2)
                    .map((slideHistory, index) => (
                      <div key={index}>
                        <h3>{slideHistory?.date}</h3>
                        <h4>{slideHistory?.title}</h4>
                        <p>{slideHistory?.description}</p>
                        <span>{slideHistory?.date}</span>
                      </div>
                    ))}
                </div>

                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
