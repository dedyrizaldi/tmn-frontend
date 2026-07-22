import { notFound } from "next/navigation";

import ProjectDetail from "@/components/project/detail-page/project-detail";
import { getProjectBySlug } from "@/services/project.service";

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  let project;

  try {
    project = await getProjectBySlug(slug);
  } catch (error) {
    console.error("Failed to load project:", error);
    notFound();
  }

  return <ProjectDetail project={project} />;
}
