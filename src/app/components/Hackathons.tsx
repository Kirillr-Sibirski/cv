"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type HackathonProject = (typeof RESUME_DATA)["hackathons"][number];

function StackTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-2 flex list-none flex-wrap gap-1 p-0 print:mt-1 print:gap-0.5">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            variant="secondary"
            className="align-middle"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

function HackathonItem({ project }: { project: HackathonProject }) {
  return (
    <article className="rounded-lg border border-border p-3 transition-colors hover:border-foreground/25 print:border-border print:p-2">
      <div className="flex items-start justify-between gap-3 print:gap-2">
        <div className="space-y-1">
          <h3 className="resume-body font-semibold leading-tight">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {project.projectName}
            </a>
          </h3>
          <p className="resume-details font-mono text-foreground/70">
            <a
              href={project.hackathonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
            >
              {project.hackathon}
            </a>{" "}
            · {project.role}
          </p>
        </div>
        <Badge
          className="align-middle"
          variant="outline"
        >
          {project.achievement}
        </Badge>
      </div>
      <p className="resume-details mt-2 text-pretty font-mono text-foreground/70 print:mt-1">
        {project.description}
      </p>
      <StackTags tags={project.techStack} />
    </article>
  );
}

export function Hackathons() {
  return (
    <Section className="print:space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="resume-section-title font-bold" id="hackathon-projects">
          hackathon projects
        </h2>
        <p className="resume-details font-mono text-foreground/50 print:hidden">
          15+ hackathons. these are the ones that placed.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-3 print:hidden md:grid-cols-2"
        role="feed"
        aria-labelledby="hackathon-projects"
      >
        {RESUME_DATA.hackathons.map((project) => (
          <HackathonItem
            key={`${project.hackathon}-${project.projectName}`}
            project={project}
          />
        ))}
      </div>

      {/* Print: one line each. The cards are for reading, this is for the resume. */}
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
