"use client";

import { Section } from "@/components/ui/section";

interface EducationProps {
  education: readonly {
    school: string;
    schoolUrl: string;
    degree: string;
    degreeUrl: string;
    start: string;
    end: string;
    achievements: readonly {
      title: string;
      achievements: readonly string[];
      keywords: readonly string[];
    }[];
  }[];
}

export function Education({ education }: EducationProps) {
  return (
    <Section className="print:break-inside-avoid">
      <h2 className="resume-section-title font-bold" id="education-section">
        Education
      </h2>
      <div className="space-y-3" role="feed" aria-labelledby="education-section">
        {education.map((item) => (
          <article
            key={`${item.school}-${item.start}`}
            className="rounded-lg border border-border/70 p-3 print:p-2.5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="resume-body font-semibold">
                  <a
                    href={item.schoolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.school}
                  </a>
                </h3>
                <p className="font-mono resume-details text-foreground/70">
                  <a
                    href={item.degreeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.degree}
                  </a>
                </p>
                {item.achievements.map((achievement) =>
                  achievement.achievements[0] ? (
                    <p
                      key={achievement.title}
                      className="mt-1 font-mono resume-details text-foreground/80 text-pretty"
                    >
                      {achievement.title}: {achievement.achievements[0]}
                    </p>
                  ) : null,
                )}
              </div>
              <p className="font-mono resume-details text-foreground/60">
                {item.start} - {item.end}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
