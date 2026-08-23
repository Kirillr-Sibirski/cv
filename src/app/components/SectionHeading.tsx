import { ReactNode } from "react";

/**
 * Numbered heading under a full-width rule. The number is the cheapest way to
 * give the page a spec-sheet cadence without adding any ornament.
 */
export function SectionHeading({
  index,
  id,
  children,
  aside,
}: {
  index: string;
  id: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-x-3 border-b border-foreground pb-1.5">
      <h2
        id={id}
        className="resume-section-title flex items-baseline gap-x-2.5"
      >
        <span className="resume-details font-mono font-normal tabular-nums text-foreground/40">
          {index}
        </span>
        {children}
      </h2>
      {aside}
    </div>
  );
}
