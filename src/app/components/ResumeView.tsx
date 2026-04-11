import { CommandMenu } from "@/components/command-menu";
import { ResumeData } from "@/data/resume-data";
import { Education } from "./Education";
import { FlipPageToggle } from "./FlipPageToggle";
import { Hackathons } from "./Hackathons";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";

function getCommandMenuLinks(resumeData: ResumeData) {
  return resumeData.contact.social.map((socialMediaLink) => ({
    url: socialMediaLink.url,
    title: socialMediaLink.name,
  }));
}

export function ResumeView({
  resumeData,
  theme,
  flipHref,
  flipLabel,
  skillsTitles,
  workTitle = "Core Experience",
  projectsTitle = "Other Experience",
  showHackathons = true,
}: {
  resumeData: ResumeData;
  theme: "blockchain" | "engineer";
  flipHref: string;
  flipLabel: string;
  skillsTitles?: {
    blockchain: string;
    frontend: string;
    focus: string;
  };
  workTitle?: string;
  projectsTitle?: string;
  showHackathons?: boolean;
}) {
  return (
    <main
      className="resume-shell container relative mx-auto min-h-screen scroll-my-12 overflow-x-hidden p-4 print:px-7 print:py-6 md:p-16 print:max-w-letter"
      data-resume-theme={theme}
      id="main-content"
    >
      <div className="sr-only">
        <h1>{theme === "engineer" ? "karl ryberg engineer cv" : "karl ryberg cv"}</h1>
      </div>

      <section
        className="resume-canvas mx-auto w-full max-w-3xl space-y-8 print:space-y-3"
        aria-label="Resume Content"
      >
        <Header resumeData={resumeData} />

        <div className="space-y-8 print:space-y-3">
          <Skills skills={resumeData.skills} titles={skillsTitles} />

          <WorkExperience work={resumeData.work} title={workTitle} />

          {showHackathons && (
            <>
              <div className="print:break-before-page" />
              <Hackathons
                projects={resumeData.hackathons}
                title="Hackathon Projects"
                countLabel="15+ hackathons completed"
                intro="prize-winning projects are a big part of the story because they show how i build fast, ship complete products, and work across defi, lending, oracles, and onchain ux. most notable ones are shared below."
              />
            </>
          )}

          <Projects projects={resumeData.projects} title={projectsTitle} />

          <Education education={resumeData.education} />
        </div>
      </section>

      <FlipPageToggle href={flipHref} label={flipLabel} theme={theme} />

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks(resumeData)} />
      </nav>
    </main>
  );
}
