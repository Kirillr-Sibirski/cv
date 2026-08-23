import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { SendIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "kirill rybkov",
  initials: "kr",
  locations: [
    {
      label: "🇳🇱 netherlands",
      url: "https://www.google.com/maps/place/Enschede",
    },
    {
      label: "🇪🇸 spain",
      url: "https://www.google.com/maps/place/Barcelona,+Spain",
    },
  ],
  about:
    "bsc advanced technology student @ university of twente. building risk on radar, an evidence-backed fmea platform for reliability engineering. experience across embedded electronics, control systems, cad, and full-stack product work.",
  avatarUrl: "./image.png",
  contact: {
    email: "",
    social: [
      {
        name: "github",
        url: "https://github.com/Kirillr-Sibirski",
        icon: GitHubIcon,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/kirillrybkov/",
        icon: LinkedInIcon,
      },
      {
        name: "x",
        url: "https://x.com/krlberg",
        icon: XIcon,
      },
      {
        name: "telegram",
        url: "https://t.me/krlberg",
        icon: SendIcon,
      },
    ],
  },

  /**
   * Skill groups, ordered so the engineering side reads first. The blockchain
   * row is kept deliberately short: it is prior experience now, not the pitch.
   */
  skillCategories: [
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
        {
          label: "pwm / analog / digital i/o",
          url: "https://docs.arduino.cc/",
        },
        {
          label: "i2c sensors",
          url: "https://learn.sparkfun.com/tutorials/i2c/all",
        },
        {
          label: "signal conditioning",
          url: "https://en.wikipedia.org/wiki/Signal_conditioning",
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
        { label: "c/c++", url: "https://isocpp.org/" },
        { label: "typescript", url: "https://www.typescriptlang.org/docs/" },
        { label: "react", url: "https://react.dev/learn" },
        { label: "next.js", url: "https://nextjs.org/docs" },
        {
          label: "matlab",
          url: "https://www.mathworks.com/products/matlab.html",
        },
        {
          label: "simulink",
          url: "https://www.mathworks.com/products/simulink.html",
        },
        { label: "git", url: "https://github.com/Kirillr-Sibirski" },
      ],
    },
    {
      id: "blockchain",
      title: "blockchain (prior focus)",
      skills: [
        { label: "solidity", url: "https://soliditylang.org/" },
        { label: "foundry", url: "https://www.getfoundry.sh/" },
        { label: "viem", url: "https://v1.viem.sh/docs/getting-started.html" },
        { label: "radix dapp toolkit", url: "https://docs.radixdlt.com/" },
      ],
    },
  ],

  /**
   * Paid / founded work, newest first. Hardware and reliability lead; the
   * Lattic3 entry is carried over verbatim from the old crypto page.
   */
  work: [
    {
      company: "good thinking",
      link: undefined,
      badges: ["TODO"],
      title: "TODO — role",
      start: "TODO",
      end: "TODO",
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>
              placeholder — send me the role, dates, and 2-3 bullets on what you
              actually did here and i will write this properly.
            </li>
          </ul>
        </div>
      ),
    },
    {
      company: "risk on radar",
      link: "https://riskonradar.com",
      badges: ["fmea", "reliability", "next.js", "typescript"],
      title: "founder",
      start: "2026",
      end: undefined,
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>
              building an fmea intelligence platform for reliability and quality
              engineering teams, grounded in peer-reviewed failure literature
              rather than whoever happens to be in the room.
            </li>
            <li>
              structures papers, standards, industrial reports, and ndt records
              into reusable failure modes, causes, effects, and controls.
            </li>
            <li>
              models subsystem dependencies and propagation paths so failure
              patterns transfer across operating contexts and domains.
            </li>
          </ul>
        </div>
      ),
    },
    {
      company: "lattic3 finance",
      link: "https://lattic3.xyz",
      articleLink: "https://www.radixdlt.com/blog/meet-the-project-lattic3",
      badges: ["defi", "strategies", "flash loans", "next.js", "radix"],
      title: "co-founder",
      start: "oct 2024",
      end: "aug 2025",
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>
              co-founded lattic3 with one other engineer, secured $20k in radix
              foundation grants, and launched the protocol on radix mainnet.
            </li>
            <li>
              built the next.js app frontend and protocol-facing user flows for
              strategy discovery, deposits, and position management.
            </li>
            <li>
              lattic3 is a defi strategies protocol; the first strategy used
              flash loans to build leveraged positions across lending platforms.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  /**
   * Engineering projects, formerly the body of the hardware page.
   */
  engineeringProjects: [
    {
      company: "active suspension system",
      link: "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
      badges: ["arduino", "imu", "pid", "cad", "3d printing"],
      title: "completed during epq a-level",
      start: "",
      end: "",
      description: (
        <p>
          built an active anti-roll system for a 1/10 off-road rc car, aimed at
          reducing rollover on uneven terrain rather than just upgrading the
          suspension. designed the linkage and printed parts, wired an arduino
          nano with an mpu6050 imu, and wrote the pid in c/c++ to turn
          orientation data into servo-driven ride-height adjustment. most of the
          work was getting the loop to behave in the real world: packaging the
          electronics on the chassis, powering from the rc receiver, and tuning
          the response on slopes and rough surfaces.
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
          fixed-wing drone aimed at early wildfire detection in catalonia. my
          part was the electronics and physical build: integrating the speedybee
          flight controller, power system, gps, receiver, and raspberry pi
          payload, then turning that into an airframe that could survive and
          fly. it forced real trade-offs between structure, weight,
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
          testing, focusing on the electronics and software: signal conditioning
          via an integrator circuit, arduino-based readout, and
          calibration/testing for the final prototype. it sat between theory and
          hardware, so the mechanical model, analogue circuit behaviour, and
          measured shaker-test results all had to line up.
        </p>
      ),
    },
  ],

  projects: [
    {
      title: "hormesis keyboard",
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
        "custom low-profile split keyboard with an original case in onshape, a routed pcb in kicad, and a zmk firmware setup. combines cad, electronics, pcb layout, and firmware in one build.",
    },
  ],

  education: {
    university: {
      school: "university of twente",
      schoolUrl: "https://www.utwente.nl/en/",
      degree: "bsc advanced technology",
      degreeUrl:
        "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
      start: "sep 2025",
      end: "aug 2028",
      gpa: "7.2 / 10",
      courseGroups: [
        {
          title: "math & software",
          courses: [
            { name: "calculus 1 / 2", ec: "8 ec" },
            { name: "programming skills", ec: "3 ec" },
          ],
        },
        {
          title: "electronics",
          courses: [
            { name: "basic electronics", ec: "4 ec" },
            { name: "accelerom. project", ec: "4 ec" },
          ],
        },
        {
          title: "engineering",
          courses: [
            { name: "mechanics", ec: "4 ec" },
            { name: "system dynamics", ec: "4 ec" },
          ],
        },
        {
          title: "materials",
          courses: [
            { name: "material properties", ec: "3 ec" },
            { name: "polymer materials", ec: "3 ec" },
          ],
        },
      ],
    },
    secondary: {
      school: "the british school of barcelona",
      schoolUrl: "https://www.britishschoolbarcelona.com/",
      degree: "a-levels & igcse",
      degreeUrl: "",
      start: "sep 2021",
      end: "jun 2025",
      // TODO: confirm grades before this goes anywhere near a job application.
      courseGroups: [
        {
          title: "a-level",
          courses: [
            { name: "epq", ec: "A*" },
            { name: "russian", ec: "A*" },
            { name: "mathematics", ec: "A" },
            { name: "computer science", ec: "A" },
            { name: "physics", ec: "B" },
          ],
        },
        {
          title: "igcse",
          courses: [
            { name: "russian", ec: "9" },
            { name: "spanish", ec: "8" },
            { name: "english", ec: "7" },
            { name: "mathematics", ec: "7" },
            { name: "computer science", ec: "7" },
            { name: "geography", ec: "7" },
            { name: "science (dual)", ec: "6" },
            { name: "business", ec: "6" },
          ],
        },
      ],
    },
  },

  /**
   * Trimmed from eight to the four strongest results, since the crypto work is
   * now supporting evidence rather than the headline.
   */
  hackathons: [
    {
      hackathon: "ethlisbon 2022",
      hackathonUrl: "https://ethlisbon.org/",
      projectName: "lekker finance",
      projectUrl:
        "https://taikai.network/ethlisbon/hackathons/ethlisbon-2022/projects/cl9tpj350446301zcoiepyje5/idea",
      achievement: "finalist | $10k",
      teamSize: 4,
      role: "design",
      description: "one-click leveraged futures platform.",
      techStack: ["euler", "defi", "leverage"],
    },
    {
      hackathon: "ebc10 radix",
      hackathonUrl: "https://eblockchainconvention.com/hackathon/",
      projectName: "radish (later lattic3)",
      projectUrl: "https://github.com/Lattic3-RDX/lending-dapp",
      achievement: "2nd place | $5k",
      teamSize: 2,
      role: "frontend",
      description: "multi-collateralized lending dapp built on radix.",
      techStack: ["next.js", "radix", "lending"],
    },
    {
      hackathon: "buildup #2",
      hackathonUrl:
        "https://medium.com/lukso/buildup-2-hackathon-winners-0f784793bc43",
      projectName: "lukso lending protocol",
      projectUrl: "https://llp-woad.vercel.app/",
      achievement: "3rd place | 5k€",
      teamSize: 1,
      role: "full stack",
      description: "early lending protocol built on lukso.",
      techStack: ["solidity", "lukso", "lending"],
    },
    {
      hackathon: "ethoxford 2025",
      hackathonUrl: "https://ethoxford.io",
      projectName: "protein mango",
      projectUrl: "https://dorahacks.io/buidl/22626",
      achievement: "flare bounties | $3k",
      teamSize: 3,
      role: "frontend",
      description:
        "parametric earthquake insurance with automated claims via zkps.",
      techStack: ["flare", "mina"],
    },
  ],
} as const;
