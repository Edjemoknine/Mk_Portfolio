import gym from "./gymFull.png";
import cryptox from "./cryptoFull.png";
import cyborg from "./cyborgFull.png";
import youtube from "./Youtube.png";
import latest from "./latestFull.png";
import movico from "./movicoFull.png";
// import wearox from "./Wearox.png";

export const projects = [
  {
    img: gym,
    title: "GYMSTAR",
    desc: "Imprassive platform that allows users shape their healthy body by choosing the best exercices and practicing by watching live video.",
    link: "https://gymstars.netlify.app",
    github: "https://github.com/Edjemoknine/GYMSTER/tree/main/client",
    tech: [
      { TName: "tailwindcss", bg: "text-sky-500" },
      { TName: "framer-motion", text: "text-violet-500" },
      { TName: "Vite", text: "text-purple-500" },
    ],
  },
  {
    img: cryptox,
    title: "Cryptox",
    desc: "A comperhensive cryptocurrencies platform that allows users to see the latest information and News about cryptocurrencies in the world. Compare their rate in the last 30 days",
    link: "https://bicryptox.netlify.app",
    github: "https://github.com/Edjemoknine/Cryptox",
    tech: [
      { TName: "React", text: "text-blue-500" },
      { TName: "tailwindcss", text: "text-sky-500" },
      { TName: "reduxjs/toolkit", text: "text-violet-500" },
      { TName: "chartjs", text: "text-teal-500" },
    ],
  },
  {
    img: cyborg,
    title: "Cyborg",
    desc: "Game platform providing the most popular games, the last release in defferent platforms and allows gamers to descover their games and bookmark in their lists",
    link: "https://cyborg-61feb.web.app/",
    github: "https://github.com/Edjemoknine/CYBORG-Games-Store",
    tech: [
      { TName: "React", text: "text-blue-500" },
      { TName: "tailwindcss", text: "text-sky-500" },
      { TName: "Firebase", text: "text-orange-500" },
      { TName: "react-hook-form", text: "text-rose-500" },
      { TName: "Zod", text: "text-blue-500" },
    ],
  },
  {
    img: youtube,
    title: "Youtube video",
    desc: "Application streaming videos in various areas providing the most information make users wisely about the latest news and technologies released and see poeple commets about them.",
    link: "https://youtubii.netlify.app",
    github: "https://github.com/Edjemoknine/Video-Stream",
    tech: [
      { TName: "Vite", text: "text-violet-500" },
      { TName: "tailwindcss", text: "text-sky-500" },
      { TName: "react-query", text: "text-pink-500" },
    ],
  },
  {
    img: latest,
    title: "Latest",
    desc: "Web application that enables people to discover the latest blogs and events that heppend and search and publish their events, including the ability to save blogs in their lists",
    link: "https://blogs-app-d3bef.web.app/",
    github: "https://github.com/Edjemoknine/Lifly-Blogs",
    tech: [
      { TName: "React", text: "text-blue-500" },
      { TName: "tailwindcss", text: "text-sky-500" },
      { TName: "Firebase", text: "text-orange-500" },
    ],
  },
  {
    img: movico,
    title: "Movico",
    desc: "Web-based platform that allows users to search, bookmark,and watch trailers about latest movies and series. Discovering thiers detials and reviews.",
    link: "https://netflixmv.netlify.app",
    github: "https://github.com/Edjemoknine/Movic",
    tech: [
      { TName: "Vite", text: "text-violet-500" },
      { TName: "tailwindcss", text: "text-sky-500" },
      { TName: "Kinde-Auth", text: "text-slate-500" },
      { TName: "Redux-toolkit", text: "text-purple-500" },
    ],
  },
];
