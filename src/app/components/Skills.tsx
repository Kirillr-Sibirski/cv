"use client";

import { badgeVariants } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type SkillLink = {
  label: string;
  url: string;
};
type SkillCategory = readonly SkillLink[];
type Skills = {
  blockchain: SkillCategory;
  frontend: SkillCategory;
  focus: SkillCategory;
};
type SkillGroup = {
  id: string;
  title: string;
  skills: SkillCategory;
};

interface SkillsListProps {
  title: string;
  skills: SkillCategory;
  className?: string;
}

function SkillsList({ title, skills, className }: SkillsListProps) {
  return (
    <div className="mb-4 last:mb-0 print:mb-1">
      <h3 className="resume-details font-mono text-foreground/50">{title}</h3>
      <ul
        className={cn("flex list-none flex-wrap gap-1 p-0", className)}
        aria-label={`list of ${title.toLowerCase()}`}
      >
        {skills.map((skill) => (
          <li key={skill.label}>
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className={badgeVariants({ variant: "secondary" })}
              aria-label={`skill: ${skill.label}`}
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
  skills?: Skills;
  categories?: readonly SkillGroup[];
  className?: string;
  sectionTitle?: string;
  categoryTitles?: {
    blockchain?: string;
    frontend?: string;
    focus?: string;
  };
}

export function Skills({
  skills,
  categories,
  className,
  sectionTitle = "core stack",
  categoryTitles,
}: SkillsProps) {
  const resolvedCategories =
    categories ??
    (skills
      ? [
          {
            id: "blockchain",
            title: categoryTitles?.blockchain ?? "blockchain",
            skills: skills.blockchain,
          },
          {
            id: "frontend",
            title: categoryTitles?.frontend ?? "frontend",
            skills: skills.frontend,
          },
          {
            id: "focus",
            title: categoryTitles?.focus ?? "focus areas",
            skills: skills.focus,
          },
        ]
      : []);

  return (
    <Section className={className}>
      <h2 className="resume-section-title mb-2 font-bold" id="skills-section">
        {sectionTitle}
      </h2>
      {resolvedCategories.map((category) => (
        <SkillsList
          key={category.id}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </Section>
  );
}
