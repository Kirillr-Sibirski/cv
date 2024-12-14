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
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight" 
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
    <Card className="flex h-full flex-col overflow-hidden border p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
          <CardDescription className="font-mono text-xs text-foreground/80">
            {achievements.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
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
      <h2 className="text-xl font-bold" id="education-section">
        Education
      </h2>
      <div className="space-y-4 print:space-y-0" role="feed" aria-labelledby="education-section">
        {education.map((item) => (
          <article key={item.school} role="article">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold leading-none">{item.school}</h3>
              <div className="text-sm tabular-nums text-gray-500">
                {item.start} - {item.end}
              </div>
            </div>
            <div 
              className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
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