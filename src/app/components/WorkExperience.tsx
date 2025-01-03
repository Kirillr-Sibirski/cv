import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
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
  // link: WorkExperience["link"];
}

function CompanyLink({ company }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      // href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
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
  const { company, badges, title, start, end, description } = work;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold text-base">
            <CompanyLink company={company} />
          </h3>
          <div className="font-mono resume-details text-gray-500">
            {start} - {end ?? "Present"}
          </div>
        </div>
        <h4 className="font-mono resume-details font-semibold">
          {title}
        </h4>
      </CardHeader>
      <CardContent>
        <div className="font-mono resume-details text-foreground/80 text-pretty">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="resume-section-title font-bold" id="work-experience">
        Work Experience
      </h2>
      <div 
        className="space-y-4 print:space-y-2" // Increased print spacing from print:space-y-0 to print:space-y-6
        role="feed" 
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article 
            key={`${item.company}-${item.start}`} 
            role="article"
            className="print:break-inside-avoid" // Prevent breaking work experiences across pages
          >
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}