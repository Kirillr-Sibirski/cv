import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="resume-section-title font-bold" id="about-section">
        About
      </h2>
      <div
        className="font-mono resume-details text-foreground/80 text-pretty"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}