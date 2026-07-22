import { FileText } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import type { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectScope({ project }: Props) {
  return (
    <Section className="bg-white py-16">
      <Container>
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#156CFF]/10 text-[#156CFF]">
                <FileText size={26} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#156CFF]">
                  PROJECT DESCRIPTION
                </p>

                <h2 className="mt-2 text-4xl font-bold text-[#04162E]">
                  Scope of Project
                </h2>
              </div>
            </div>

            <div
              className="prose prose-slate mt-10 max-w-none"
              dangerouslySetInnerHTML={{
                __html: project.description,
              }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
