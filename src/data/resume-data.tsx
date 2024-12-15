import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kirill Rybkov",
  initials: "KR",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/Barcelona",
  about: "Full-Stack Blockchain Developer & Mechatronics Enthusiast",
  summary: (
    <>
      Builder of bold ideas. From pioneering blockchain solutions to engineering electronics, turns concepts into reality. The journey spans software, hardware, and everything in between—always with an eye on solving problems that matter. Speed and scalability are the guiding principles.
    </>
  ),
  avatarUrl: "./image.png",
  contact: {
    email: "kirill.rybkov@outlook.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Kirillr-Sibirski",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kirillrybkov/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/kirillrybkov",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "The British School of Barcelona",
      degree: "Secondary Education",
      start: "Sep 2021",
      end: "Jun 2025",
      achievements: [
        {
          title: "A-level",
          keywords: ["Grades", "A* to E"],
          achievements: [
            "Physics: A",
            "Mathematics: A",
            "Computer Science: A",
            "EPQ: A*",
            "Russian: A*"
          ]
        },
        {
          title: "Duke of Edinburgh Award",
          keywords: ["Hiking", "Expedition", "Bronze", "Silver"],
          achievements: [
            "Completed 4 challenging journeys in the Catalonia wilderness, walking 20km each day with 15kg backpacks"
          ]
        },
        {
          title: "Model United Nations",
          keywords: ["International Relations", "BIMUN"],
          achievements: [
            "Represented Tanzania in UNWOMEN Council; drafted a clause on post-partum contraceptives that was passed into the final resolution",
          ]
        },
        {
          title: "Public Speaking",
          keywords: ["Public Speaking", "4Voices"],
          achievements: [
            "Gave a speech at CosmoCaixa venue in Barcelona to 300 people on brain chips"
          ]
        }
      ]
    }
  ],
  work: [
    {
      company: "Lattic3 Finance",
      badges: ["DeFi", "Radix", "Next.js", "Shadcn/UI"],
      title: "Co-Founder",
      start: "Oct 2024",
      end: null,
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>Leading frontend development to create a user-centric interface</li>
          </ul>
        </div>
      ),
    },
    {
      company: "CalmScent & BorderlessWave",
      badges: ["SMMA", "Dropshipping", "Shopify", "LLC"],
      title: "Entrepreneur",
      start: "Feb 2023",
      end: "Sep 2023",
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>Started as a dropshipping store specializing in oil diffusers, later pivoted to a X management agency focused on tech startups</li>
          </ul>
        </div>
      ),
    },
    {
      company: "Ragemp.pro",
      badges: ["C#", "JavaScript", "RAGE:MP API"],
      title: "Freelance Game Developer",
      start: "Oct 2021",
      end: "Feb 2022",
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>Developed a range of game functionalities for GTA5 Online servers</li>
          </ul>
        </div>
      ),
    },
  ],
  skills: {
    soft: [
      "Problem Solving",
      "Public Speaking",
      "Leadership",
      "Team work",
    ],
    tech: [
      "React/Next.js",
      "JavaScript/TypeScript",
      "Solidity",
      "ethers.js/web3.js",
      "Python",
      "C/C++",
      "CAD",
      "3D Printing",
    ],
  },
  hackathons: [
    {
      hackathon: "EBC10 Radix",
      hackathonUrl: "https://eblockchainconvention.com/hackathon/",
      projectName: "Radish",
      projectUrl: "https://github.com/Lattic3-RDX/lending-dapp",
      achievement: "2nd Place | $5,000",
      teamSize: 2,
      role: "Front-end dev",
      description: "Multi-collateralized lending protocol."
    },
    {
      hackathon: "ETHGlobal Brussels",
      hackathonUrl: "https://ethglobal.com/events/brussels",
      projectName: "SCRBL",
      projectUrl: "https://ethglobal.com/showcase/scrbl-6d9uh",
      achievement: "Worldcoin Pool Prize",
      teamSize: 3,
      role: "Solidity dev",
      description: "Uncollateralized lending platform leveraging Worlcoin onchain identity."
    },
    {
      hackathon: "BuildUp #2",
      hackathonUrl: "https://app.buidlbox.io/lukso/build-up-2",
      projectName: "Lukso Lending Protocol (LLP)",
      projectUrl: "https://app.buidlbox.io/projects/llp?path=projects%2Fllp",
      achievement: "3rd place | Blue Sky Category | 5,000 EUR",
      teamSize: 1,
      role: "Full-stack dev",
      description: "First lending platform on the Lukso (L1) blockchain."
    },
    {
      hackathon: "Chainlink SmartCon Hacker House Barcelona 2023",
      hackathonUrl: "https://taikai.network/chainlink/hackathons/hackerhouse-sc23/overview",
      projectName: "DecentPort",
      projectUrl: "https://taikai.network/chainlink/hackathons/hackerhouse-sc23/projects/cln77ho7m004bvx0108a91vv1/idea",
      achievement: "2nd Place | Other Services | $2,500",
      teamSize: 2,
      role: "Solidity dev",
      description: "Decentralized marine port game built on top of Chainlink's VRF."
    },
    {
      hackathon: "ETHLisbon 2022",
      hackathonUrl: "https://ethlisbon.org/",
      projectName: "Lekker Finance",
      projectUrl: "https://taikai.network/ethlisbon/hackathons/ethlisbon-2022/projects/cl9tpj350446301zcoiepyje5/idea",
      achievement: "Finalist | Multiple Prizes | $10,000",
      teamSize: 4,
      role: "Frontend dev, Designer",
      description: "One-click futures leverage platform."
    },
    {
      hackathon: "Filecoin SBS 2022",
      hackathonUrl: "https://paris22.sbs.tech/",
      projectName: "newEnvAI",
      projectUrl: "https://github.com/Kirillr-Sibirski/newEnvAI",
      achievement: "2nd place | $1,000",
      teamSize: 1,
      role: "Full-stack dev",
      description: "Leveraging NASA API to detect wildfires using dynamic NFTs, integrated with OpenAI's API for AI processing (before the AI hype)."
    },
    {
      hackathon: "Road to Web3",
      hackathonUrl: "https://ethglobal.com/",
      projectName: "The Loan Stream",
      projectUrl: "https://ethglobal.com/showcase/the-loan-stream-vp2cc",
      achievement: "Multiple Prizes | $3,000",
      teamSize: 4,
      role: "Frontend dev, Designer",
      description: "First hackathon. Built a lending platform using Superfluid streams."
    }
  ],
  projects: [
    {
      title: "Global Currency Digital Asset",
      projectUrl: undefined,
      techStack: ["Python", "Data Science", "Matplotlib"],
      description: "Created a Python program to analyze global currencies and attempt to create a digital currency based on geometric mean of exchange rates. Concluded that USD would outperform any new digital global currency."
    },
    {
      title: "Active Suspension System",
      projectUrl: "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
      techStack: ["Arduino", "C++", "Electronics", "3D Printing"],
      description: "Built an active suspension system for a 1/10th scale RC vehicle to prevent rollovers in off-road conditions. Used Arduino, gyroscope, and a custom perfboard PCB, with 3D printed parts. Wrote a 6000-word essay showcasing the process."
    },
    {
      title: "AFDA - Autonomous Fire Detection Aircraft",
      projectUrl: undefined,
      techStack: ["Raspberry Pi", "Arduino", "Electronics"],
      description: "Developing a wildfire detection drone for Catalonia, handling electronics integration (SpeedyBee flight computer, motor, telemetry, camera) and collaborating on AI and construction. Engaged in talks with Agrupació de Defensa Forestal."
    },
    {
      title: "Desk Lamp",
      projectUrl: undefined,
      techStack: ["Woodworking", "Metalworking", "Electronics"],
      description: "Designed and built a custom desk lamp with a wooden base, metalworked stand, and electrical work for the bulbs, with a plastic cover."
    },
    {
      title: "Customized 3D Printer",
      projectUrl: undefined,
      techStack: ["Raspberry Pi", "OctoPrint", "3D Printing"],
      description: "Upgraded Creality Ender 3 v3 SE with remote access, auto turn-off, and integrated Octoprint software via Raspberry Pi."
    }
  ]
} as const;
