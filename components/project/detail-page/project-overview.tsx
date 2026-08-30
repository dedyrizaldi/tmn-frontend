import { FileText } from "lucide-react";

import Container from "@/components/common/container/container";

import Section from "@/components/common/section/section";

import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  /**
   * =========================================================
   * PROJECT DATE
   * =========================================================
   *
   * project_date dapat bernilai null.
   */
  const projectDate = project.project_date
    ? new Date(project.project_date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "-";

  /**
   * =========================================================
   * PROJECT LOCATION
   * =========================================================
   *
   * location dapat bernilai null.
   */
  const location = project.location ?? "-";

  /**
   * =========================================================
   * PROJECT CATEGORY
   * =========================================================
   *
   * category dapat bernilai null.
   */
  const category = project.category?.name ?? "Uncategorized";

  return (
    <Section className="bg-[#F8FAFC] py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* =================================================
              OVERVIEW
          ================================================= */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#156CFF]/10 text-[#156CFF]">
                <FileText size={26} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#04162E]">
                  Project Overview
                </h2>

                <p className="mt-1 text-slate-500">
                  General information about this project.
                </p>
              </div>
            </div>

            {/* <div
              className="prose prose-slate mt-8 max-w-none"
              dangerouslySetInnerHTML={{
                __html: project.description || "",
              }}
            /> */}
          </div>

          {/* =================================================
              STATISTICS
          ================================================= */}

          <div className="grid gap-5 sm:grid-cols-2">
            <StatCard title="Client" value={project.client || "-"} />

            <StatCard title="Location" value={location} />

            <StatCard title="Category" value={category} />

            <StatCard title="Project Date" value={projectDate} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * ===========================================================
 * STAT CARD
 * ===========================================================
 */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>

      <p className="mt-4 text-xl font-bold text-[#04162E]">{value}</p>
    </div>
  );
}
