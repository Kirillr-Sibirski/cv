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
  "BSc Advanced Technology student @ University of Twente. Software-focused with experience across embedded electronics, control systems, CAD, prototyping, and product development.";

const HARDWARE_SKILL_CATEGORIES: HardwareSkillCategory[] = [
  {
    id: "embedded",
    title: "Electronics & Embedded",
    skills: [
      { label: "Arduino", url: "https://www.arduino.cc/" },
      { label: "ESP32", url: "https://www.espressif.com/en/products/socs/esp32" },
      { label: "Raspberry Pi", url: "https://www.raspberrypi.com/" },
      { label: "PWM / Analog / Digital I/O", url: "https://docs.arduino.cc/" },
      { label: "I2C Sensors", url: "https://learn.sparkfun.com/tutorials/i2c/all" },
      { label: "Breadboarding / Perfboard", url: "https://en.wikipedia.org/wiki/Breadboard" },
      { label: "RC Electronics", url: "https://en.wikipedia.org/wiki/Electronic_speed_control" },
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical / CAD",
    skills: [
      { label: "Onshape", url: "https://www.onshape.com/en/" },
      { label: "SolidWorks", url: "https://www.solidworks.com/" },
      { label: "KiCad", url: "https://www.kicad.org/" },
      { label: "FDM 3D Printing", url: "https://en.wikipedia.org/wiki/3D_printing" },
    ],
  },
  {
    id: "software",
    title: "Software",
    skills: [
      { label: "Python", url: "https://www.python.org/" },
      { label: "C/C++", url: "https://www.arduino.cc/" },
      { label: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
      { label: "MATLAB", url: "https://www.mathworks.com/products/matlab.html" },
      { label: "Simulink", url: "https://www.mathworks.com/products/simulink.html" },
      { label: "Git", url: "https://github.com/Kirillr-Sibirski" },
      { label: "Claude Code", url: "https://www.anthropic.com/claude-code" },
      { label: "OpenAI Codex", url: "https://openai.com/codex/" },
    ],
  },
];

const HARDWARE_WORK: HardwareWorkItem[] = [
  {
    company: "Active Suspension System",
    link: "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
    badges: ["Arduino", "IMU", "PID", "CAD", "3D Printing"],
    title: "completed during EPQ A-level",
    start: "",
    end: "",
    description: (
      <p>
        Built an active anti-roll system for a 1/10 off-road RC car, with the goal of reducing rollover on uneven terrain rather
        than just making a standard suspension upgrade. I designed the linkage
        and printed parts, wired an Arduino Nano with an MPU6050 IMU, and wrote
        the PID in C/C++ to turn orientation data into servo-driven
        ride-height adjustment. Most of the work was in getting the whole loop
        to behave in the real world: packaging the electronics cleanly on the
        chassis, powering it from the RC receiver, and tuning the PID response
        through repeated testing on slopes, rocks, and rough surfaces.
      </p>
    ),
  },
  {
    company: "Autonomous Fire Detection Aircraft",
    link: undefined,
    badges: ["UAV", "Flight Controller", "GPS", "Raspberry Pi"],
    title: "high school team project",
    start: "",
    end: "",
    description: (
      <p>
        AFDA was a fixed-wing drone project aimed at early wildfire detection
        in Catalonia. My part was mainly the electronics and physical build:
        integrating the SpeedyBee flight controller, power system, GPS,
        receiver, and Raspberry Pi payload, then helping turn that into an
        airframe that could actually survive and fly. The project was useful
        because it forced real trade-offs between structure, weight,
        manufacturability, and onboard electronics instead of treating them as
        separate problems.
      </p>
    ),
  },
  {
    company: "Piezoelectric Accelerometer",
    link: "https://drive.google.com/file/d/12hf3-xHmd9VUs-cSkcsxMcEc7xe-uF2a/view?usp=sharing",
    badges: ["Charge Amplifier", "Arduino", "Signal Conditioning"],
    title: "university team project",
    start: "",
    end: "",
    description: (
      <p>
        Designed and validated a piezoelectric
        accelerometer for subwoofer testing. I focused mainly on the electronics
        and software side: signal conditioning via an integrator circuit, Arduino-based readout, and
        calibration/testing support for the final prototype. What made it
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
    title: "DIY Keyboard",
    projectUrl: "https://github.com/Kirillr-Sibirski/hormesis-keyboard",
    techStack: [
      { label: "Onshape", url: "https://www.onshape.com/en/" },
      { label: "KiCad", url: "https://www.kicad.org/" },
      {
        label: "ZMK Firmware",
        url: "https://github.com/Kirillr-Sibirski/zmk-config-hormesis-v2",
      },
    ],
    description:
      "Designing a custom low-profile split keyboard with an original case in Onshape, a routed PCB in KiCad, and a ZMK-based firmware setup. It has been a useful hands-on project for combining CAD, electronics, PCB layout, and firmware in one hardware build.",
  },
  {
    title: "Blockchain",
    projectUrl: "https://krlberg.dev/",
    techStack: ["TypeScript", "GitHub", "Frontend", "DeFi"],
    description:
      "Built and shipped production-facing software through Lattic3 and hackathon projects, using TypeScript across frontend and backend, GitHub, and Claude Code / Codex to speed up the coding. The main blockchain-facing resume lives on the main page of the site.",
  },
];

const HARDWARE_EDUCATION = {
  school: "University of Twente",
  schoolUrl: "https://www.utwente.nl/en/",
  degree: "BSc Advanced Technology",
  degreeUrl:
    "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
  gpa: "7.2 / 10",
  courseGroups: [
    {
      title: "Math & Software",
      courses: [
        {
          name: "Calculus 1 / 2",
          ec: "8 EC",
        },
        {
          name: "Programming Skills",
          ec: "3 EC",
        },
      ],
    },
    {
      title: "Electronics",
      courses: [
        {
          name: "Basic Electronics",
          ec: "4 EC",
        },
        {
          name: "Accelerom. Project",
          ec: "4 EC",
        },
      ],
    },
    {
      title: "Engineering",
      courses: [
        {
          name: "Mechanics",
          ec: "4 EC",
        },
        {
          name: "System Dynamics",
          ec: "4 EC",
        },
      ],
    },
    {
      title: "Materials",
      courses: [
        {
          name: "Material Properties",
          ec: "3 EC",
        },
        {
          name: "Polymer Materials",
          ec: "3 EC",
        },
      ],
    },
  ],
};

function HardwareEducationSection() {
  return (
    <Section className="print:break-inside-avoid">
      <h2 className="resume-section-title font-bold" id="hardware-education">
        Education
      </h2>
      <article className="rounded-lg border border-border/70 p-3 print:p-2.5">
        <div className="space-y-1">
          <h3 className="resume-body font-semibold">
            <a
              href={HARDWARE_EDUCATION.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground"
            >
              {HARDWARE_EDUCATION.school}
            </a>
          </h3>
          <p className="font-mono resume-details text-foreground/70">
            <a
              href={HARDWARE_EDUCATION.degreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground"
            >
              {HARDWARE_EDUCATION.degree}
            </a>
          </p>
          <p className="font-mono resume-details text-foreground/80">
            GPA: {HARDWARE_EDUCATION.gpa}
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
                      <div className="font-mono resume-details text-foreground/60">
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
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:px-7 print:py-6 md:p-16 print:max-w-letter"
      id="main-content"
    >
      <div className="sr-only">
        <h1>kirill rybkov hardware</h1>
      </div>

      <section
        className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-3"
        aria-label="Resume Content"
      >
        <Header
          nameOverride="Kirill Rybkov"
          aboutOverride={HARDWARE_ABOUT}
        />

        <div className="space-y-8 print:space-y-3">
          <Skills
            categories={HARDWARE_SKILL_CATEGORIES}
            sectionTitle="Tech Stack"
          />

          <WorkExperience
            work={HARDWARE_WORK}
            title="Projects"
          />

          <HardwareEducationSection />

          <Projects
            projects={HARDWARE_PROJECTS}
            title="Additional Experience"
          />

          <div className="pb-2 pt-1 text-center font-mono resume-details text-foreground/65 print:pt-0">
            <a
              href="https://krlberg.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-foreground"
            >
              and yeah, that&apos;s not everything either. here&apos;s the onchain side...
            </a>
          </div>
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
