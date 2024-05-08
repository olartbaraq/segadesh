import { BreadcrumbWithCustomSeparator } from "@/components/SeparateLink";
import React from "react";
import Image from "next/image";
import Project from "@/components/Project";

const Portfolio = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      {/* Project Heading */}
      <div className="w-full h-auto relative">
        <Image
          className="w-full h-auto"
          src={"/Rectangle1.png"}
          alt="project image"
          height={70}
          width={800}
          priority={true}
        />

        <div className="absolute top-[15%] md:top-1/3 left-10 md:left-[20%] flex flex-col space-y-1 items-start">
          <h2 className="capitalize text-white text-lg md:text-3xl lg:text-5xl leading-relaxed">
            projects
          </h2>
          <h5 className="text-white md:text-xl lg:text-3xl leading-relaxed">
            <BreadcrumbWithCustomSeparator pageName="Projects" />
          </h5>
        </div>
      </div>

      <div className="w-full flex items-center my-10 justify-center">
        <Project />
      </div>
    </div>
  );
};

export default Portfolio;
