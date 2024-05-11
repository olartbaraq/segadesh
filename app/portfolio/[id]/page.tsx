import { BreadcrumbWithCustomSeparator } from "@/components/SeparateLink";
import { PORTFOLIOS } from "@/texts/projects";
import Image from "next/image";

type Props = {
  params: {
    id: number;
  };
};

export default function ProjectDetails({ params: { id } }: Props) {
  const project = PORTFOLIOS.find((project) => project.id == id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-full overflow-x-hidden">
      {/* Contact Heading */}
      <div className="w-full h-auto relative">
        <Image
          className="w-full h-auto"
          src={project.imageHeader}
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
            <BreadcrumbWithCustomSeparator
              pageName={project.title}
              showSecond={true}
            />
          </h5>
        </div>
      </div>

      {/* The whole project details */}

      <div className="mx-5 md:mx-auto my-10 p-auto flex items-start justify-start space-x-2 md:space-x-16 w-full md:max-w-screen-md">
        {/* Frist Div */}
        <div className="w-1/2 h-auto flex flex-col space-y-3 items-center">
          <Image
            src={project.bigImage}
            alt={project.category}
            width={300}
            height={300}
            priority={true}
            className="w-full h-auto"
          />

          <p className="w-full text-black text-[10px] md:text-sm leading-relaxed text-justify">
            {project.writeUp}
          </p>

          <div className=" w-full grid grid-cols-2 gap-2 place-self-center place-content-center place-items-center">
            {project.otherImages.map((eachImage) => (
              <Image
                key={eachImage.id}
                src={eachImage.image}
                alt={eachImage.image}
                height={100}
                width={200}
                priority={true}
              />
            ))}
          </div>
        </div>

        {/* Second Div */}
        <div className="w-auto flex flex-col space-y-1 items-start justify-start">
          <h2 className="text-black text-xl font-semibold leading-relaxed">
            {project.location}
          </h2>

          <h4 className="text-black font-medium leading-relaxed">
            Project Info
          </h4>
          <div className="w-full flex space-x-2 items-center">
            <h3 className="font-medium text-black text-[10px] md:text-sm">
              Client:
            </h3>
            <h3 className="text-black font-thin text-[8px] md:text-xs">
              {project.company}
            </h3>
          </div>
          <div className="w-full flex space-x-2 items-center">
            <h3 className="font-medium text-black text-[10px] md:text-sm">
              Category:
            </h3>
            <h3 className="text-black font-thin text-[8px] md:text-xs">
              {project.category}
            </h3>
          </div>
          <div className="w-full flex space-x-2 items-center">
            <h3 className="font-medium text-black text-[10px] md:text-sm">
              Completed on:
            </h3>
            <h3 className="text-black font-thin text-[8px] md:text-xs">
              {project.completed}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
