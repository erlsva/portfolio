import { Link } from "./Link";
import type { JSX } from "react";
import { Devicon } from "./Devicon";
import { Tooltip } from "./Tooltip";
import { Globe } from "lucide-react";
import { motion } from "motion/react";
import { technologyIcons, type Technology } from "@/data/technologies";

export type ProjectProps = {
  img: string;
  title: string;
  description: string;
  technologies: Technology[];
  website?: string;
  github?: string;
};

export const Project = ({
  img,
  title,
  description,
  technologies,
  website,
  github,
}: ProjectProps): JSX.Element => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="rounded-lg bg-neutral-900 drop-shadow-2xl shadow-2xl overflow-hidden border border-border hover:outline-neutral-600 hover:outline-2"
    >
      <img
        src={img}
        alt="A dashboard for uploading files and a preview of a twitch stream."
        className="w-full"
      />
      <div className="p-2 flex flex-col gap-2">
        <h2 className="text-left text-lg text-neutral-100 lg:text-3xl font-header">
          {title}
        </h2>
        <p className="font-paragraph text-left text-base text-neutral-300">
          {description}
        </p>

        <div className="flex lg:flex-row justify-between gap-4 md:items-center md:flex-row lg:items-center flex-col">
          <div className="flex flex-row gap-2">
            {technologies.map((technology, index) => {
              const icon = technologyIcons[technology];

              return (
                <Tooltip text={technology} key={index}>
                  <div className="bg-neutral-900 p-2 rounded-lg shadow-2xs border border-border">
                    <Devicon
                      className="drop-shadow-2xl text-3xl w-12 h-12"
                      icon={icon}
                    />
                  </div>
                </Tooltip>
              );
            })}
          </div>

          <div className="flex gap-4">
            {website && (
              <Link
                className="rounded-md p-2 hover:bg-neutral-950 text-neutral-400 transition-colors duration-200 hover:text-neutral-100"
                href={website}
                openInNewTab
              >
                <Globe className="w-9 h-9" />
              </Link>
            )}

            {github && (
              <Link
                className="rounded-md p-2 hover:bg-neutral-950 text-neutral-400 transition-colors duration-200 hover:text-neutral-100"
                href={github}
                openInNewTab
              >
                <Devicon icon="devicon-github-original" className="text-4xl" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
