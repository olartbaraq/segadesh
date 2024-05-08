import { PORTFOLIOS } from "@/texts/projects";

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
    <div>
      <h1>{project.title}</h1>
      <p>{project.company}</p>
      {/* Render other project details */}
    </div>
  );
}
