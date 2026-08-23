import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "../components/WorkExperience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Header } from "../components/Header";
import { ReactNode } from "react";
import { Section } from "@/components/ui/section";

type LinkItem = {
  label: string;
  url: string;
};

type HardwareSkillCategory = {
  id: string;
  title: string;
  skills: LinkItem[];
};

type HardwareWorkItem = {
  company: string;
  link?: string;
  articleLink?: string;
  badges: string[];
  title: string;
  start: string;
  end?: string;
  description: ReactNode;
};

type HardwareProjectItem = {
  title: string;
  projectUrl?: string;
  techStack: ({ label: string; url: string } | string)[];
  description: string;
};

const HARDWARE_ABOUT =
  "bsc advanced technology student @ university of twente. software-focused with experience across embedded electronics, control systems, cad, prototyping, and product development.";

const HARDWARE_SKILL_CATEGORIES: HardwareSkillCategory[] = [
  {
    id: "embedded",
    title: "electronics & embedded",
    skills: [
      { label: "arduino", url: "https://www.arduino.cc/" },
      {
        label: "esp32",
        url: "https://www.espressif.com/en/products/socs/esp32",
      },
      { label: "raspberry pi", url: "https://www.raspberrypi.com/" },
      { label: "pwm / analog / digital i/o", url: "https://docs.arduino.cc/" },
      {
        label: "i2c sensors",
        url: "https://learn.sparkfun.com/tutorials/i2c/all",
      },
      {
        label: "breadboarding / perfboard",
        url: "https://en.wikipedia.org/wiki/Breadboard",
      },
      {
        label: "rc electronics",
        url: "https://en.wikipedia.org/wiki/Electronic_speed_control",
      },
    ],
  },
  {
    id: "mechanical",
    title: "mechanical / cad",
    skills: [
      { label: "onshape", url: "https://www.onshape.com/en/" },
      { label: "solidworks", url: "https://www.solidworks.com/" },
      { label: "kicad", url: "https://www.kicad.org/" },
      {
        label: "fdm 3d printing",
        url: "https://en.wikipedia.org/wiki/3D_printing",
      },
    ],
  },
  {
    id: "software",
    title: "software",
    skills: [
      { label: "python", url: "https://www.python.org/" },
      { label: "c/c++", url: "https://www.arduino.cc/" },
      { label: "typescript", url: "https://www.typescriptlang.org/docs/" },
      {
        label: "matlab",
        url: "https://www.mathworks.com/products/matlab.html",
      },
      {
        label: "simulink",
        url: "https://www.mathworks.com/products/simulink.html",
      },
      { label: "git", url: "https://github.com/Kirillr-Sibirski" },
      { label: "claude code", url: "https://www.anthropic.com/claude-code" },
      { label: "openai codex", url: "https://openai.com/codex/" },
    ],
  },
];

const HARDWARE_WORK: HardwareWorkItem[] = [
  {
    company: "active suspension system",
    link: "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
    badges: ["arduino", "imu", "pid", "cad", "3d printing"],
    title: "completed during epq a-level",
    start: "",
    end: "",
    description: (
      <p>
        built an active anti-roll system for a 1/10 off-road rc car, with the
        goal of reducing rollover on uneven terrain rather than just making a
        standard suspension upgrade. i designed the linkage and printed parts,
        wired an arduino nano with an mpu6050 imu, and wrote the pid in c/c++ to
        turn orientation data into servo-driven ride-height adjustment. most of
        the work was in getting the whole loop to behave in the real world:
        packaging the electronics cleanly on the chassis, powering it from the
        rc receiver, and tuning the pid response through repeated testing on
        slopes, rocks, and rough surfaces.
      </p>
    ),
  },
  {
    company: "autonomous fire detection aircraft",
    link: undefined,
    badges: ["uav", "flight controller", "gps", "raspberry pi"],
    title: "high school team project",
    start: "",
    end: "",
    description: (
      <p>
        afda was a fixed-wing drone project aimed at early wildfire detection in
        catalonia. my part was mainly the electronics and physical build:
        integrating the speedybee flight controller, power system, gps,
        receiver, and raspberry pi payload, then helping turn that into an
        airframe that could actually survive and fly. the project was useful
        because it forced real trade-offs between structure, weight,
        manufacturability, and onboard electronics instead of treating them as
        separate problems.
      </p>
    ),
  },
  {
    company: "piezoelectric accelerometer",
    link: "https://drive.google.com/file/d/12hf3-xHmd9VUs-cSkcsxMcEc7xe-uF2a/view?usp=sharing",
    badges: ["charge amplifier", "arduino", "signal conditioning"],
    title: "university team project",
    start: "",
    end: "",
    description: (
      <p>
        designed and validated a piezoelectric accelerometer for subwoofer
        testing. i focused mainly on the electronics and software side: signal
        conditioning via an integrator circuit, arduino-based readout, and
        calibration/testing support for the final prototype. what made it
        interesting was that it sat in the middle between theory and hardware,
        so we had to connect the mechanical model, the analogue circuit
        behaviour, and the measured shaker-test results instead of solving each
        part in isolation.
      </p>
    ),
  },
];

const HARDWARE_PROJECTS: HardwareProjectItem[] = [
  {
    title: "diy keyboard",
    projectUrl: "https://github.com/Kirillr-Sibirski/hormesis-keyboard",
    techStack: [
      { label: "onshape", url: "https://www.onshape.com/en/" },
      { label: "kicad", url: "https://www.kicad.org/" },
      {
        label: "zmk firmware",
        url: "https://github.com/Kirillr-Sibirski/zmk-config-hormesis-v2",
      },
    ],
    description:
      "designing a custom low-profile split keyboard with an original case in onshape, a routed pcb in kicad, and a zmk-based firmware setup. it has been a useful hands-on project for combining cad, electronics, pcb layout, and firmware in one hardware build.",
  },
  {
    title: "blockchain",
    projectUrl: "https://krlberg.dev/",
    techStack: ["typescript", "github", "frontend", "defi"],
    description:
      "built and shipped production-facing software through lattic3 and hackathon projects, using typescript across frontend and backend, github, and claude code / codex to speed up the coding. the main blockchain-facing resume lives on the main page of the site.",
  },
];

const HARDWARE_EDUCATION = {
  school: "university of twente",
  schoolUrl: "https://www.utwente.nl/en/",
  degree: "bsc advanced technology",
  degreeUrl:
    "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
  gpa: "7.2 / 10",
  courseGroups: [
    {
      title: "math & software",
      courses: [
        {
          name: "calculus 1 / 2",
          ec: "8 ec",
        },
        {
          name: "programming skills",
          ec: "3 ec",
        },
      ],
    },
    {
      title: "electronics",
      courses: [
        {
          name: "basic electronics",
          ec: "4 ec",
        },
        {
          name: "accelerom. project",
          ec: "4 ec",
        },
      ],
    },
    {
      title: "engineering",
      courses: [
        {
          name: "mechanics",
          ec: "4 ec",
        },
        {
          name: "system dynamics",
          ec: "4 ec",
        },
      ],
    },
    {
      title: "materials",
      courses: [
        {
          name: "material properties",
          ec: "3 ec",
        },
        {
          name: "polymer materials",
          ec: "3 ec",
        },
      ],
    },
  ],
};

function HardwareEducationSection() {
  return (
    <Section className="print:break-inside-avoid">
      <h2 className="resume-section-title font-bold" id="hardware-education">
        education
      </h2>
      <article className="rounded-lg border border-border/70 p-3 print:p-2.5">
        <div className="space-y-1">
          <h3 className="resume-body font-semibold">
            <a
              href={HARDWARE_EDUCATION.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
            >
              {HARDWARE_EDUCATION.school}
            </a>
          </h3>
          <p className="resume-details font-mono text-foreground/70">
            <a
              href={HARDWARE_EDUCATION.degreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
            >
              {HARDWARE_EDUCATION.degree}
            </a>
          </p>
          <p className="resume-details font-mono text-foreground/80">
            gpa: {HARDWARE_EDUCATION.gpa}
          </p>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
          {HARDWARE_EDUCATION.courseGroups.map((group) => (
            <div key={group.title} className="space-y-2">
              <h4 className="resume-body font-semibold">{group.title}</h4>
              <div className="grid gap-1.5">
                {group.courses.map((course) => (
                  <div
                    key={`${group.title}-${course.name}`}
                    className="rounded-md border border-border/70 bg-secondary/40 px-2 py-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="resume-details font-semibold text-foreground">
                        {course.name}
                      </div>
                      <div className="resume-details font-mono text-foreground/60">
                        {course.ec}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </Section>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://krlberg.dev"),
  title: "kirill rybkov hardware",
  description: HARDWARE_ABOUT,
  openGraph: {
    title: "kirill rybkov hardware",
    description: HARDWARE_ABOUT,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "kirill rybkov hardware",
    description: HARDWARE_ABOUT,
  },
};

function getCommandMenuLinks() {
  return [
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function HardwareResumePage() {
  return (
    <main
      className="print:max-w-letter container relative mx-auto scroll-my-12 overflow-auto p-4 print:px-7 print:py-6 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>kirill rybkov hardware</h1>
      </div>

      <section
        className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-3"
        aria-label="resume content"
      >
        <Header nameOverride="kirill rybkov" aboutOverride={HARDWARE_ABOUT} />

        <div className="space-y-8 print:space-y-3">
          <Skills
            categories={HARDWARE_SKILL_CATEGORIES}
            sectionTitle="tech stack"
          />

          <WorkExperience work={HARDWARE_WORK} title="projects" />

          <HardwareEducationSection />

          <Projects
            projects={HARDWARE_PROJECTS}
            title="additional experience"
          />

          <div className="resume-details pb-2 pt-1 text-center font-mono text-foreground/65 print:pt-0">
            <a
              href="https://krlberg.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
            >
              and yeah, that&apos;s not everything either. here&apos;s the
              onchain side...
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
