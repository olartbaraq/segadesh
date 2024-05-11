"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PORTFOLIOS } from "@/texts/projects";
import React from "react";

const Project = () => {
  const router = useRouter();

  const handleProjectClick = (id: number) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 place-self-center place-items-center">
      {PORTFOLIOS.map((project) => (
        <div key={project.id} className="relative">
          <Image
            className="w-auto h-auto hidden md:block"
            src={project.mainImage}
            alt={project.title}
            height={300}
            width={200}
            priority={true}
          />

          <Image
            className="w-auto h-auto block md:hidden"
            src={project.mainImage}
            alt={project.title}
            height={200}
            width={150}
            priority={true}
          />

          <div className="absolute top-6 left-8 md:left-4 opacity-0 hover:opacity-90 border bg-segGrey w-32 md:w-40 h-48 justify-center items-center flex flex-col space-y-16">
            <div>
              <h3 className="text-xs md:text-sm font-medium leading-relaxed text-segBlue">
                {project.company}
              </h3>
              <h3 className="text-xs md:text-sm font-medium leading-relaxed text-segRed text-center">
                {project.title}
              </h3>
            </div>

            <div
              className="cursor-pointer mt-10 bg-segRed w-28 h-8 flex items-center justify-center rounded-xl"
              onClick={() => handleProjectClick(project.id)}
            >
              <h2 className="text-white text-xs md:text-sm leading-relaxed font-light">
                See More...
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
