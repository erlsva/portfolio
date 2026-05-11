import type { JSX } from "react";
import { Section } from "../Section";
import pfp from "../../assets/pfp.jpg";
import { Hand } from "lucide-react";
import { motion } from "motion/react";

export const About = (): JSX.Element => {
  return (
    <Section
      id="about"
      className="flex items-center justify-center flex-col gap-4 w-full md:px-8 lg:px-8"
    >
      <div className="grid gap-4 w-full h-auto flex-col grid-cols-3">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-row justify-center drop-shadow-2xl w-full order-2 lg:order-1 lg:col-span-3 col-span-2"
        >
          <div className="flex flex-col bg-linear-to-tr from-neutral-900 to-neutral-800 p-4 w-full rounded-3xl items-center justify-center ">
            <div className="flex flex-col md:flex-row gap-4 items-center w-full justify-center">
              <Hand className="transform -scale-x-100 animate-wave text-neutral-100 -rotate-12 size-14" />

              <h2 className="font-header text-neutral-100 text-6xl lg:text-5xl max-sm:text-4xl">
                Hello there
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 lg:col-span-1 col-span-1"
        >
          <img
            src={pfp}
            alt="Erlend in a black suit smiling at the camera"
            className="object-contain rounded-3xl drop-shadow-2xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col bg-linear-to-tr lg:order-3 lg:col-span-2 order-3 from-neutral-900 to-neutral-800 p-4 rounded-3xl gap-2 lg:gap-4 drop-shadow-2xl shadow-2xl col-span-3"
        >
          <h2 className="font-header text-neutral-100 text-3xl lg:text-4xl">
            About
          </h2>

          <p className="text-left font-paragraph text-lg lg:text-2xl text-neutral-200">
            My name is Erlend Svanevik. I am 26 years old, from Bergen, Norway
            and I am a frontend developer.
          </p>

          <p className="text-left font-paragraph text-lg lg:text-2xl text-neutral-200">
            I am a all around nerd. <br /> I've been playing games ever since I
            got my ps2 and my very own laptop. <br /> I love videogames, music,
            and very recently picked up on hikes and going to the gym.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-linear-to-tr order-4 from-neutral-900 to-neutral-800 col-span-3 p-4 rounded-3xl flex flex-col gap-2 lg:gap-4 drop-shadow-2xl shadow-2xl"
        >
          <h2 className="font-header text-neutral-100 text-3xl lg:text-4xl">
            Background
          </h2>
          <p className="text-left font-paragraph text-lg lg:text-2xl text-neutral-200">
            I used to be a carpenter, but it wasn't my passion nor did it give
            me a sense of professional pride. Having always loved tech and
            computers, <br /> I decided to pivot; as soon as I received my trade
            certificate, I enrolled in a frontend course.
          </p>
          <p className="text-left font-paragraph text-lg lg:text-2xl text-neutral-200">
            In august of 2022 I finished the Noroff Frontend Course. In May of
            2023 I got my first job at a startup; where I developed the
            interface for an all around movie/film and music/audio app. <br /> I
            collaborated closely with three other frontend developers, two
            designers and two backend developers via Slack and Microsoft Teams.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
