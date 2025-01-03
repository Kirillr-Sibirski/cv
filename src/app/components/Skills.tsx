"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type SkillCategory = readonly string[];
type Skills = {
  soft: SkillCategory;
  tech: SkillCategory;
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
          <li key={skill}>
            <Badge 
              className="px-2 py-0.5 resume-details leading-normal print:resume-details print:px-2 print:py-0.5" 
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="resume-section-title font-bold mb-2" id="skills-section">
        Skills
      </h2>
      <SkillsList 
        title="Engineering" 
        skills={skills.tech} 
        aria-labelledby="skills-section" 
      />
      <SkillsList 
        title="Soft Skills" 
        skills={skills.soft} 
        aria-labelledby="skills-section" 
      />
    </Section>
  );
}