'use client'
import Image from "next/image";

const ServiceCard = ({ icon, description }) => {
  return (
    <div className="ServiceCard  rounded-xl overflow-hidden mx-3.5">
      <div className="w-[620px] h-[390px] mx-auto relative">
        <Image
          src={icon}
          alt="Service"
          fill
          className="object-cover"
        
        />
      </div>

      <ul className=" text-1xl p-12 space-y-4">
        {description.map((point, index) => (
          <li key={index}>→ {point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
