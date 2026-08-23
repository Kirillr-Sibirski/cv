"use client";

import { Section } from "@/components/ui/section";
import { Curriculum, type CurriculumData } from "./Curriculum";
import { SectionHeading } from "./SectionHeading";

export type Institution = {
  readonly school: string;
  readonly schoolUrl: string;
  readonly degree: string;
  readonly degreeUrl: string;
  readonly start: string;
  readonly end: string;
  readonly gpa?: string;
  /** One-line results summary, used where a full breakdown is overkill. */
  readonly summary?: string;
  /** Expandable course breakdown; screen only. */
  readonly curriculum?: CurriculumData;
};

function SchoolLink({ label, url }: { label: string; url: string }) {
  if (!url) return <>{label}</>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground"
    >
      {label}
    </a>
  );
}

function Entry({ item }: { item: Institution }) {
  return (
    <article className="grid gap-x-6 gap-y-1 border-t border-border pt-3 first:border-t-0 first:pt-0 print:break-inside-avoid print:pt-2 md:grid-cols-[8.5rem_1fr]">
      <div className="flex flex-col gap-y-0.5">
        <span className="resume-details font-mono tabular-nums text-foreground/50">
          {item.start} to {item.end}
        </span>
        {item.gpa && (
          <span className="resume-details font-mono text-foreground/70">
            GPA {item.gpa}
          </span>
        )}
        {item.summary && (
          <span className="resume-details font-mono text-foreground/70">
            {item.summary}
          </span>
        )}
      </div>

      <div>
        <h3 className="resume-body font-semibold">
          <SchoolLink label={item.school} url={item.schoolUrl} />
        </h3>
        <p className="resume-details mt-0.5 font-mono text-foreground/70">
          <SchoolLink label={item.degree} url={item.degreeUrl} />
        </p>
        {item.curriculum && <Curriculum data={item.curriculum} />}
      </div>
    </article>
  );
}

export function Education({
  institutions,
  index,
  id,
}: {
  institutions: readonly Institution[];
  index: string;
  id: string;
}) {
  return (
    <Section>
      <SectionHeading index={index} id={id}>
        education
      </SectionHeading>
      <div className="space-y-3 print:space-y-1.5" aria-labelledby={id}>
        {institutions.map((item) => (
          <Entry key={item.school} item={item} />
        ))}
      </div>
    </Section>
  );
}
