"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { Curriculum, type CurriculumData } from "./Curriculum";

type Course = { readonly name: string; readonly ec: string };
type CourseGroup = {
  readonly title: string;
  readonly courses: readonly Course[];
};

export type Institution = {
  readonly school: string;
  readonly schoolUrl: string;
  readonly degree: string;
  readonly degreeUrl: string;
  readonly start: string;
  readonly end: string;
  readonly gpa?: string;
  /** One-line results summary, used where a full course breakdown is overkill. */
  readonly summary?: string;
  /** Expandable completed/upcoming course breakdown; screen only. */
  readonly curriculum?: CurriculumData;
  readonly courseGroups: readonly CourseGroup[];
};

function SchoolLink({ label, url }: { label: string; url: string }) {
  if (!url) return <>{label}</>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
    >
      {label}
    </a>
  );
}

function EducationCard({ item }: { item: Institution }) {
  const [open, setOpen] = useState(false);
  const courseCount = item.courseGroups.reduce(
    (total, group) => total + group.courses.length,
    0,
  );

  return (
    <article className="rounded-lg border border-border p-3 transition-colors hover:border-foreground/25 print:break-inside-avoid print:border-border print:p-2">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="resume-body font-semibold">
            <SchoolLink label={item.school} url={item.schoolUrl} />
          </h3>
          <p className="resume-details font-mono text-foreground/70">
            <SchoolLink label={item.degree} url={item.degreeUrl} />
          </p>
          {item.gpa && (
            <p className="resume-details font-mono text-foreground/70">
              GPA: {item.gpa}
            </p>
          )}
          {item.summary && (
            <p className="resume-details font-mono text-foreground/70">
              {item.summary}
            </p>
          )}
        </div>
        <p className="resume-details shrink-0 font-mono text-foreground/50">
          {item.start} - {item.end}
        </p>
      </div>

      {item.curriculum && <Curriculum data={item.curriculum} />}

      {courseCount > 0 && (
        <>
          {/* Screen: collapsed by default, since there are a lot of these. */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="resume-details mt-2 inline-flex items-center gap-x-1 font-mono text-foreground/70 hover:text-foreground print:hidden"
          >
            <ChevronDownIcon
              className={cn(
                "size-3 transition-transform",
                open && "rotate-180",
              )}
              aria-hidden="true"
            />
            {open ? "hide" : "show"} {courseCount} results
          </button>

          <div
            className={cn(
              "mt-3 gap-2.5 sm:grid-cols-2 xl:grid-cols-4",
              open ? "grid" : "hidden",
              "print:hidden",
            )}
          >
            {item.courseGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                <h4 className="resume-body font-semibold">{group.title}</h4>
                <div className="grid gap-1.5">
                  {group.courses.map((course) => (
                    <div
                      key={`${group.title}-${course.name}`}
                      className="rounded-md border border-border px-2 py-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="resume-details font-semibold text-foreground">
                          {course.name}
                        </div>
                        <div className="resume-details font-mono text-foreground/50">
                          {course.ec}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Print: one dense line per group, so the resume still fits two pages. */}
          <div className="hidden print:mt-1.5 print:block">
            {item.courseGroups.map((group) => (
              <p
                key={group.title}
                className="resume-details font-mono text-foreground/70"
              >
                <span className="font-semibold">{group.title}:</span>{" "}
                {group.courses
                  .map((course) => `${course.name} (${course.ec})`)
                  .join(", ")}
              </p>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

export function Education({
  institutions,
}: {
  institutions: readonly Institution[];
}) {
  return (
    <Section>
      <h2 className="resume-section-title font-bold" id="education-section">
        education
      </h2>
      <div
        className="space-y-3 print:space-y-1"
        role="feed"
        aria-labelledby="education-section"
      >
        {institutions.map((item) => (
          <EducationCard key={item.school} item={item} />
        ))}
      </div>
    </Section>
  );
}
