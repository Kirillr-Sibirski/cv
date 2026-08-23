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
  // Intentionally blank: rewriting this.
  about: "",
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
          label: "FDM 3d printing",
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

  work: [
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
      company: "RISE",
      link: "https://www.riseteam.nl/",
      badges: [],
      title: "software member · part-time",
      start: "",
      end: "",
      description: null,
    },
    {
      company: "lattic3",
      link: "https://lattic3.xyz",
      articleLink: "https://www.radixdlt.com/blog/meet-the-project-lattic3",
      articleLabel: "radix feature",
      badges: ["DeFi", "strategies", "flash loans", "next.js", "radix"],
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
      badges: ["arduino", "IMU", "PID", "CAD", "3d printing"],
      title: "completed during EPQ A-Level",
      start: "",
      end: "",
      description: (
        <p>
          built an active anti-roll system for a 1/10 off-road RC car, aimed at
          reducing rollover on uneven terrain rather than just upgrading the
          suspension. designed the linkage and printed parts, wired an arduino
          nano with an MPU6050 IMU, and wrote the PID in C/C++ to turn
          orientation data into servo-driven ride-height adjustment. most of the
          work was getting the loop to behave in the real world: packaging the
          electronics on the chassis, powering from the RC receiver, and tuning
          the response on slopes and rough surfaces.
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
          fixed-wing drone aimed at early wildfire detection in catalonia. my
          part was the electronics and physical build: integrating the speedybee
          flight controller, power system, GPS, receiver, and raspberry pi
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
      summary: "A-Levels: AAA",
      courseGroups: [],
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
