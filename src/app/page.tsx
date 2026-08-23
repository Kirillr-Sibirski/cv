import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Hackathons } from "./components/Hackathons";

const SITE_URL = "https://krlberg.dev";
const TITLE = "kirill rybkov cv";

// The on-page bio is intentionally blank right now; link previews still need
// something, so fall back rather than shipping an empty description.
const DESCRIPTION =
  RESUME_DATA.about ||
  "engineering, hardware, and software projects by kirill rybkov.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "kirill rybkov",
  authors: [{ name: "kirill rybkov", url: SITE_URL }],
  creator: "kirill rybkov",
  keywords: [
    "kirill rybkov",
    "advanced technology",
    "university of twente",
    "embedded systems",
    "control systems",
    "FMEA",
    "reliability engineering",
    "hardware prototyping",
    "typescript",
    "next.js",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@krlberg",
  },
};

// Person schema so search engines can associate the profiles with the name.
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "kirill rybkov",
  url: SITE_URL,
  description: DESCRIPTION,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "university of twente" },
    { "@type": "HighSchool", name: "the british school of barcelona" },
  ],
  knowsAbout: [
    "embedded electronics",
    "control systems",
    "CAD",
    "reliability engineering",
    "FMEA",
    "full-stack web development",
  ],
  sameAs: RESUME_DATA.contact.social.map((s) => s.url),
};

function getCommandMenuLinks() {
  return RESUME_DATA.contact.social.map((socialMediaLink) => ({
    url: socialMediaLink.url,
    title: socialMediaLink.name,
  }));
}

export default function ResumePage() {
  const { university, secondary } = RESUME_DATA.education;

  return (
    <main
      className="print:max-w-letter container relative mx-auto scroll-my-12 overflow-auto p-4 print:!px-6 print:!py-3 md:p-16"
      id="main-content"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />

      <section
        className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-1.5"
        aria-label="resume content"
      >
        <Header />

        <div className="space-y-9 print:space-y-2">
          <WorkExperience
            work={RESUME_DATA.work}
            title="experience"
            index="01"
            id="experience"
          />

          <WorkExperience
            work={RESUME_DATA.engineeringProjects}
            title="engineering projects"
            index="02"
            id="engineering-projects"
          />

          <Education
            institutions={[
              { ...university, curriculum: RESUME_DATA.curriculum },
              secondary,
            ]}
            index="03"
            id="education"
          />

          <Hackathons index="04" id="hackathons" />

          <Skills
            categories={RESUME_DATA.skillCategories}
            sectionTitle="tech stack"
            index="05"
            id="tech-stack"
          />
        </div>
      </section>

      <nav className="print:hidden" aria-label="quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
