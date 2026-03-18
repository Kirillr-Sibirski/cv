import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Kirill Rybkov",
  initials: "KR",
  locations: [
    {
      label: "🇳🇱 The Netherlands",
      url: "https://www.google.com/maps/place/Enschede",
    },
    {
      label: "🇪🇸 Spain",
      url: "https://www.google.com/maps/place/Barcelona,+Spain",
    },
  ],
  about:
    "Engineering student and full-stack blockchain developer focused on DeFi strategies, lending and leverage mechanics, and simplifying onchain UX.",
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
        url: "https://x.com/krlberg",
        icon: XIcon,
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
      school: "University of Twente",
      schoolUrl: "https://www.utwente.nl/en/",
      degree: "BSc Advanced Technology",
      degreeUrl:
        "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
      start: "Sep 2025",
      end: "Aug 2028",
      achievements: [
        {
          title: "Relevant Coursework",
          achievements: [
            "Calculus 1, Calculus 2, Linear Algebra, and EAPS (MATLAB).",
          ],
          keywords: [],
        },
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
      company: "Lattic3 Finance",
      link: "https://lattic3.xyz",
      articleLink: "https://www.radixdlt.com/blog/meet-the-project-lattic3",
      badges: ["DeFi", "Strategies", "Flash Loans", "Next.js", "Radix"],
      title: "Co-Founder",
      start: "Oct 2024",
      end: "Aug 2025",
      description: (
        <div>
          <ul className="list-inside list-disc">
            <li>
              Co-founded Lattic3 with one other engineer, secured $20k in Radix
              Foundation grants, and launched the protocol on Radix mainnet.
            </li>
            <li>
              Built the Next.js app frontend, developed the product UX, helped
              design the protocol strategies, and supported marketing.
            </li>
            <li>
              Lattic3 is a DeFi strategies protocol; the first strategy used
              flash loans to build leveraged positions across lending platforms.
            </li>
          </ul>
        </div>
      ),
    },
  ],
  skills: {
    blockchain: [
      { label: "Solidity", url: "https://soliditylang.org/" },
      { label: "Foundry", url: "https://www.getfoundry.sh/" },
      { label: "viem", url: "https://v1.viem.sh/docs/getting-started.html" },
      { label: "ethers.js", url: "https://docs.ethers.org/v6/" },
      { label: "thirdweb", url: "https://portal.thirdweb.com/" },
      { label: "Chainlink", url: "https://docs.chain.link/" },
      { label: "Pyth", url: "https://docs.pyth.network/" },
      { label: "World ID", url: "https://docs.world.org/world-id" },
      { label: "Tenderly Virtual TestNet", url: "https://docs.tenderly.co/" },
      { label: "Sui TS SDK", url: "https://sdk.mystenlabs.com/typescript" },
      { label: "Radix dApp Toolkit", url: "https://docs.radixdlt.com/" }
    ],
    frontend: [
      {
        label: "JavaScript/TypeScript",
        url: "https://www.typescriptlang.org/docs/",
      },
      { label: "React", url: "https://react.dev/learn" },
      { label: "Next.js", url: "https://nextjs.org/docs" },
      { label: "Vite", url: "https://vite.dev/guide/" },
      { label: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { label: "shadcn/ui", url: "https://ui.shadcn.com/docs" },
      { label: "UI/UX Design", url: "" },
    ],
    focus: [
      { label: "DeFi strategies", url: "" },
      { label: "Lending functionalities", url: "" },
      {
        label: "Leverage w/ flash loans",
        url: "",
      },
      { label: "Simpler UX", url: "" },
      { label: "EVM-based chains", url: "" },
    ],
  },
  hackathons: [
    {
      hackathon: "ETHLisbon 2022",
      hackathonUrl: "https://ethlisbon.org/",
      projectName: "Lekker Finance",
      projectUrl:
        "https://taikai.network/ethlisbon/hackathons/ethlisbon-2022/projects/cl9tpj350446301zcoiepyje5/idea",
      achievement: "Finalist | $10k",
      teamSize: 4,
      role: "Design",
      description: "One-click leveraged futures platform.",
      techStack: ["Euler", "Sommelier Finance", "DeFi", "Leverage"],
    },
    {
      hackathon: "ETHGlobal Brussels",
      hackathonUrl: "https://ethglobal.com/events/brussels",
      projectName: "SCRBL",
      projectUrl: "https://ethglobal.com/showcase/scrbl-6d9uh",
      achievement: "Worldcoin Pool Prize",
      teamSize: 3,
      role: "Solidity",
      description:
        "Under-collateralized lending platform leveraging Worldcoin identity.",
      techStack: ["Pyth", "Chainlink", "World ID"],
    },
    {
      hackathon: "EBC10 Radix",
      hackathonUrl: "https://eblockchainconvention.com/hackathon/",
      projectName: "Radish (later Lattic3)",
      projectUrl: "https://github.com/Lattic3-RDX/lending-dapp",
      achievement: "2nd Place | $5k",
      teamSize: 2,
      role: "Frontend",
      description: "Lending dApp built on Radix.",
      techStack: ["Next.js", "Radix", "Lending"],
    },
    {
      hackathon: "BuildUp #2",
      hackathonUrl:
        "https://medium.com/lukso/buildup-2-hackathon-winners-0f784793bc43",
      projectName: "Lukso Lending Protocol",
      projectUrl: "https://llp-woad.vercel.app/",
      achievement: "3rd Place | 5k€",
      teamSize: 1,
      role: "Full stack",
      description: "Early lending protocol built on Lukso.",
      techStack: ["Solidity", "Lukso", "Lending"],
    },
    // {
    //   hackathon: "Sui HackMoney",
    //   hackathonUrl: "https://sui.io/hackathon",
    //   projectName: "Oshio",
    //   projectUrl: "https://ethglobal.com/showcase/oshio-99nv7",
    //   achievement: "Sui Bounty | $1k",
    //   teamSize: 1,
    //   role: "Frontend / product",
    //   description:
    //     "Extremely user-friendly margin-trading app on Sui using DeepBook V3 SDK and Pyth.",
    //   techStack: ["Sui", "Sui DeepBook SDK", "Pyth", "Claude Code"],
    // },
    {
      hackathon: "ETHOxford 2025",
      hackathonUrl: "https://ethoxford.io",
      projectName: "Protein Mango",
      projectUrl: "https://dorahacks.io/buidl/22626",
      achievement: "Flare Bounties | $3k",
      teamSize: 3,
      role: "Frontend",
      description: "Parametric earthquake insurance with automated claims via ZKPs.",
      techStack: ["Flare", "Mina"],
    },
    {
      hackathon: "Chainlink Convergence",
      hackathonUrl: "https://chain.link/hackathon",
      projectName: "Aletheia",
      projectUrl: "https://aletheia-gilt.vercel.app",
      achievement: "Pending...",
      teamSize: 1,
      role: "Full stack",
      description:
        "Prediction markets with AI consensus resolution and market creation (+ sybil resistance).",
      techStack: ["Tenderly", "Chainlink CRE", "World ID"],
    },
  ],
  projects: [
    {
      title: "Hormesis Keyboard",
      projectUrl: "https://github.com/Kirillr-Sibirski/hormesis-keyboard",
      techStack: [
        {
          label: "KiCad",
          url: "https://www.kicad.org/",
        },
        {
          label: "Onshape (CAD)",
          url: "https://www.onshape.com/en/",
        },
        {
          label: "Firmware",
          url: "https://github.com/Kirillr-Sibirski/zmk-config-hormesis-v2",
        },
      ],
      description:
        "Custom low-profile split DIY keyboard; designing the PCB, case, and firmware."
    },
    {
      title: "Active Suspension System",
      projectUrl: "https://drive.google.com/file/d/1RVng1U3ozTkHGZV1VvMJidTT9ehvyb1P/view?usp=sharing",
      techStack: [
        {
          label: "C++",
          url: "https://isocpp.org/",
        },
        {
          label: "Arduino",
          url: "https://www.arduino.cc/",
        },
        {
          label: "PID",
          url: "https://en.wikipedia.org/wiki/PID_controller",
        },
        {
          label: "3D Printing",
          url: "https://en.wikipedia.org/wiki/3D_printing",
        },
      ],
      description:
        "Built an active suspension system for a 1/10 scale RC car to prevent rollovers."
    },
  ],
} as const;
