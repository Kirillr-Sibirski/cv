import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WorkExperience = {
  company: string;
  link?: string;
  articleLink?: string;
  badges: readonly string[];
  title: string;
  start: string;
  end?: string;
  description: ReactNode;
};
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle resume-details print:resume-details print:px-2 print:py-0.5"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  if (!start && !end) return null;

  return (
    <div
      className="resume-body tabular-nums text-gray-500"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

interface ArticleLinkProps {
  articleLink?: string;
}

function CompanyLink({ company, link }: CompanyLinkProps) {
  if (!link) {
    return <span>{company}</span>;
  }

  return (
    <a
      className="underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

function ArticleLink({ articleLink }: ArticleLinkProps) {
  if (!articleLink) return null;

  return (
    <a
      className="font-mono resume-details text-foreground/60 underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground"
      href={articleLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Radix feature
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, articleLink, badges, title, start, end, description } = work;

  return (
    <div className="rounded-lg border border-border/70 p-4 print:p-3">
      <div className="flex items-start justify-between gap-x-3">
        <div className="space-y-1">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold text-base">
            <CompanyLink company={company} link={link} />
          </h3>
          <h4 className="font-mono resume-details font-semibold text-foreground/70">
            {title}
          </h4>
          <ArticleLink articleLink={articleLink} />
        </div>
        <WorkPeriod start={start} end={end} />
      </div>
      <BadgeList className="mt-3 flex-wrap gap-y-1" badges={badges} />
      <div className="mt-3 font-mono resume-details text-foreground/80 text-pretty">
        {description}
      </div>
    </div>
  );
}

interface WorkExperienceProps {
  work: readonly WorkExperience[];
  title?: string;
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({
  work,
  title = "Core Experience",
}: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="resume-section-title font-bold" id="work-experience">
        {title}
      </h2>
      <div
        className="space-y-4 print:space-y-2"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article
            key={`${item.company}-${item.start}`}
            role="article"
            className="print:break-inside-avoid"
          >
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
