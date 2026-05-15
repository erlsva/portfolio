import { Link } from "./Link";
import type { JSX } from "react";
import { Devicon } from "./Devicon";
import { Globe } from "lucide-react";
import { motion } from "motion/react";

type ProjectProps = {
  img: string;
  title: string;
  paragraph: string;
  icons: string[];
  website?: string;
  github: string;
};

export const Project = ({
  img,
  title,
  paragraph,
  icons,
  website,
  github,
}: ProjectProps): JSX.Element => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="rounded-lg bg-linear-to-tr from-neutral-900 to-neutral-800 drop-shadow-2xl shadow-2xl overflow-hidden"
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
          {paragraph}
        </p>

        <div className="flex lg:flex-row justify-between gap-4 md:items-center md:flex-row lg:items-center flex-col">
          <div className="flex flex-row gap-2">
            {icons.map((icon, index) => {
              return (
                <div className="bg-neutral-900 p-2 rounded-lg shadow-2xs border border-neutral-800">
                  <Devicon
                    className="drop-shadow-2xl text-3xl w-12 h-12"
                    key={index}
                    icon={icon}
                  />
                </div>
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

            <Link
              className="rounded-md p-2 hover:bg-neutral-950 text-neutral-400 transition-colors duration-200 hover:text-neutral-100"
              href={github}
              openInNewTab
            >
              <Devicon icon="devicon-github-original" className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
