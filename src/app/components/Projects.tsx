"use client";

import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";

type ProjectTag = { label: string; url: string } | string;
type ProjectTags = readonly ProjectTag[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
      </a>
      <div
        className="resume-details hidden font-mono underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0 print:mt-1 print:gap-0.5"
      aria-label="technologies used"
    >
      {tags.map((tag) => (
        <li key={typeof tag === "string" ? tag : tag.label}>
          <Badge
            className="resume-body resume-body px-1 py-0 print:px-1 print:py-0 print:leading-tight"
            variant="secondary"
          >
            {typeof tag === "string" ? (
              tag
            ) : (
              <a
                href={tag.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {tag.label}
              </a>
            )}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-2 print:p-1.5"
      role="article"
    >
      <CardHeader className="space-y-1 p-2 print:p-1">
        {/* <div className="space-y-0.5"> */}
        <CardTitle className="resume-body">
          <ProjectLink title={title} link={link} />
        </CardTitle>
        <CardDescription
          className="resume-details text-pretty font-mono text-foreground/80"
          aria-label="project description"
        >
          {description}
        </CardDescription>
        {/* </div> */}
      </CardHeader>
      <CardContent className="mt-auto p-1 print:p-0.5">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: readonly {
    title: string;
    projectUrl?: string;
    techStack: ProjectTags;
    description: string;
  }[];
  title?: string;
}

export function Projects({
  projects,
  title = "other experience",
}: ProjectsProps) {
  return (
    <Section className="print:space-y-2 print:pt-0">
      <h2 className="resume-section-title font-bold" id="side-projects">
        {title}
      </h2>
      <div
        className="grid grid-cols-1 gap-2 print:gap-1.5"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article key={project.title} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.projectUrl}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
