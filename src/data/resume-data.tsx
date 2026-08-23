import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { SendIcon } from "lucide-react";

/**
 * House style: body copy stays lowercase, but acronyms are written uppercase
 * and rendered as authored (the global lowercase text-transform was removed so
 * GPA, PID, CAD and friends survive).
 */
export const RESUME_DATA = {
  name: "kirill rybkov",
  initials: "kr",
  locations: [
    {
      label: "🇳🇱 netherlands",
      url: "https://www.google.com/maps/place/Enschede",
    },
  ],
  about:
    "BSc advanced technology student @ university of twente. experience across embedded electronics, control systems, CAD, and full-stack product work.",
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

  skillCategories: [
    {
      id: "embedded",
      title: "electronics & embedded",
      skills: [
        { label: "arduino", url: "https://www.arduino.cc/" },
        {
          label: "ESP32",
          url: "https://www.espressif.com/en/products/socs/esp32",
        },
        { label: "raspberry pi", url: "https://www.raspberrypi.com/" },
        {
          label: "PWM / analog / digital I/O",
          url: "https://docs.arduino.cc/",
        },
        {
          label: "I2C sensors",
          url: "https://learn.sparkfun.com/tutorials/i2c/all",
        },
        {
          label: "signal conditioning",
          url: "https://en.wikipedia.org/wiki/Signal_conditioning",
        },
        {
          label: "RC electronics",
          url: "https://en.wikipedia.org/wiki/Electronic_speed_control",
        },
      ],
    },
    {
      id: "mechanical",
      title: "mechanical / CAD",
      skills: [
        { label: "onshape", url: "https://www.onshape.com/en/" },
        { label: "solidworks", url: "https://www.solidworks.com/" },
        { label: "kicad", url: "https://www.kicad.org/" },
        {
          label: "3D printing",
          url: "https://en.wikipedia.org/wiki/3D_printing",
        },
      ],
    },
    {
      id: "software",
      title: "software",
      skills: [
        { label: "python", url: "https://www.python.org/" },
        { label: "C/C++", url: "https://isocpp.org/" },
        { label: "typescript", url: "https://www.typescriptlang.org/docs/" },
        { label: "react", url: "https://react.dev/learn" },
        { label: "next.js", url: "https://nextjs.org/docs" },
        {
          label: "MATLAB",
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
      title: "blockchain",
      skills: [
        { label: "solidity", url: "https://soliditylang.org/" },
        { label: "foundry", url: "https://www.getfoundry.sh/" },
        { label: "viem", url: "https://v1.viem.sh/docs/getting-started.html" },
        { label: "radix dapp toolkit", url: "https://docs.radixdlt.com/" },
      ],
    },
  ],

  // Reverse-chronological by start date.
  work: [
    {
      company: "RISE",
      link: "https://www.riseteam.nl/",
      badges: ["C++", "F Prime"],
      title: "software member",
      start: "sep 2026",
      end: undefined,
      description:
        "developing various systems required for the operations of a model rocket using the F Prime framework.",
    },
    {
      company: "risk on radar",
      link: "https://riskonradar.com",
      articleLink: "https://www.linkedin.com/company/riskonradar/",
      articleLabel: "linkedin",
      badges: ["FMEA", "reliability", "next.js", "typescript"],
      title: "co-founder",
      start: "apr 2026",
      end: undefined,
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>
              building an FMEA intelligence platform for reliability and quality
              engineering teams, grounded in peer-reviewed failure literature
              rather than whoever happens to be in the room.
            </li>
            <li>
              structures papers, standards, industrial reports, and NDT records
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
      company: "lattic3",
      link: "https://lattic3.xyz",
      articleLink: "https://www.radixdlt.com/blog/meet-the-project-lattic3",
      articleLabel: "radix feature",
      badges: ["DeFi", "flash loans", "next.js"],
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
              lattic3 is a DeFi strategies protocol; the first strategy used
              flash loans to build leveraged positions across lending platforms.
            </li>
          </ul>
        </div>
      ),
    },
  ],

  engineeringProjects: [
    {
      company: "active suspension system",
      link: "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
      badges: ["arduino", "IMU", "PID", "CAD", "3D printing"],
      title: "completed during EPQ A-Level",
      start: "",
      end: "",
      description: (
        <p>
          active anti-roll system for a 1/10 off-road RC car. designed the
          linkage and printed parts, wired an arduino nano to an MPU6050 IMU,
          and wrote the PID in C/C++ driving servo ride-height adjustment. the
          hard part was the real world — packaging the electronics on the
          chassis and tuning the loop on slopes and rough ground.
        </p>
      ),
    },
    {
      company: "autonomous fire detection aircraft",
      link: undefined,
      badges: ["UAV", "flight controller", "GPS", "raspberry pi"],
      title: "high school team project",
      start: "",
      end: "",
      description: (
        <p>
          fixed-wing drone for early wildfire detection in catalonia. i owned
          the electronics and physical build: speedybee flight controller, power
          system, GPS, receiver, and a raspberry pi payload, integrated into an
          airframe light enough to fly and tough enough to land.
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
          piezoelectric accelerometer for subwoofer testing. built the
          electronics and software side — integrator-based signal conditioning,
          arduino readout, and calibration — then reconciled the mechanical
          model against measured shaker-test results.
        </p>
      ),
    },
  ],

  education: {
    university: {
      school: "university of twente",
      schoolUrl: "https://www.utwente.nl/en/",
      degree: "BSc advanced technology",
      degreeUrl:
        "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
      start: "sep 2025",
      end: "aug 2028",
      gpa: "7.2 / 10",
      courseGroups: [],
    },
    secondary: {
      school: "the british school of barcelona",
      schoolUrl: "https://www.britishschoolbarcelona.com/",
      degree: "A-Levels & IGCSE",
      degreeUrl: "",
      start: "sep 2021",
      end: "jun 2025",
      summary: "A*A*AAA",
      courseGroups: [],
    },
  },

  /**
   * Year 1 is taken from the transcript of records; year 2 semester 1 from the
   * 2025-2026 AT programme curriculum. Grades are deliberately not stored here.
   */
  curriculum: {
    completed: {
      label: "year 1",
      credits: 60,
      groups: [
        {
          id: "maths",
          title: "mathematics & computation",
          blurb:
            "the analytical backbone — continuous maths, linear systems, and error-aware programming.",
          courses: [
            { name: "calculus 1", ec: 4 },
            { name: "calculus 2", ec: 4 },
            { name: "linear algebra", ec: 3 },
            { name: "error analysis & programming skills", ec: 3 },
          ],
        },
        {
          id: "mechanics",
          title: "mechanics & dynamics",
          blurb:
            "how bodies move and how systems respond over time, with the lab work to match.",
          courses: [
            { name: "mechanics", ec: 4 },
            { name: "mechanics lab", ec: 4 },
            { name: "system dynamics 1", ec: 3 },
            { name: "system dynamics 2", ec: 4 },
          ],
        },
        {
          id: "electronics",
          title: "electronics & instrumentation",
          blurb:
            "measuring physical quantities and conditioning the signals that come back.",
          courses: [
            { name: "basic electronics and instrumentation", ec: 4 },
            { name: "project accelerometer", ec: 4 },
          ],
        },
        {
          id: "materials",
          title: "materials & physics",
          blurb:
            "what materials are made of, how they behave under load and heat, and why they fail.",
          courses: [
            { name: "structures and properties of materials", ec: 3 },
            { name: "properties of polymer materials", ec: 3 },
            { name: "quantum matter and devices", ec: 4 },
            { name: "classical thermodynamics", ec: 4 },
            { name: "diffraction lab", ec: 1 },
          ],
        },
        {
          id: "projects",
          title: "projects & engineering in context",
          blurb:
            "semester-long builds and the strand on engineering against real constraints.",
          courses: [
            { name: "project energy transition", ec: 6 },
            { name: "challenges in science and engineering 1", ec: 2 },
            { name: "S1: mechatronics", ec: 0 },
            { name: "S2: sustainability — materials and energy", ec: 0 },
          ],
        },
      ],
    },
    upcoming: {
      label: "year 2 · semester 1",
      title: "signal analysis",
      credits: 15,
      courses: [
        { name: "signals", ec: 4 },
        { name: "models", ec: 4 },
        { name: "project SMS", ec: 3 },
      ],
      choices: [
        {
          title: "elective",
          ec: "4-5 EC",
          options: [
            "engineering solid mechanics",
            "computational thinking",
            "classical mechanics",
            "electronics",
          ],
        },
        {
          title: "elective module",
          ec: "module 6",
          options: [
            "materials science and engineering",
            "transport phenomena",
            "systems and control",
            "software systems",
          ],
        },
      ],
    },
  },

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
      techStack: ["euler", "sommelier finance", "DeFi", "leverage"],
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
      hackathon: "xstocks cannes",
      hackathonUrl: "https://xstocks-market-open.devpost.com/",
      projectName: "paragon",
      projectUrl: "https://devpost.com/software/paragon-h8isc4",
      achievement: "discretionary prize | $3.3k",
      teamSize: 3,
      role: "full stack",
      description:
        "first-ever liquidation-free tokenized equity leverage platform on the ink chain.",
      techStack: ["typescript", "react", "full stack"],
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
        "parametric earthquake insurance with automated claims via ZKPs.",
      techStack: ["flare", "mina"],
    },
    {
      hackathon: "ethglobal brussels",
      hackathonUrl: "https://ethglobal.com/events/brussels",
      projectName: "scrbl",
      projectUrl: "https://ethglobal.com/showcase/scrbl-6d9uh",
      achievement: "worldcoin pool prize",
      teamSize: 3,
      role: "solidity",
      description:
        "under-collateralized lending platform leveraging worldcoin identity.",
      techStack: ["pyth", "chainlink", "World ID"],
    },
    {
      hackathon: "ethglobal hackmoney 2026",
      hackathonUrl: "https://ethglobal.com/events/hackmoney2026",
      projectName: "oshio",
      projectUrl: "https://ethglobal.com/showcase/oshio-99nv7",
      achievement: "sui bounty | $1k",
      teamSize: 1,
      role: "frontend",
      description:
        "margin-trading app on sui focused on simpler UX, using deepbook and pyth to make leveraged trading more accessible.",
      techStack: ["sui", "deepbook", "pyth", "next.js"],
    },
    {
      hackathon: "chainlink convergence",
      hackathonUrl: "https://chain.link/hackathon",
      projectName: "aletheia",
      projectUrl: "https://aletheia-gilt.vercel.app",
      achievement: "World ID | $500",
      teamSize: 1,
      role: "full stack",
      description:
        "prediction markets with AI consensus resolution and market creation (+ sybil resistance).",
      techStack: ["tenderly", "chainlink cre", "World ID"],
    },
  ],
} as const;
