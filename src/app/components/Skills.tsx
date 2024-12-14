"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type SkillCategory = readonly string[];
type Skills = {
  softSkills: SkillCategory;
  softwareDevelopment: SkillCategory;
  engineering: SkillCategory;
};

interface SkillsListProps {
  title: string;
  skills: SkillCategory;
  className?: string;
}

function SkillsList({ title, skills, className }: SkillsListProps) {
  return (
    <div className="mb-4 last:mb-0">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <ul
        className={cn("flex list-none flex-wrap gap-1 p-0", className)}
        aria-label={`List of ${title.toLowerCase()}`}
      >
        {skills.map((skill) => (
          <li key={skill}>
            <Badge 
              className="px-1.5 py-0.5 text-[10px] leading-tight print:text-[8px] print:px-1 print:py-0" 
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
      <h2 className="text-xl font-bold mb-4" id="skills-section">
        Skills
      </h2>
      <SkillsList 
        title="Software Development" 
        skills={skills.softwareDevelopment} 
        aria-labelledby="skills-section" 
      />
      <SkillsList 
        title="Engineering" 
        skills={skills.engineering} 
        aria-labelledby="skills-section" 
      />
      <SkillsList 
        title="Soft Skills" 
        skills={skills.softSkills} 
        aria-labelledby="skills-section" 
      />
    </Section>
  );
}
