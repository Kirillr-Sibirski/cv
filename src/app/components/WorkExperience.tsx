import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WorkExperience = {
  company: string;
  link?: string;
  articleLink?: string;
  articleLabel?: string;
  badges: readonly string[];
  title: string;
  start: string;
  end?: string;
  description?: ReactNode;
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
      aria-label="technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="resume-details print:resume-details align-middle print:px-2 print:py-0.5"
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
      className="resume-details font-mono tabular-nums text-foreground/50"
      aria-label={`employment period: ${start} to ${end ?? "present"}`}
    >
      {start} - {end ?? "present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

interface ArticleLinkProps {
  articleLink?: string;
  articleLabel?: string;
}

function CompanyLink({ company, link }: CompanyLinkProps) {
  if (!link) {
    return <span>{company}</span>;
  }

  return (
    <a
      className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

function ArticleLink({ articleLink, articleLabel }: ArticleLinkProps) {
  if (!articleLink) return null;

  return (
    <a
      className="resume-details font-mono text-foreground/50 underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
      href={articleLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {articleLabel ?? "feature"}
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
  const {
    company,
    link,
    articleLink,
    articleLabel,
    badges,
    title,
    start,
    end,
    description,
  } = work;

  return (
    <div className="rounded-lg border border-border p-4 transition-colors hover:border-foreground/25 print:border-border print:p-2">
      <div className="flex items-start justify-between gap-x-3">
        <div className="space-y-1">
          <h3 className="resume-body inline-flex items-center gap-x-1 font-semibold">
            <CompanyLink company={company} link={link} />
          </h3>
          <h4 className="resume-details font-mono font-semibold text-foreground/70">
            {title}
          </h4>
          <ArticleLink articleLink={articleLink} articleLabel={articleLabel} />
        </div>
        <WorkPeriod start={start} end={end} />
      </div>
      <BadgeList className="mt-3 flex-wrap gap-y-1" badges={badges} />
      {description ? (
        <div className="resume-details mt-3 text-pretty font-mono text-foreground/70">
          {description}
        </div>
      ) : null}
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
  title = "core experience",
}: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="resume-section-title font-bold" id="work-experience">
        {title}
      </h2>
      <div
        className="space-y-3 print:space-y-1"
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
