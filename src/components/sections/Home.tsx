import { ChevronDown } from "lucide-react";
import type { JSX } from "react";
import { Section } from "@/components/Section";
import { motion } from "motion/react";

export const Home = (): JSX.Element => {
  return (
    <Section
      id="home"
      className="flex flex-col w-full items-center justify-center relative"
    >
      <div className="w-fit max-w-[calc(100%-64px)] mx-auto  text-center">
        <header className="flex flex-row justify-center gap-2 md:gap-4 lg:flex lg:flex-row lg:gap-4 h-fit w-fit mx-auto whitespace-nowrap">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            text-5xl
            md:text-7xl
            lg:text-7xl
            viewport={{ once: true }}
            className="text-neutral-100 w-auto font-header text-4xl md:text-7xl lg:text-7xl"
          >
            Erlend
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-neutral-100 w-auto font-header text-4xl md:text-7xl lg:text-7xl"
          >
            Svanevik
          </motion.h1>
        </header>

        <hr className="border-t-4 text-neutral-100 my-1" />

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-neutral-100 w-full mt-2 font-header text-2xl"
        >
          From the construction site to making websites
        </motion.h2>
      </div>

      <a href="#about">
        <ChevronDown className="animate-bounce absolute bottom-20 left-1/2 -translate-x-1/2 text-neutral-100 size-14 hover:animate-none ease-in transition duration-300 hover:border-2 rounded-2xl" />
      </a>
    </Section>
  );
};
