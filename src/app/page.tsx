import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Hackathons } from "./components/Hackathons";

const TITLE = "kirill rybkov cv";

export const metadata: Metadata = {
  metadataBase: new URL("https://krlberg.dev"),
  title: TITLE,
  description: RESUME_DATA.about,
  openGraph: {
    title: TITLE,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: RESUME_DATA.about,
  },
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
      <div className="sr-only">
        <h1>{TITLE}</h1>
      </div>

      <section
        className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-1.5"
        aria-label="resume content"
      >
        <Header />

        <div className="space-y-8 print:space-y-1.5">
          <Skills
            categories={RESUME_DATA.skillCategories}
            sectionTitle="tech stack"
          />

          <WorkExperience work={RESUME_DATA.work} title="experience" />

          <WorkExperience
            work={RESUME_DATA.engineeringProjects}
            title="engineering projects"
          />

          <Education institutions={[university, secondary]} />

          <Projects projects={RESUME_DATA.projects} title="other builds" />

          <Hackathons />
        </div>
      </section>

      <nav className="print:hidden" aria-label="quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
