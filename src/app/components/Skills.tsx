"use client";

import { Section } from "@/components/ui/section";
import { ResumeData } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type SkillCategory = ResumeData["skills"]["blockchain"];
type Skills = ResumeData["skills"];

interface SkillsListProps {
  title: string;
  skills: SkillCategory;
  className?: string;
}

function SkillsList({ title, skills, className }: SkillsListProps) {
  return (
    <div className="mb-4 last:mb-0">
      <h3 className="resume-body font-semibold">{title}</h3>
      <ul
        className={cn("flex list-none flex-wrap gap-1 p-0", className)}
        aria-label={`List of ${title.toLowerCase()}`}
      >
        {skills.map((skill) => (
          <li key={skill.label}>
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-transparent bg-primary/80 px-2 py-0.5 font-mono resume-details leading-normal text-primary-foreground transition-colors hover:bg-primary/60 print:px-2 print:py-0.5"
              aria-label={`Skill: ${skill.label}`}
            >
              {skill.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
  titles?: {
    blockchain: string;
    frontend: string;
    focus: string;
  };
}

export function Skills({
  skills,
  className,
  titles = {
    blockchain: "Blockchain",
    frontend: "Frontend",
    focus: "Focus Areas",
  },
}: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="resume-section-title font-bold mb-2" id="skills-section">
        Core Stack
      </h2>
      <SkillsList title={titles.blockchain} skills={skills.blockchain} />
      <SkillsList title={titles.frontend} skills={skills.frontend} />
      <SkillsList title={titles.focus} skills={skills.focus} />
    </Section>
  );
}
