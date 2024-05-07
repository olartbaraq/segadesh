import { BreadcrumbWithCustomSeparator } from "@/components/SeparateLink";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      <div className="w-full h-auto relative">
        <Image
          className="w-full h-auto"
          src={"/Rectangle.png"}
          alt="about us image"
          height={70}
          width={800}
          priority={true}
        />

        <div className="absolute top-1/3 left-[20%] flex flex-col space-y-1 items-start">
          <h2 className="capitalize text-white text-3xl leading-relaxed">
            about us
          </h2>
          <h5 className="text-white text-xl leading-relaxed">
            <BreadcrumbWithCustomSeparator pageName="About Us" />
          </h5>
        </div>

        <div className="border-t-segRed border-t-4 w-64 h-auto flex flex-col space-y-2 items-start px-5 py-10 bg-white absolute top-1/4 right-28 opacity-70">
          <h6 className="uppercase text-xs text-black leading-relaxed">
            call us today
          </h6>
          <h2 className="font-bold text-xl leading-relaxed text-segBlue">
            +234 8166893113
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
