import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Hackathons } from "./components/Hackathons";

export const metadata: Metadata = {
  title: "karl ryberg cv",
  description: RESUME_DATA.about,
  openGraph: {
    title: "karl ryberg cv",
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "karl ryberg cv",
    description: RESUME_DATA.about,
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  // const links = [];

  // if (RESUME_DATA.personalWebsiteUrl) {
  //   links.push({
  //     url: RESUME_DATA.personalWebsiteUrl,
  //     title: "Personal Website",
  //   });
  // }

  return [
    // ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <main
      className="print:max-w-letter container relative mx-auto scroll-my-12 overflow-auto p-4 print:px-7 print:py-6 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>karl ryberg cv</h1>
      </div>

      <section
        className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-3"
        aria-label="resume content"
      >
        <Header />

        <div className="space-y-8 print:space-y-3">
          <Skills skills={RESUME_DATA.skills} />

          <WorkExperience work={RESUME_DATA.work} />

          <div className="print:break-before-page" />

          <Hackathons />

          <Projects projects={RESUME_DATA.projects} />

          <Education education={RESUME_DATA.education} />

          <div className="resume-details pb-2 pt-1 text-center font-mono text-foreground/65 print:pt-0">
            <a
              href="https://krlberg.dev/hardware"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
            >
              oh btw, that&apos;s not everything. here&apos;s the other side of
              me...
            </a>
          </div>
        </div>
      </section>

      <nav className="print:hidden" aria-label="quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
