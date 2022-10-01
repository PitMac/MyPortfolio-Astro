// Projects
import Ecovid from "/assets/projects/ecovid.webp";
import FreeGames from "/assets/projects/freegamesapp.webp";
import Anime from "/assets/projects/animeapp.webp";
import DisneyC from "/assets/projects/disneyCharacters.webp";
import Activity from "/assets/projects/activity.webp";
import RunMD from "/assets/projects/runmd.webp";
import PitKemon from "/assets/projects/pitkemon.webp";
import RunFMD from "/assets/projects/RunFMD.webp";
import FreeGamesRN from "/assets/projects/FreeGamesRN.webp";

// Tech
let Flutter = "/assets/skills/flutter.svg";
let React = "/assets/skills/react.svg";
let Node = "/assets/skills/node.svg";
let Svelte = "/assets/skills/svelte.svg";
let Tauri = "/assets/skills/tauri.svg";
let Astro = "/assets/skills/astro.svg";
let Django = "/assets/skills/django.svg";

// Languages
let Javascript = "/assets/skills/languages/javascript.svg";
let Dart = "/assets/skills/languages/dart.svg";
let Typescript = "/assets/skills/languages/typescript.svg";
let Python = "/assets/skills/languages/python.svg";
let SQL = "/assets/skills/languages/sql.svg";
let HTML = "/assets/skills/languages/html.svg";
let CSS = "/assets/skills/languages/css.svg";

// Tools
let Git = "/assets/skills/tools/git.svg";
let Postgres = "/assets/skills/tools/postgresql.svg";
let Figma = "/assets/skills/tools/figma.svg";
let Postman = "/assets/skills/tools/postman.svg";
let MongoDB = "/assets/skills/tools/mongodb.svg";
let TailwindCSS = "/assets/skills/tools/tailwind.svg";

export const technologies = [
  {
    src: React,
    alt: "React",
  },
  {
    src: Flutter,
    alt: "Flutter",
  },
  {
    src: Svelte,
    alt: "Svelte",
  },
  {
    src: Node,
    alt: "Node",
  },
  {
    src: Astro,
    alt: "Astro",
  },
  {
    src: Django,
    alt: "Django",
  },
  {
    src: Tauri,
    alt: "Tauri",
  },
];
export const languages = [
  {
    src: Javascript,
    alt: "Javascript",
  },
  {
    src: Dart,
    alt: "Dart",
  },
  {
    src: Typescript,
    alt: "Typescript",
  },
  {
    src: Python,
    alt: "Python",
  },
  {
    src: HTML,
    alt: "HTML",
  },
  {
    src: CSS,
    alt: "CSS",
  },
  {
    src: SQL,
    alt: "SQL",
  },
];

export const tools = [
  {
    src: Git,
    alt: "Git",
  },
  {
    src: Postgres,
    alt: "Postgres",
  },
  {
    src: MongoDB,
    alt: "MongoDB",
  },
  {
    src: TailwindCSS,
    alt: "TailwindCSS",
  },
  {
    src: Figma,
    alt: "Figma",
  },
  {
    src: Postman,
    alt: "Postman",
  },
];

export const projects = [
  {
    id: 1,
    href: "https://github.com/PitMac/PitKemon-React",
    page: "https://pitkemon.vercel.app/",
    src: PitKemon,
    alt: "PitKemon",
    technologies: [
      technologies[0],
      tools[0],
      languages[2],
      languages[4],
      languages[5],
    ],
    readme:
      "This is a website that shows the first 151 pokemon. From BULBASAUR to MEW. Discover them!",
  },
  {
    id: 2,
    href: "https://github.com/PitMac/FreeGames-App-Flutter",
    src: FreeGames,
    alt: "FreeGamesApp",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "This Flutter application shows the new and the best free games in cross-platforms like Windows, Android, Linux, MacOs and IOS.",
  },
  {
    id: 3,
    href: "https://github.com/PitMac/RunMd-Tauri",
    page: "https://run-md.vercel.app/",
    src: RunMD,
    alt: "RunMD",
    technologies: [
      technologies[0],
      technologies[6],
      languages[2],
      languages[4],
      languages[5],
    ],
    readme:
      "A markdown editor made with Tauri/ReactTS, can preview text, copy it and download it in md extension ready for use!",
  },
  {
    id: 4,
    href: "https://github.com/PitMac/ECovid-App-Flutter",
    src: Ecovid,
    alt: "Ecovid App",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "It gathers information on covid cases that occurred in the pandemic, uses a public API and has a search engine by country.",
  },
  {
    id: 5,
    href: "https://github.com/PitMac/ActivityWeb-React",
    page: "https://activityweb.vercel.app/",
    src: Activity,
    alt: "Activity Page",
    technologies: [
      technologies[0],
      tools[0],
      languages[2],
      languages[4],
      languages[5],
    ],
    readme:
      "Are you bored? NO PROBLEM with this website you can find any activity. Made with BoredAPI you can find alone activities or group activities",
  },
  {
    id: 6,
    href: "https://github.com/PitMac/Anime-App-Flutter",
    src: Anime,
    alt: "Anime Search",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "Do you like Anime? This is a application made with Flutter that shows all tranding anime, with a summary and popularity",
  },
  {
    id: 7,
    href: "https://github.com/PitMac/DisneyCharacters-React",
    page: "https://disney-characters.vercel.app/",
    src: DisneyC,
    alt: "DisneyC",
    technologies: [
      technologies[0],
      tools[3],
      tools[0],
      languages[4],
      languages[5],
    ],
    readme:
      "Do you like Disney Universe? This is a page that shows all characters of disney movies, series and cartoons",
  },
  {
    id: 8,
    href: "https://github.com/PitMac/RunMD-Flutter-Desktop",
    src: RunFMD,
    alt: "RunFMD",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "A markdown editor made with Flutter Desktop, can preview text and copy it",
  },
  {
    id: 9,
    href: "https://github.com/PitMac/FreeGame-App-RN",
    src: FreeGamesRN,
    alt: "FreeGamesRN",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "This React Native application shows the new and the best free games in cross-platforms like Windows, Android, Linux, MacOs and IOS.",
  },
];
