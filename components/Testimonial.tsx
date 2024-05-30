"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/texts/testimonials";

const Testimonial = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnLastSnap: false })
  );
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ align: "center" }}
      >
        <CarouselContent className="w-full md:w-[1000px]">
          {TESTIMONIALS.map((eachTest) => (
            <CarouselItem key={eachTest.id}>
              <Card>
                <CardContent>
                  <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 items-center justify-center">
                    {/* <Image
                      className="w-48 md:w-64 h-auto"
                      src={eachTest.image}
                      alt={eachTest.image}
                      height={300}
                      width={200}
                      priority={true}
                    /> */}
                    <div className="flex flex-col w-full md:w-[500px] lg:w-[700px] p-4 items-center justify-center md:items-start space-y-2">
                      <p className="text-black text-xs md:text-sm leading-relaxed max-w-72 md:max-w-screen-md text-center">
                        {eachTest.comment}
                      </p>
                      <h2 className="text-sm md:text-2xl self-center text-segBlue leading-relaxed font-semibold ">
                        {eachTest.name}
                      </h2>
                      <h3 className="md:text-lg text-segRed leading-relaxed font-medium self-center">
                        {eachTest.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
