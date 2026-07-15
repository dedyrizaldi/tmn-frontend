import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import ProjectDetail from "@/components/project/detail-page/project-detail";
import { projectData } from "@/components/project/project.data";

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projectData.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projectData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
