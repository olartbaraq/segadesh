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
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ align: "center" }}
      >
        <CarouselContent className="w-[1000px]">
          {TESTIMONIALS.map((eachTest) => (
            <CarouselItem key={eachTest.id}>
              <Card>
                <CardContent>
                  <div className="w-auto flex flex-row space-x-3 items-center">
                    <Image
                      className="w-64 h-auto"
                      src={eachTest.image}
                      alt={eachTest.image}
                      height={200}
                      width={100}
                      priority={true}
                    />
                    <div className="flex flex-col w-[700px] p-4 items-start space-y-2">
                      <p className="text-black text-sm leading-relaxed">
                        {eachTest.comment}
                      </p>
                      <h2 className="text-2xl text-segBlue leading-relaxed font-semibold">
                        {eachTest.name}
                      </h2>
                      <h3 className="text-lg text-segRed leading-relaxed font-medium">
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
