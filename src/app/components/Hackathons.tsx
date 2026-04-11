"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { ResumeData } from "@/data/resume-data";

type HackathonProject = ResumeData["hackathons"][number];

function StackTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-2 flex list-none flex-wrap gap-1 p-0 print:mt-1 print:gap-0.5">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            variant="secondary"
            className="px-1.5 py-0.5 resume-details print:px-1 print:py-0"
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
    <article className="rounded-lg border border-border/70 p-3 print:p-2">
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
          <p className="font-mono resume-details text-foreground/70">
            <a
              href={project.hackathonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground"
            >
              {project.hackathon}
            </a>{" "}
            · {project.role}
          </p>
        </div>
        <Badge
          className="resume-details leading-tight print:px-1 print:py-0"
          variant="outline"
        >
          {project.achievement}
        </Badge>
      </div>
      <p className="mt-2 font-mono resume-details text-foreground/80 text-pretty print:mt-1">
        {project.description}
      </p>
      <StackTags tags={project.techStack} />
    </article>
  );
}

export function Hackathons({
  projects,
  title = "Hackathon Projects",
  intro,
  countLabel,
}: {
  projects: ResumeData["hackathons"];
  title?: string;
  intro?: string;
  countLabel?: string;
}) {
  return (
    <Section className="print:break-inside-avoid print:space-y-2">
      <div className="flex items-end justify-between gap-3">
        <h2 className="resume-section-title font-bold" id="hackathon-projects">
          {title}
        </h2>
        {countLabel && (
          <p className="font-mono resume-details text-foreground/60 print:hidden">
            {countLabel}
          </p>
        )}
      </div>

      {intro && (
        <p className="font-mono resume-details text-foreground/80 print:hidden">
          {intro}
        </p>
      )}

      <div
        className="grid grid-cols-1 gap-2 print:grid-cols-2 print:gap-1.5 md:grid-cols-2"
        role="feed"
        aria-labelledby="hackathon-projects"
      >
        {projects.map((project) => (
          <HackathonItem
            key={`${project.hackathon}-${project.projectName}`}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}

export default Hackathons;
