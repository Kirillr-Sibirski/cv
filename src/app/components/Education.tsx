"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";

interface AchievementTagsProps {
  keywords: readonly string[];
}

function AchievementTags({ keywords }: AchievementTagsProps) {
  if (keywords.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Keywords"
    >
      {keywords.map((keyword) => (
        <li key={keyword}>
          <Badge
            className="px-1 py-0 resume-body print:px-1 print:py-0.5 resume-body print:leading-tight"
            variant="secondary"
          >
            {keyword}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface AchievementCardProps {
  title: string;
  achievements: readonly string[];
  keywords: readonly string[];
}

function AchievementCard({ title, achievements, keywords }: AchievementCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border p-1.5 print:h-[210px]">
      <CardHeader className="p-1.5 space-y-1">
        <div className="space-y-1">
          <CardTitle className="resume-body font-semibold">{title}</CardTitle>
          {achievements.length > 1 ? (
            <ul
              className="font-mono resume-details text-foreground/80 list-disc pl-4"
              aria-label="Achievement details"
            >
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="font-mono resume-details text-foreground/80">
              {achievements[0]}
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto p-1.5">
        <AchievementTags keywords={keywords} />
      </CardContent>
    </Card>
  );
}

interface EducationProps {
  education: (typeof RESUME_DATA)["education"];
}

export function Education({ education }: EducationProps) {
  return (
    <Section>
      <h2 className="resume-section-title" id="education-section">
        Education
      </h2>
      <div className="space-y-4 print:space-y-0" role="feed" aria-labelledby="education-section">
        {education.map((item) => (
          <article key={item.school} role="article">
            <div className="flex items-center justify-between mb-2">
              <h3 className="resume-body font-semibold leading-none">{item.school}</h3>
              <div className="resume-details tabular-nums text-gray-500">
                {item.start} - {item.end}
              </div>
            </div>
            <div
              className="grid grid-cols-1 gap-1 print:grid-cols-5 print:gap-1 md:grid-cols-3 lg:grid-cols-5"
              role="feed"
              aria-labelledby="education-achievements"
            >
              {item.achievements.map((achievement) => (
                <AchievementCard
                  key={achievement.title}
                  title={achievement.title}
                  achievements={achievement.achievements}
                  keywords={achievement.keywords}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}