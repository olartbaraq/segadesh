"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { LINKS } from "@/texts/navbar";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [navbarOpen, setNavBar] = useState<boolean>(true);

  return (
    <>
      {/* dektop navbar and hero section */}
      <div className="w-full h-auto relative hidden lg:block">
        <Image
          className="w-full h-auto"
          src={"/building.png"}
          alt="construction"
          width={1000}
          height={500}
          priority={true}
        />
        <h3 className="w-[37%] h-auto absolute bottom-3/4 left-28 text-segGrey text-5xl leading-relaxed">
          Engineering Solution for Everyone.
        </h3>
        <div className="w-2/3 h-auto absolute bottom-72 left-28 ">
          <p className="text-lg leading-10 text-white text-justify">
            For over 20 years, Segadesh has been at the forefront of delivering
            pioneering engineering solutions across diverse domains. Our
            unwavering commitment to excellence has solidified our position as a
            trusted partner for companies seeking innovative mechanical,
            electrical, construction, office automation, and energy metering
            services.With a team of highly skilled professionals and a wealth of
            industry experience, we pride ourselves on providing tailored
            solutions that exceed expectations. Our commitment to quality,
            efficiency, and customer satisfaction is the driving force behind
            our success.
          </p>
          <Link
            className="w-32 h-12 bg-segRed rounded-lg flex flex-row space-x-2 items-center justify-center my-2"
            href={"/about-us"}
          >
            <h3 className="text-segGrey text-base leading-relaxed">
              Learn More
            </h3>
            <ArrowRight color="#fff" size={15} />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center w-full">
          {/* Completed Projects */}
          <div className="flex flex-col items-center h-auto w-auto p-5 bg-segBlue">
            <h3 className="text-white text-4xl leading-relaxed font-bold">
              147
            </h3>
            <h6 className="text-white text-[12px] leading-relaxed">
              Completed Projects
            </h6>
          </div>

          {/* Years of experience */}
          <div className="flex flex-col items-center h-auto w-auto p-5 bg-segRed">
            <h3 className="text-white text-4xl leading-relaxed font-bold">
              20+
            </h3>
            <h6 className="text-white text-[12px] leading-relaxed">
              Years of Experience
            </h6>
          </div>
          {/* some features */}
          <div className="border-t-segBlue border-y-[6px] w-1/4 h-auto py-2 px-7 absolute right-56 bg-white">
            <div className="w-auto h-auto flex flex-col space-y-3 items-center mb-6">
              <div className="w-auto h-auto">
                <h3 className="capitalize text-segBlue text-lg font-semibold">
                  We Pioneer Comprehensive Solutions to all Engineering
                  Infrastructures
                </h3>
              </div>
              <div className="w-auto h-auto flex flex-col space-y-2">
                <div className="flex flex-row space-x-3 items-center">
                  <Image
                    src={"/engineer.svg"}
                    width={40}
                    height={10}
                    alt="eng svg"
                  />
                  <div className="flex flex-col space-y-1 items-start">
                    <h4 className="text-xs capitalize text-segBlue leading-relaxed font-medium">
                      General Contract
                    </h4>
                    <p className="text-[8px]">
                      With a team of highly skilled professionals and a wealth
                      of industry experience, we pride ourselves on providing
                      tailored solutions that exceed expectations.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-3 items-center">
                  <Image
                    src={"/ruler.svg"}
                    width={40}
                    height={10}
                    alt="eng svg"
                  />
                  <div className="flex flex-col space-y-1 items-start">
                    <h4 className="text-xs capitalize text-segBlue leading-relaxed font-medium">
                      project planning
                    </h4>
                    <p className="text-[8px]">
                      Meticulous planning is the cornerstone of successful
                      project execution. Our comprehensive project planning
                      approach ensures that every detail is accounted for,
                      mitigating risks and ensuring seamless implementation.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-3 items-center">
                  <Image
                    src={"/measuring-tool.svg"}
                    width={40}
                    height={10}
                    alt="eng svg"
                  />
                  <div className="flex flex-col space-y-1 items-start">
                    <h4 className="text-xs capitalize text-segBlue leading-relaxed font-medium">
                      refurbishment
                    </h4>
                    <p className="text-[8px]">
                      Breathing new life into existing assets is a
                      cost-effective and sustainable solution. Our refurbishment
                      services optimize performance, extend lifespan, and
                      enhance the value of your investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero section small */}
      <div className="w-full h-auto relative">
        <Image
          className="w-full h-auto block lg:hidden"
          src={"/building.png"}
          alt="construction"
          width={1000}
          height={500}
          priority={true}
        />
        <section
          className={cn(
            `absolute top-0 w-full h-auto block md:hidden ${
              navbarOpen
                ? "bg-slate-700 mix-blend-hard-light"
                : "bg-transparent"
            }`
          )}
        >
          <div className="sticky w-full flex p-5 justify-center items-center">
            <div className="flex items-start flex-grow">
              <Image
                src={cn(
                  `${navbarOpen ? "/segadesh-white.png" : "/segadesh.png"}`
                )}
                alt="site_logo"
                height={70}
                width={70}
              />
            </div>

            <div className="flex items-start">
              <button
                className="border rounded-lg outline-none focus:border-black"
                onClick={() => setNavBar((prev) => !prev)}
              >
                {navbarOpen ? (
                  <X
                    className={cn(
                      "h-10 w-10 invert transition-all text-muted-foreground"
                    )}
                  />
                ) : (
                  <Menu
                    className={cn(
                      "h-10 invert w-10 transition-all text-muted-foreground"
                    )}
                  />
                )}
              </button>
            </div>
          </div>

          {navbarOpen ? (
            <div className="w-full">
              <div
                className={cn(
                  "w-full py-10 flex flex-col space-y-5 items-center"
                )}
              >
                {LINKS.map((links) => (
                  <ul key={links.id}>
                    <Link
                      className="text-white hover:py-3 px-10 hover:border hover:rounded-3xl hover:bg-black hover:text-white"
                      href={links.href}
                      onClick={() => setNavBar((prev) => !prev)}
                    >
                      {links.name}
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-transparent"></div>
          )}
        </section>
        <h3 className=" w-[30%] md:w-[25%] h-auto absolute bottom-[9%] md:bottom-3/4 left-2 md:left-28 text-segGrey text-lg leading-relaxed block lg:hidden">
          Engineering Solution for Everyone.
        </h3>
        <div className="w-2/3 h-auto absolute bottom-6 left-28 hidden md:block lg:hidden">
          <p className="text-xs leading-7 text-white text-justify">
            For over 20 years, Segadesh has been at the forefront of delivering
            pioneering engineering solutions across diverse domains. Our
            unwavering commitment to excellence has solidified our position as a
            trusted partner for companies seeking innovative mechanical,
            electrical, construction, office automation, and energy metering
            services.With a team of highly skilled professionals and a wealth of
            industry experience, we pride ourselves on providing tailored
            solutions that exceed expectations. Our commitment to quality,
            efficiency, and customer satisfaction is the driving force behind
            our success.
          </p>
          <Link
            className="w-24 h-8 bg-segRed rounded-lg flex flex-row space-x-2 items-center justify-center my-2"
            href={"/about-us"}
          >
            <h3 className="text-segGrey text-xs leading-relaxed">Learn More</h3>
            <ArrowRight color="#fff" size={15} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
