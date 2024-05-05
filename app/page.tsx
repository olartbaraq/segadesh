import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/texts/projects";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
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
          <div className="flex flex-col items-center h-auto w-auto p-5 bg-segBlue">
            <h3 className="text-white text-4xl leading-relaxed font-bold">
              147
            </h3>
            <h6 className="text-white text-[12px] leading-relaxed">
              Completed Projects
            </h6>
          </div>
          <div className="flex flex-col items-center h-auto w-auto p-5 bg-segRed">
            <h3 className="text-white text-4xl leading-relaxed font-bold">
              20+
            </h3>
            <h6 className="text-white text-[12px] leading-relaxed">
              Years of Experience
            </h6>
          </div>
          <div className="border-t-segBlue border-y-[6px] w-1/4 h-auto py-2 px-7 absolute right-44 bg-white">
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
                      With a team of highly skilled professionals and a wealth
                      of industry experience, we pride ourselves on providing
                      tailored solutions that exceed expectations.
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
                      With a team of highly skilled professionals and a wealth
                      of industry experience, we pride ourselves on providing
                      tailored solutions that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto block lg:hidden">
        <Image
          className="w-full h-auto"
          src={"/building.png"}
          alt="construction"
          width={1000}
          height={500}
          priority={true}
        />
      </div>

      <div className="w-full m-4 lg:mt-48 items-center flex flex-row justify-center">
        <div className="w-80 flex flex-row space-x-28 items-center">
          <div className="w-auto flex flex-col space-y-3 items-start">
            <h3 className="uppercase text-segRed text-sm">about us</h3>
            <h6 className="text-black text-2xl leading-relaxed font-semibold">
              With our knowledge, we guarantee success
            </h6>
            <p className="text-segBlue text-xs w-72">
              Fuehe hdjd hdjd sjueue. Msbdh hdhd eheh behehe
            </p>
            <p className="text-xs w-72">
              gdgd djdjd hdhdjdn dhdbbdid jdjc jdkcndije jddninbdq jncbjbnejde
              jcndjnedie jndjdnednjdie jdjendeideq jdnjnddied jnjnsnejde
              jdnjndend jbnjdendue jbdjednjqend jbndkjdnjednqed jj ajdqdu
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
            src={"/img1.png"}
            alt="project 1"
            width={250}
            height={200}
            priority={true}
          />
          <Image
            className="absolute top-40 right-24 z-10"
            src={"/img2.png"}
            alt="project 2"
            width={250}
            height={200}
            priority={true}
          />
        </div>
      </div>

      <div className="w-full flex flex-row items-center mt-56 mb-10">
        <Image
          src={"/irons.png"}
          alt="iron bars"
          width={550}
          height={200}
          priority={true}
        />

        <div className="w-auto flex flex-row items-start">
          <div className="relative">
            <Image
              className="w-72 h-[390px]"
              src={"/industrial.png"}
              alt="project 2"
              width={600}
              height={1000}
              priority={true}
            />
            <div className="w-72 h-[390px] bg-segBlue opacity-90 mix-blend-normal absolute top-0 left-0 p-10">
              <h2 className="text-3xl text-white font-bold my-5">
                Research & Analysis
              </h2>
              <p className="text-sm leading-relaxed text-segGrey">
                Nullam ghfeow jheiej ijdwdj wswjsj uswsh jcdoekd wueijd ididjd
                isdidnidn
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="w-72 h-[390px]"
              src={"/crane.png"}
              alt="crane"
              width={600}
              height={1000}
              priority={true}
            />
            <div className="w-72 h-[390px] bg-segRed opacity-90 mix-blend-normal absolute top-0 left-0 p-10">
              <h2 className="text-3xl text-white font-bold my-5">
                Industry Development
              </h2>
              <p className="text-sm leading-relaxed text-segGrey">
                Nullam ghfeow jheiej ijdwdj wswjsj uswsh jcdoekd wueijd ididjd
                isdidnidn
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="w-72 h-[390px]"
              src={"/houses.png"}
              alt="houses"
              width={600}
              height={1000}
              priority={true}
            />
            <div className="w-72 h-[390px] bg-segBlue opacity-90 mix-blend-normal absolute top-0 left-0 p-10">
              <h2 className="text-3xl text-white font-bold my-5">
                Production Launch
              </h2>
              <p className="text-sm leading-relaxed text-segGrey">
                Nullam ghfeow jheiej ijdwdj wswjsj uswsh jcdoekd wueijd ididjd
                isdidnidn
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
          <div className="w-full my-5 grid grid-cols-3 gap-3 place-self-center ">
            <div className="row-span-2">
              <Image
                className="h-[350px]"
                src={"/industrial.png"}
                alt="building"
                height={300}
                width={200}
                priority={true}
              />
            </div>
            {PROJECTS?.map((project) => (
              <div key={project.id} className="row-span-1">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={200}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Address */}
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          className="w-full h-72"
          src={"/map.png"}
          alt="our address"
          height={100}
          width={1000}
          priority={true}
        />
        <div className="w-full flex flex-row items-start">
          <div className="flex flex-col space-y-1 w-60 p-2 border-t-4 border-t-segRed">
            <h2 className="uppercase text-black text-xs leading-relaxed">
              company address
            </h2>
            <p className="font-bold text-segBlue leading-relaxed text-base">
              Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
            </p>
          </div>
          <hr className="h-20 w-[2px] bg-segRed m-6" />
          <div className="flex flex-col space-y-1 w-60 p-2 border-t-4 border-t-segRed">
            <h2 className="uppercase text-black text-xs leading-relaxed">
              company phone
            </h2>
            <p className="font-bold text-segBlue leading-relaxed text-base">
              +2348166893113
            </p>
          </div>
          <hr className="h-20 w-[2px] bg-segRed m-6" />
          <div className="flex flex-col space-y-1 w-60 p-2 border-t-4 border-t-segRed">
            <h2 className="uppercase text-black text-xs leading-relaxed">
              company email
            </h2>
            <p className="font-bold text-segBlue leading-relaxed text-base">
              segadesh@gmail.com
            </p>
          </div>
          <hr className="h-20 w-[2px] bg-segRed m-6" />
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
