import { Section } from "@/components/ui/section";

import { SectionHeading } from "./SectionHeading";

type SkillLink = { label: string; url: string };
type SkillGroup = {
  id: string;
  title: string;
  skills: readonly SkillLink[];
};

/**
 * Rows rather than pill grids: a label rail on the left, slash-separated
 * links on the right. Same information, far less furniture.
 */
export function Skills({
  categories,
  sectionTitle = "tech stack",
  index,
  id,
}: {
  categories: readonly SkillGroup[];
  sectionTitle?: string;
  index: string;
  id: string;
}) {
  return (
    <Section>
      <SectionHeading index={index} id={id}>
        {sectionTitle}
      </SectionHeading>

      <div className="space-y-2 print:space-y-1" aria-labelledby={id}>
        {categories.map((category) => (
          <div
            key={category.id}
            className="grid gap-x-6 gap-y-0.5 md:grid-cols-[8.5rem_1fr]"
          >
            <h3 className="resume-details font-mono text-foreground/50">
              {category.title}
            </h3>
            <ul className="flex list-none flex-wrap gap-x-3 gap-y-1 p-0">
              {category.skills.map((skill) => (
                <li key={skill.label}>
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-details font-mono text-foreground/70 underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40"
                  >
                    {skill.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
