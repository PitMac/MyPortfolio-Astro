// Projects
import Ecovid from "/assets/projects/ecovid.webp";
import FreeGames from "/assets/projects/freegamesapp.webp";
import Anime from "/assets/projects/animeapp.webp";
import DisneyC from "/assets/projects/disneyCharacters.webp";
import Activity from "/assets/projects/activity.webp";
import RunMD from "/assets/projects/runmd.webp";
import PitKemon from "/assets/projects/pitkemon.webp";

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
    href: "https://pitkemon.vercel.app/",
    src: PitKemon,
    alt: "PitKemon",
    technologies: [technologies[0], tools[0], languages[2]],
  },
  {
    id: 2,
    href: "https://github.com/PitMac/FreeGames-App-Flutter",
    src: FreeGames,
    alt: "FreeGamesApp",
    technologies: [technologies[1], languages[1], tools[3]],
  },
  {
    id: 3,
    href: "https://run-md.vercel.app/",
    src: RunMD,
    alt: "RunMD",
    technologies: [technologies[0], technologies[6], languages[2]],
  },
  {
    id: 4,
    href: "https://github.com/PitMac/ECovid-App-Flutter",
    src: Ecovid,
    alt: "Ecovid App",
    technologies: [technologies[0], tools[0]],
  },
  {
    id: 5,
    href: "https://activityweb.vercel.app/",
    src: Activity,
    alt: "Activity Page",
    technologies: [technologies[0], tools[0]],
  },
  {
    id: 6,
    href: "https://github.com/PitMac/Anime-App-Flutter",
    src: Anime,
    alt: "AnimeApp",
    technologies: [technologies[0], tools[0]],
  },
  {
    id: 7,
    href: "https://github.com/PitMac/Anime-App-Flutter",
    src: DisneyC,
    alt: "DisneyC",
    technologies: [technologies[0], tools[0]],
  },
];
