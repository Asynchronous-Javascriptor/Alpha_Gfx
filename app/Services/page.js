'use client';
import ServiceData from "@/public/data/Servicedata";
import ServiceCard from "@/components/Servicecard";
import { useState } from "react";

const ServicePage = () => {
  const [selectedId, setSelectedId] = useState(1);
  const service = ServiceData.find(service => service.id === selectedId);

  return (
    <>
      <div id="services" className="px-4">
        <div className="w-full p-2 text-center text-white">
          <h4 className="font-serif font-bold">SERVICES</h4>
          <h3 className="lg:text-5xl text-3xl font-extrabold">Your one stop shop</h3>
        </div>

        <div className="w-full mt-4 flex lg:flex-row lg:gap-6 flex-col justify-evenly">
          <div className="flex flex-col lg:gap-12 gap-6 text-1.5xl text-white text-center cursor-pointer">
            <a
              className={`p-3 ${selectedId === 1 ? "text-amber-200" : ""}`}
              onClick={() => setSelectedId(1)}
            >
              Vedio Editing
            </a>
            <a
              className={`p-3 ${selectedId === 2 ? "text-amber-200" : ""}`}
              onClick={() => setSelectedId(2)}
            >
              Motion Design
            </a>
            <a
              className={`p-3 ${selectedId === 3 ? "text-amber-200" : ""}`}
              onClick={() => setSelectedId(3)}
            >
              Graphic Design
            </a>
            <a
              className={`p-3 ${selectedId === 4 ? "text-amber-200" : ""}`}
              onClick={() => setSelectedId(4)}
            >
              Website Design
            </a>
          </div>

          <div className="p-4">
            {service && (
              <ServiceCard
                icon={service.image}
                description={service.description}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
