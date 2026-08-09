import overlay from "@/assets/overlay.png";
import vicksy from "@/assets/Vicksy.png";
import steakhouse from "@/assets/steakhouse.png";
import memory from "@/assets/memory.png";
import weather from "@/assets/weather.png";
import type { ProjectProps } from "@/components/Project";

export const projects: ProjectProps[] = [
  {
    img: overlay,
    title: "Custom OBS Overlay",
    description:
      "I watch a streamer on twitch, and I made her a custom overlay tool that her mods can play with to put images, videos and gifs onto her screen and move around, resize them and rotate them.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "Express"],
    github: "https://github.com/NotEple/shared-obs-overlay",
  },
  {
    img: vicksy,
    title: "Website for a Twitch streamer",
    description:
      "This is a website I created for the same streamer as the overlay. I am trying to make it a platform where she can do everything from giveaways, merch and later a dashboard.",
    technologies: ["React", "TypeScript", "Tailwind", "Express"],
    website: "https://vicksy-website.onrender.com/",
    github: "https://github.com/NotEple/vicksy-website",
  },
  {
    img: steakhouse,
    title: "Primus Steakhouse",
    description:
      "This was my first time working with sanity, a CMS for a project @ Kodehode.",
    technologies: ["Nextjs", "React", "TypeScript", "Tailwind", "Sanity"],
    website: "https://steakhouse.vercel.app/",
    github: "https://github.com/NotEple/steakhouse",
  },
  {
    img: memory,
    title: "Memory game",
    description:
      "Super simple memory game with time tracking and turn tracking. And some confetti when you win 🎉",
    technologies: ["Vite", "React", "Tailwind", "TypeScript"],
    website: "https://react-vite-ts-memory-game.netlify.app/",
    github: "https://github.com/NotEple/Reactprosjekt-Memoryspill",
  },
  {
    img: weather,
    title: "Weather App",
    description: "Super simple weather app.",
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    website: "https://react-vite-ts-memory-game.netlify.app/",
    github: "https://github.com/NotEple/Reactprosjekt-Memoryspill",
  },
];
