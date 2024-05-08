import React from "react";
import Image from "next/image";
import { BreadcrumbWithCustomSeparator } from "@/components/SeparateLink";
import { SERVICES } from "@/texts/services";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      {/* Project Heading */}
      <div className="w-full h-auto relative">
        <Image
          className="w-full h-auto"
          src={"/service.jpg"}
          alt="project image"
          height={70}
          width={800}
          priority={true}
        />

        <div className="absolute top-[15%] md:top-1/3 left-10 md:left-[20%] flex flex-col space-y-1 items-start">
          <h2 className="capitalize text-white text-lg md:text-3xl lg:text-5xl leading-relaxed">
            services
          </h2>
          <h5 className="text-white md:text-xl lg:text-3xl leading-relaxed">
            <BreadcrumbWithCustomSeparator pageName="Services" />
          </h5>
        </div>
      </div>

      {/* Services  */}

      <div className="mx-auto my-10 p-5 flex flex-row items-center justify-center lg:max-w-screen-xl">
        <div className="w-auto flex flex-col items-center">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={cn(
                `w-full h-auto flex items-center ${
                  service.id % 2 == 0
                    ? "flex-col-reverse space-y-2 md:flex-row-reverse md:space-y-0"
                    : "flex-col-reverse space-y-2 md:flex-row md:space-y-0"
                }`
              )}
            >
              <Image
                src={service.image}
                alt="service-image"
                height={200}
                width={425}
                priority={true}
                className="w-96 h-[18rem]"
              />

              <div className="w-96 h-[18rem] p-6 flex flex-col items-start space-y-3 bg-segRed">
                <h2 className="text-white font-bold leading-relaxed text-xl">
                  {service.name}
                </h2>
                <p className="text-white font-light leading-relaxed text-xs">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
