import type { JSX } from "react";
import data from "#/socials.json";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

export const Socials = (): JSX.Element => {
  return (
    <Section
      id="socials"
      className="flex flex-col gap-4 items-center justify-center px-8 w-fit m-auto"
    >
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl lg:text-7xl font-header text-neutral-100 bg-linear-to-tr from-neutral-900 to-neutral-800 p-4 rounded-3xl w-full"
      >
        Get in touch
      </motion.h2>
      <motion.ul
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-4 justify-center p-4 rounded-3xl bg-linear-to-tr from-neutral-900 to-neutral-800 drop-shadow-2xl shadow-2xl w-full"
      >
        <Link
          href={data.socials.discord}
          openInNewTab
          className="flex flex-col rounded-3xl bg-neutral-800 gap-4 aspect-square lg:h-50 lg:w-50 p-4 shadow-2xl drop-shadow-2xl hover:bg-neutral-900 justify-center"
        >
          <i className={`fa-brands fa-discord text-8xl text-discord `}></i>
          <p className="text-4xl font-header text-discord">Discord</p>
        </Link>

        <Link
          href={data.socials.linkedin}
          openInNewTab
          className="flex flex-col rounded-3xl bg-neutral-800 gap-4 aspect-square lg:h-50 lg:w-50 p-4 shadow-2xl drop-shadow-2xl hover:bg-neutral-900  justify-center"
        >
          <i className={`fa-brands fa-linkedin text-8xl text-linkedin`}></i>
          <p className="text-4xl font-header text-linkedin">LinkedIn</p>
        </Link>

        <Link
          href={data.socials.github}
          openInNewTab
          className="flex flex-col rounded-3xl bg-neutral-800 aspect-square lg:h-50 lg:w-50 gap-4 p-4 shadow-2xl drop-shadow-2xl hover:bg-neutral-900  justify-center"
        >
          <i className={`fa-brands fa-github text-8xl text-neutral-100`}></i>
          <p className="text-4xl font-header text-neutral-100">GitHub</p>
        </Link>

        <Link
          href={"mailto:epledev@outlook.com"}
          openInNewTab
          className="flex flex-col rounded-3xl bg-neutral-800 aspect-square lg:h-50 lg:w-50 gap-4 p-4 items-center shadow-2xl drop-shadow-2xl hover:bg-neutral-900  justify-center"
        >
          <Mail className="size-24 text-neutral-100 " />
          <p className="text-4xl font-header text-neutral-100">Email</p>
        </Link>
      </motion.ul>
    </Section>
  );
};
