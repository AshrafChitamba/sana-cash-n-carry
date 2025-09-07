import { bigClients } from "@/data/bigClients";
import React from "react";

export const BigClientsSection = () => {
  return (
    <section className="bg-white py-7 px-8">
      <div className="grid grid-cols-5">
        {bigClients.map((clientLogo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={clientLogo}
              alt={"Client_Logo"}
              className="w-24 h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
