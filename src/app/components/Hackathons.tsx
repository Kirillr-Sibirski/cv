"use client";

import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

import { SectionHeading } from "./SectionHeading";

type HackathonProject = (typeof RESUME_DATA)["hackathons"][number];

function Item({ project }: { project: HackathonProject }) {
  return (
    <article className="grid gap-x-6 gap-y-0.5 border-t border-border pt-2.5 md:grid-cols-[8.5rem_1fr]">
      <div className="flex flex-col gap-y-0.5">
        <a
          href={project.hackathonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-details font-mono text-foreground/50 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-foreground/40"
        >
          {project.hackathon}
        </a>
        <span className="resume-details font-mono text-foreground">
          {project.achievement}
        </span>
      </div>

      <div>
        <h3 className="resume-body font-semibold">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {project.projectName}
          </a>
        </h3>
        <p className="resume-details mt-0.5 text-pretty font-mono text-foreground/70">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function Hackathons({ index, id }: { index: string; id: string }) {
  return (
    <Section className="print:space-y-2">
      <SectionHeading
        index={index}
        id={id}
        aside={
          <span className="resume-details font-mono text-foreground/50 print:hidden">
            15+ entered, these placed
          </span>
        }
      >
        hackathons
      </SectionHeading>

      <div className="space-y-2.5 print:hidden" aria-labelledby={id}>
        {RESUME_DATA.hackathons.map((project) => (
          <Item
            key={`${project.hackathon}-${project.projectName}`}
            project={project}
          />
        ))}
      </div>

      {/* Print: one line each. The entries above are for reading. */}
      <ul className="hidden list-none p-0 print:block">
        {RESUME_DATA.hackathons.map((project) => (
          <li
            key={`print-${project.hackathon}-${project.projectName}`}
            className="resume-details font-mono text-foreground/70"
          >
            <span className="font-semibold text-foreground">
              {project.projectName}
            </span>{" "}
            · {project.description} ({project.hackathon},{" "}
            {project.achievement})
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Hackathons;
