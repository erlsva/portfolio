import type { JSX } from "react";
import data from "#/socials.json";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";

export const Socials = (): JSX.Element => {
  return (
    <Section
      id="socials"
      className="flex pb-12 pt-4 flex-col gap-4 items-center justify-center px-4 w-full md:px-8 lg:px-8"
    >
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl lg:text-7xl font-header text-neutral-100 bg-linear-to-tr from-neutral-900 to-neutral-800 p-4 rounded-3xl w-full drop-shadow-2xl shadow-2xl"
      >
        Get in touch
      </motion.h2>
      <motion.ul
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 justify-center p-4 rounded-3xl bg-linear-to-tr from-neutral-900 to-neutral-800 drop-shadow-2xl shadow-2xl w-full h-full lg:flex lg:flex-row lg:h-fit"
      >
        <Link
          href={data.socials.linkedin}
          openInNewTab
          className="flex flex-col rounded-3xl bg-neutral-800 gap-4 aspect-square w-full p-4 hover:bg-neutral-900 justify-center"
        >
          <i
            className={`fa-brands fa-linkedin text-5xl lg:text-8xl text-linkedin`}
          ></i>
          <p className="lg:text-4xl text-2xl font-header text-linkedin">
            LinkedIn
          </p>
        </Link>

        <Link
          href={data.socials.github}
          openInNewTab
          className="flex flex-col rounded-3xl bg-neutral-800 gap-4 aspect-square w-full p-4 hover:bg-neutral-900 justify-center"
        >
          <i
            className={`fa-brands fa-github text-5xl lg:text-8xl text-neutral-100`}
          ></i>
          <p className="lg:text-4xl text-2xl font-header text-neutral-100">
            GitHub
          </p>
        </Link>

        <Link
          href={"mailto:epledev@outlook.com"}
          openInNewTab
          className="flex flex-col rounded-3xl bg-neutral-800 aspect-square w-full gap-4 p-4 hover:bg-neutral-900 justify-center items-center"
        >
          <Mail className="lg:size-24 size-12 text-neutral-100 " />
          <p className="lg:text-4xl text-2xl font-header text-neutral-100">
            Email
          </p>
        </Link>
      </motion.ul>
    </Section>
  );
};
