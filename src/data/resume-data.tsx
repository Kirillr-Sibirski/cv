import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { SendIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "karl ryberg",
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
    "engineering student and full-stack blockchain developer focused on defi strategies, lending and leverage mechanics, and simplifying onchain ux.",
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
      // {
      //   name: "YouTube",
      //   url: "https://www.youtube.com/watch?v=R8I-8ekBumE",
      //   icon: Youtube,
      // },
    ],
  },
  education: [
    {
      school: "university of twente",
      schoolUrl: "https://www.utwente.nl/en/",
      degree: "bsc advanced technology",
      degreeUrl:
        "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
      start: "sep 2025",
      end: "aug 2028",
      achievements: [
        {
          title: "relevant coursework",
          achievements: [
            "calculus 1, calculus 2, linear algebra, and eaps (matlab).",
          ],
          keywords: [],
        },
        // {
        //   title: "Supplementary Training",
        //   achievements: [
        //     "Completed Cyfrin Updraft courses in Smart Contract Security, Foundry Fundamentals, and Advanced Foundry.",
        //   ],
        //   keywords: [],
        // },
      ],
    },
    // , {
    //   school: "The British School of Barcelona",
    //   degree: "Secondary Education",
    //   start: "Sep 2021",
    //   end: "Jun 2025",
    //   achievements: [
    //     // {
    //     //   title: "A-level",
    //     //   keywords: ["Grades", "A*-E"],
    //     //   achievements: [
    //     //     "EPQ: A*, Russian: A*, Predicted: Physics B, Math A, Computer Science A"
    //     //   ]
    //     // },
    //     // {
    //     //   title: "iGCSE",
    //     //   keywords: ["Grades", "9-4"],
    //     //   achievements: [
    //     //     "Langs: Ru 9, Sp 8, En 7; STEM: Math 7, Comp 7, Sci 6:6; Humanities: Geo 7, Bus 6, Lit 4"
    //     //   ]
    //     // },
    //     // {
    //     //   title: "Duke of Edinburgh",
    //     //   keywords: ["Expedition"],
    //     //   achievements: [
    //     //     "Four journeys in the Catalonia wilderness, walking 20km each day with 15kg backpacks"
    //     //   ]
    //     // },
    //     // {
    //     //   title: "MUN",
    //     //   keywords: ["Debate"],
    //     //   achievements: [
    //     //     "Drafted UN resolution clause on post-partum healthcare",
    //     //   ]
    //     // },
    //     // {
    //     //   title: "Public Speaking",
    //     //   keywords: ["4Voices"],
    //     //   achievements: [
    //     //     "Gave a speech at CosmoCaixa venue in Barcelona to 300 people on brain chips"
    //     //   ]
    //     // }
    //   ]
    // }
  ],
  work: [
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
  skills: {
    blockchain: [
      { label: "solidity", url: "https://soliditylang.org/" },
      { label: "foundry", url: "https://www.getfoundry.sh/" },
      { label: "viem", url: "https://v1.viem.sh/docs/getting-started.html" },
      { label: "ethers.js", url: "https://docs.ethers.org/v6/" },
      { label: "thirdweb", url: "https://portal.thirdweb.com/" },
      { label: "chainlink", url: "https://docs.chain.link/" },
      { label: "pyth", url: "https://docs.pyth.network/" },
      { label: "world id", url: "https://docs.world.org/world-id" },
      { label: "tenderly virtual testnet", url: "https://docs.tenderly.co/" },
      { label: "sui ts sdk", url: "https://sdk.mystenlabs.com/typescript" },
      { label: "radix dapp toolkit", url: "https://docs.radixdlt.com/" },
    ],
    frontend: [
      {
        label: "javascript/typescript",
        url: "https://www.typescriptlang.org/docs/",
      },
      { label: "react", url: "https://react.dev/learn" },
      { label: "next.js", url: "https://nextjs.org/docs" },
      { label: "vite", url: "https://vite.dev/guide/" },
      { label: "tailwind css", url: "https://tailwindcss.com/docs" },
      { label: "shadcn/ui", url: "https://ui.shadcn.com/docs" },
      { label: "ui/ux design", url: "" },
    ],
    focus: [
      { label: "defi strategies", url: "" },
      { label: "lending functionalities", url: "" },
      {
        label: "leverage w/ flash loans",
        url: "",
      },
      { label: "simpler ux", url: "" },
      { label: "evm-based chains", url: "" },
    ],
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
      techStack: ["euler", "sommelier finance", "defi", "leverage"],
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
      techStack: ["pyth", "chainlink", "world id"],
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
      hackathon: "ethglobal hackmoney 2026",
      hackathonUrl: "https://ethglobal.com/events/hackmoney2026",
      projectName: "oshio",
      projectUrl: "https://ethglobal.com/showcase/oshio-99nv7",
      achievement: "sui bounty | $1k",
      teamSize: 1,
      role: "frontend",
      description:
        "margin-trading app on sui focused on simpler ux, using deepbook and pyth to make leveraged trading more accessible.",
      techStack: ["sui", "deepbook", "pyth", "next.js"],
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
    {
      hackathon: "chainlink convergence",
      hackathonUrl: "https://chain.link/hackathon",
      projectName: "aletheia",
      projectUrl: "https://aletheia-gilt.vercel.app",
      achievement: "world id | $500",
      teamSize: 1,
      role: "full stack",
      description:
        "prediction markets with ai consensus resolution and market creation (+ sybil resistance).",
      techStack: ["tenderly", "chainlink cre", "world id"],
    },
  ],
  projects: [
    {
      title: "hormesis keyboard",
      projectUrl: "https://github.com/Kirillr-Sibirski/hormesis-keyboard",
      techStack: [
        {
          label: "kicad",
          url: "https://www.kicad.org/",
        },
        {
          label: "onshape (cad)",
          url: "https://www.onshape.com/en/",
        },
        {
          label: "firmware",
          url: "https://github.com/Kirillr-Sibirski/zmk-config-hormesis-v2",
        },
      ],
      description:
        "custom low-profile split diy keyboard with fully custom pcb, case geometry, and zmk firmware configuration.",
    },
    {
      title: "active suspension system",
      projectUrl:
        "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
      techStack: [
        {
          label: "c++",
          url: "https://isocpp.org/",
        },
        {
          label: "arduino",
          url: "https://www.arduino.cc/",
        },
        {
          label: "pid",
          url: "https://en.wikipedia.org/wiki/PID_controller",
        },
        {
          label: "3d printing",
          url: "https://en.wikipedia.org/wiki/3D_printing",
        },
      ],
      description:
        "built an active suspension system for a 1/10 scale rc car, using sensors and pid control to reduce rollovers during aggressive cornering.",
    },
  ],
} as const;
