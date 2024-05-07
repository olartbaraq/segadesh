import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/texts/projects";
import Testimonial from "@/components/Testimonial";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      {/* Hero section large */}
      <HeroSection />

      {/* little about us */}
      <div className="w-full m-4 lg:mt-48 items-center flex flex-row justify-center">
        <div className="w-80 flex flex-row space-x-28 items-center">
          <div className="w-auto flex flex-col space-y-3 items-start">
            <h3 className="uppercase text-segRed text-sm">about us</h3>
            <h6 className="text-black text-2xl leading-relaxed font-semibold">
              With our knowledge, we guarantee success
            </h6>
            <p className="text-segBlue text-xs w-72">
              We pride ourselves on our deep understanding and expertise across
              various domains.
            </p>
            <p className="text-xs w-72">
              Our team comprises seasoned professionals who have honed their
              skills and knowledge through years of experience and continuous
              learning. We leverage this wealth of knowledge to provide
              innovative solutions that drive success for our clients.
            </p>
            <Link
              className="w-28 h-8 bg-segRed rounded-lg flex flex-row space-x-2 items-center justify-center my-2"
              href={"/about-us"}
            >
              <h3 className="text-segGrey text-[10px] leading-relaxed">
                Learn More
              </h3>
              <ArrowRight color="#fff" size={10} />
            </Link>
          </div>
        </div>

        <div className="relative w-auto h-auto p-6 mx-10 hidden md:block">
          <Image
            className="w-auto h-auto"
            src={"/img1.png"}
            alt="project 1"
            width={250}
            height={200}
            priority={true}
          />
          <Image
            className="absolute top-40 right-24 z-10 w-auto h-auto"
            src={"/img2.png"}
            alt="project 2"
            width={250}
            height={200}
            priority={true}
          />
        </div>
      </div>

      {/* some peripherals */}
      <div className="w-full flex flex-row items-center mt-10 md:mt-56 mb-10">
        <Image
          className="hidden lg:block lg:w-[870px]"
          src={"/irons.png"}
          alt="iron bars"
          width={550}
          height={200}
          priority={true}
        />

        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="relative">
            <Image
              className="w-80 md:w-72 lg:w-80 h-[390px] lg:h-[368px]"
              src={"/industrial.png"}
              alt="project 2"
              width={600}
              height={1000}
              priority={true}
            />
            <div className="w-80 md:w-72 lg:w-80 h-[390px] lg:h-[368px] bg-segBlue opacity-90 mix-blend-normal absolute top-0 left-0 p-10">
              <h2 className="text-3xl text-white font-bold my-5">
                Research & Analysis
              </h2>
              <p className="text-sm leading-relaxed text-segGrey w-[200px]">
                We employ rigorous methodologies and leverage cutting-edge tools
                to gather and analyze data from various sources, uncovering
                insights that drive informed decision-making.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="w-80 md:w-72 lg:w-80 h-[390px] lg:h-[368px]"
              src={"/crane.png"}
              alt="crane"
              width={600}
              height={1000}
              priority={true}
            />
            <div className="w-80 md:w-72 lg:w-80 h-[390px] lg:h-[368px] bg-segRed opacity-90 mix-blend-normal absolute top-0 left-0 p-10">
              <h2 className="text-3xl text-white font-bold my-5">
                Industry Development
              </h2>
              <p className="text-sm leading-relaxed text-segGrey w-[200px]">
                By staying ahead of the curve, we empower our clients to
                capitalize on emerging opportunities, optimize their operations,
                and maintain a competitive edge in their respective industries.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="w-80 md:w-72 lg:w-80 h-[390px] lg:h-[368px]"
              src={"/houses.png"}
              alt="houses"
              width={600}
              height={1000}
              priority={true}
            />
            <div className="w-80 md:w-72 lg:w-80 h-[390px] lg:h-[368px] bg-segBlue opacity-90 mix-blend-normal absolute top-0 left-0 p-10">
              <h2 className="text-3xl text-white font-bold my-5">
                Production Launch
              </h2>
              <p className="text-sm leading-relaxed text-segGrey w-[200px]">
                From resource allocation and supply chain optimization to
                rigorous testing and training, we leave no stone unturned.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Works */}
      <div className="w-full flex items-center justify-center my-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="uppercase text-segRed text-sm">our works</h2>
          <h6 className="font-bold text-2xl leading-relaxed text-black">
            Our Special Projects
          </h6>

          {/* grid showing all projects */}
          <div className="w-full my-5 grid grid-rows-1 md:grid-cols-3 gap-3 place-self-center place-items-center">
            <div className="row-span-2 relative">
              <Image
                className="h-[335px] w-auto"
                src={"/industrial.png"}
                alt="building"
                height={300}
                width={200}
                priority={true}
              />

              <div className="absolute top-12 left-4 opacity-0 hover:opacity-90 border bg-segGrey w-40 h-60 justify-center items-center flex flex-col space-y-2">
                <h3 className="text-sm font-medium leading-relaxed text-segBlue">
                  Witty Industries
                </h3>
                <h3 className="text-sm font-medium leading-relaxed text-segRed">
                  Construction
                </h3>
              </div>
            </div>
            {PROJECTS?.map((project) => (
              <div key={project.id} className="row-span-1 relative">
                <Image
                  className="w-auto h-auto"
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={200}
                  priority={true}
                />

                <div className="absolute top-3 left-4 opacity-0 hover:opacity-90 border bg-segGrey w-40 h-36 justify-center items-center flex flex-col space-y-2">
                  <h3 className="text-sm font-medium leading-relaxed text-segBlue">
                    {project.company}
                  </h3>
                  <h3 className="text-sm font-medium leading-relaxed text-segRed">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Address */}
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          className="w-full h-20 md:h-72"
          src={"/map.png"}
          alt="our address"
          height={100}
          width={1000}
          priority={true}
        />
        <div className="w-full flex flex-col md:flex-row items-start justify-center mt-3">
          <div className="flex flex-col space-y-1 w-60 p-2 border-t-4 border-t-segRed">
            <h2 className="uppercase text-black text-xs leading-relaxed">
              company address
            </h2>
            <p className="font-bold text-segBlue leading-relaxed text-base">
              Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
            </p>
          </div>
          <hr className="h-20 w-[2px] bg-segRed m-6 hidden md:block" />
          <div className="flex flex-col space-y-1 w-60 p-2 border-t-4 border-t-segRed">
            <h2 className="uppercase text-black text-xs leading-relaxed">
              company phone
            </h2>
            <p className="font-bold text-segBlue leading-relaxed text-base">
              +2348173054765
            </p>
          </div>
          <hr className="h-20 w-[2px] bg-segRed m-6 hidden md:block" />
          <div className="flex flex-col space-y-1 w-60 p-2 border-t-4 border-t-segRed">
            <h2 className="uppercase text-black text-xs leading-relaxed">
              company email
            </h2>
            <p className="font-bold text-segBlue leading-relaxed text-base">
              segadesh@yahoo.com
            </p>
          </div>
          <hr className="h-20 w-[2px] bg-segRed m-6 hidden md:block" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full flex items-center justify-center my-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="uppercase text-segRed text-sm">testimonials</h2>
          <h6 className="font-bold text-2xl leading-relaxed text-black">
            Our Client Say
          </h6>

          {/* Testimonial carousels */}
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
