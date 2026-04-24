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

type HardwareSkills = {
  blockchain: LinkItem[];
  frontend: LinkItem[];
  focus: LinkItem[];
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
  "BSc Advanced Technology (mechatronics-oriented) student @ University of Twente. Software-focused builder with hands-on experience across embedded electronics, control systems, CAD, prototyping, and product development.";

const HARDWARE_SKILLS: HardwareSkills = {
  blockchain: [
    { label: "Arduino / C++", url: "https://www.arduino.cc/" },
    { label: "ESP32", url: "https://www.espressif.com/en/products/socs/esp32" },
    { label: "PWM / Analog / Digital I/O", url: "https://docs.arduino.cc/" },
    { label: "I2C Sensors", url: "https://learn.sparkfun.com/tutorials/i2c/all" },
    { label: "PCB", url: "https://en.wikipedia.org/wiki/Breadboard" },
    { label: "RC Electronics", url: "https://en.wikipedia.org/wiki/Electronic_speed_control" },
  ],
  frontend: [
    { label: "Onshape", url: "https://www.onshape.com/en/" },
    { label: "SolidWorks", url: "https://www.solidworks.com/" },
    { label: "KiCad", url: "https://www.kicad.org/" },
    { label: "FDM 3D Printing", url: "https://en.wikipedia.org/wiki/3D_printing" },
    // { label: "Rapid Prototyping", url: "https://en.wikipedia.org/wiki/Prototype" },
  ],
  focus: [
    { label: "Python", url: "https://www.python.org/" },
    { label: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
    { label: "MATLAB", url: "https://www.mathworks.com/products/matlab.html" },
    { label: "Simulink", url: "https://www.mathworks.com/products/simulink.html" },
    { label: "Git / GitHub", url: "https://github.com/Kirillr-Sibirski" },
    { label: "Claude Code", url: "https://www.anthropic.com/claude-code" },
    { label: "OpenAI Codex", url: "https://openai.com/codex/" },
  ],
};

const HARDWARE_WORK: HardwareWorkItem[] = [
  {
    company: "Active Suspension System",
    link: "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
    badges: ["Arduino Nano", "MPU6050", "PID", "CAD", "3D Printing"],
    title: "completed during EPQ A-level",
    start: "",
    end: "",
    description: (
      <div>
        <ul className="list-inside list-disc">
          <li>
            Designed and built an active anti-roll suspension system for a
            1/10th-scale off-road RC car to reduce rollover risk on uneven
            terrain.
          </li>
          <li>
            Combined CAD, 3D printing, Arduino
            C/C++, an IMU, and high-torque servos to dynamically shift
            the car&apos;s effective centre of mass.
          </li>
          <li>
            Implemented quaternion-to-Euler processing, calibration storage,
            wireless power from the RC receiver, and PID tuning based on field
            tests on slopes and rocks.
          </li>
        </ul>
      </div>
    ),
  },
  {
    company: "AFDA Fire Detection Drone",
    link: undefined,
    badges: ["UAV", "Electronics", "Flight Controller", "GPS", "Raspberry Pi"],
    title: "high school team project",
    start: "",
    end: "",
    description: (
      <div>
        <ul className="list-inside list-disc">
          <li>
            Helped build a fixed-wing autonomous wildfire-detection drone aimed
            at early fire monitoring in Catalonia.
          </li>
          <li>
            Focused on the electronics stack and physical drone construction,
            including the SpeedyBee F405 Wing flight controller, GPS, receiver,
            ESC, LiPo power setup, and integration of a Raspberry Pi-based
            vision payload.
          </li>
          <li>
            Worked through multiple airframe iterations, moving from an early
            failed prototype to a reinforced 1.4 m delta-wing design with
            improved structural integrity and flight performance.
          </li>
        </ul>
      </div>
    ),
  },
  {
    company: "Piezoelectric Accelerometer",
    link: "https://drive.google.com/file/d/12hf3-xHmd9VUs-cSkcsxMcEc7xe-uF2a/view?usp=sharing",
    badges: ["Charge Amplifier", "Arduino", "Signal Analysis"],
    title: "university project",
    start: "",
    end: "",
    description: (
      <div>
        <ul className="list-inside list-disc">
          <li>
            Built and characterized a piezoelectric accelerometer for subwoofer
            testing, targeting a 10 to 200 Hz operating range and accelerations
            from 0.05 to 5 g.
          </li>
          <li>
            Worked on the signal-conditioning and software side, using a charge
            amplifier circuit, analogue signal processing, and Arduino-based
            readout and calibration.
          </li>
          <li>
            Helped validate the prototype on a shaker setup and analyze the
            system&apos;s bandwidth, resonance behavior, and calibration limits.
          </li>
        </ul>
      </div>
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
    title: "Software / Product Work",
    projectUrl: "https://krlberg.dev/",
    techStack: ["TypeScript", "Git", "GitHub", "Frontend", "Backend", "Claude Code", "Codex"],
    description:
      "Built and shipped production-facing software through Lattic3 and hackathon projects, using TypeScript across frontend and backend, Git/GitHub for day-to-day collaboration, and Claude Code / Codex to speed up prototyping, iteration, and implementation. The main blockchain-facing resume lives on the main page of this site.",
  },
  {
    title: "RC Cars & Tinkering",
    techStack: ["Brushless / Brushed", "ESCs", "Suspension", "Mechanical Mods"],
    description:
      "Regularly modify and experiment with 1/10 RC cars, including drivetrains, ESCs, suspension setups, and custom parts on a heavily modified Maverick Strada Evo XD and Remo Hobby crawler.",
  },
];

const HARDWARE_EDUCATION = {
  school: "University of Twente",
  schoolUrl: "https://www.utwente.nl/en/",
  degree: "BSc Advanced Technology",
  degreeUrl:
    "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
  gpa: "7.2 / 10",
  courses: [
    { code: "202001212", name: "Calculus 1" },
    { code: "202200179", name: "Calculus 2" },
    { code: "202500293", name: "Mechanics" },
    { code: "202300118", name: "Error Analysis & Programming Skills" },
    { code: "202500295", name: "System Dynamics 1" },
    { code: "202000624", name: "Basic Electronics & Instrumentation" },
    { code: "202000625", name: "Project Accelerometer" },
    { code: "202500299", name: "Quantum Matter & Devices" },
    { code: "202400642", name: "Structure and Properties of Materials" },
    { code: "202500302", name: "Properties of Polymer Materials" },
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

        <div className="mt-3 flex flex-wrap gap-2">
          {HARDWARE_EDUCATION.courses.map((course) => (
            <div
              key={course.code}
              className="rounded-md border border-border/70 bg-secondary/40 px-2.5 py-2"
            >
              <div className="font-mono resume-details text-foreground/60">
                {course.code}
              </div>
              <div className="resume-details font-semibold text-foreground">
                {course.name}
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
            skills={HARDWARE_SKILLS}
            sectionTitle="Technical Stack"
            categoryTitles={{
              blockchain: "Electronics & Embedded",
              frontend: "Mechanical / CAD",
              focus: "Software",
            }}
          />

          <WorkExperience
            work={HARDWARE_WORK}
            title="Selected Projects"
          />

          <HardwareEducationSection />

          <Projects
            projects={HARDWARE_PROJECTS}
            title="Additional Experience"
          />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
