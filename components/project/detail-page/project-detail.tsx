import type { Project } from "@/types/project";

import ProjectCTA from "./project-cta";
import ProjectEquipment from "./project-equipment";
import ProjectGallery from "./project-gallery";
import ProjectHeader from "./project-header";
import ProjectOverview from "./project-overview";
// import ProjectRelated from "./project-related";
import ProjectResults from "./project-results";
import ProjectScope from "./project-scope";
import ProjectTimeline from "./project-timeline";

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  return (
    <>
      <ProjectHeader project={project} />
      <ProjectOverview project={project} />
      <ProjectGallery project={project} />
      <ProjectScope project={project} />
      {/* <ProjectEquipment project={project} /> */}
      {/* <ProjectTimeline project={project} /> */}
      {/* <ProjectResults project={project} /> */}
      {/* <ProjectRelated currentProject={project} /> */}
      <ProjectCTA />
    </>
  );
}
