import type { JSX } from "react";
import { Section } from "@/components/Section";
import overlay from "@/assets/overlay.png";
import vicksy from "@/assets/Vicksy.png";
import steakhouse from "@/assets/steakhouse.png";
import { Project } from "../Project";
import memory from "@/assets/memory.png";
import weather from "@/assets/weather.png";

export const Code = (): JSX.Element => {
  return (
    <Section
      id="code"
      className="py-4 pb-14 px-4 flex items-center flex-col gap-4 md:px-8 lg:px"
    >
      <Project
        img={overlay}
        title="Custom OBS Overlay"
        paragraph="I watch a streamer on twitch, and I made her a custom overlay tool
              that her mods can play with to put images, videos and gifs onto
              her screen and move them around, resize them and rotate them."
        icons={[
          "devicon-html5-plain colored",
          "devicon-css3-plain colored",
          "devicon-javascript-plain colored",
          "devicon-tailwindcss-original colored",
          "devicon-express-original",
        ]}
        website=""
        github="https://github.com/NotEple/shared-obs-overlay"
      />

      <Project
        img={vicksy}
        title="Website for streamer"
        paragraph="This is a website I created for the same streamer as the overlay. I am trying to make it a platform where she can do everything from giveaways, merch and later a dashboard."
        icons={[
          "devicon-react-plain colored",
          "devicon-typescript-plain colored",
          "devicon-tailwindcss-original colored",
          "devicon-express-original",
        ]}
        website="https://vicksy-website.onrender.com/"
        github="https://github.com/NotEple/vicksy-website"
      />

      <Project
        img={steakhouse}
        title="Primus Steakhouse"
        paragraph="This was my first time working with sanity, a CMS for a project @ Kodehode."
        icons={[
          "devicon-nextjs-plain",
          "devicon-react-plain colored",
          "devicon-typescript-plain colored",
          "devicon-tailwindcss-original colored",
          "devicon-sanity-plain colored",
        ]}
        website="https://steakhouse.vercel.app/"
        github="https://github.com/NotEple/steakhouse"
      />

      <Project
        img={memory}
        title="Memory game"
        paragraph="Super simple memory game with time tracking and turn tracking. And some confetti when you win 🎉"
        icons={[
          "devicon-vitejs-plain colored",
          "devicon-react-plain colored",
          "devicon-tailwindcss-original colored",
          "devicon-typescript-plain colored",
        ]}
        website="https://react-vite-ts-memory-game.netlify.app/"
        github="https://github.com/NotEple/Reactprosjekt-Memoryspill"
      />

      <Project
        img={weather}
        title="Weather App"
        paragraph="Super simple weather app."
        icons={[
          "devicon-vitejs-plain colored",
          "devicon-react-plain colored",
          "devicon-typescript-plain colored",
          "devicon-tailwindcss-original colored",
        ]}
        website="https://react-vite-ts-memory-game.netlify.app/"
        github="https://github.com/NotEple/Reactprosjekt-Memoryspill"
      />
    </Section>
  );
};
