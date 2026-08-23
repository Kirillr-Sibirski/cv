import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import { SectionHeading } from "./SectionHeading";

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

function Meta({ start, end }: { start: string; end?: string }) {
  if (!start && !end) return null;
  return (
    <span className="resume-details font-mono tabular-nums text-foreground/50">
      {start} to {end ?? "present"}
    </span>
  );
}

function CompanyLink({ company, link }: { company: string; link?: string }) {
  if (!link) return <span>{company}</span>;
  return (
    <a
      className="underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {company}
    </a>
  );
}

/** Slash-separated tags rather than pills: less furniture, same information. */
function Tags({ badges }: { badges: readonly string[] }) {
  if (badges.length === 0) return null;
  return (
    <ul className="mt-2 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 print:mt-1">
      {badges.map((badge) => (
        <li
          key={badge}
          className="resume-details font-mono text-foreground/50 before:mr-1.5 before:text-foreground/25 before:content-['/']"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}

function Entry({ work }: { work: WorkExperience }) {
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
    <article
      className={cn(
        "grid gap-x-6 gap-y-1 border-t border-border pt-3 first:border-t-0 first:pt-0",
        "print:break-inside-avoid print:pt-2",
        "md:grid-cols-[8.5rem_1fr]",
      )}
    >
      {/* Meta rail: dates and role sit left of the content on wide screens. */}
      <div className="flex flex-col gap-y-0.5">
        <Meta start={start} end={end} />
        <span className="resume-details font-mono text-foreground/70">
          {title}
        </span>
        {articleLink && (
          <a
            className="resume-details font-mono text-foreground/50 underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
            href={articleLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {articleLabel ?? "feature"}
          </a>
        )}
      </div>

      <div>
        <h3 className="resume-body font-semibold">
          <CompanyLink company={company} link={link} />
        </h3>
        {description ? (
          <div className="resume-details mt-1 text-pretty font-mono text-foreground/70">
            {description}
          </div>
        ) : null}
        <Tags badges={badges} />
      </div>
    </article>
  );
}

export function WorkExperience({
  work,
  title = "experience",
  index,
  id,
}: {
  work: readonly WorkExperience[];
  title?: string;
  index: string;
  id: string;
}) {
  return (
    <Section>
      <SectionHeading index={index} id={id}>
        {title}
      </SectionHeading>
      <div className="space-y-3 print:space-y-1.5" aria-labelledby={id}>
        {work.map((item) => (
          <Entry key={`${item.company}-${item.start}`} work={item} />
        ))}
      </div>
    </Section>
  );
}
