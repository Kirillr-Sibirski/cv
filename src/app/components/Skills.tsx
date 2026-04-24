"use client";

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
  sectionTitle = "Core Stack",
  categoryTitles,
}: SkillsProps) {
  const resolvedCategories =
    categories ??
    (skills
      ? [
          {
            id: "blockchain",
            title: categoryTitles?.blockchain ?? "Blockchain",
            skills: skills.blockchain,
          },
          {
            id: "frontend",
            title: categoryTitles?.frontend ?? "Frontend",
            skills: skills.frontend,
          },
          {
            id: "focus",
            title: categoryTitles?.focus ?? "Focus Areas",
            skills: skills.focus,
          },
        ]
      : []);

  return (
    <Section className={className}>
      <h2 className="resume-section-title font-bold mb-2" id="skills-section">
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
