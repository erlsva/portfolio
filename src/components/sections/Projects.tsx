import type { JSX } from "react";
import { Project } from "../Project";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { motion } from "motion/react";

export const Projects = (): JSX.Element => {
  return (
    <Section
      id="projects"
      className="py-4 pb-14 px-4 flex items-center flex-col-reverse gap-4 md:px-8 lg:px"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-row justify-center drop-shadow-2xl w-full order-2 lg:order-1 lg:col-span-3 md:col-span-3 col-span-2"
      >
        <div className="flex flex-col bg-content p-4 w-full rounded-lg items-center justify-center border border-border">
          <div className="flex flex-col md:flex-row gap-4 items-center w-full justify-center">
            <h2 className="font-header text-neutral-100 text-6xl lg:text-5xl max-sm:text-4xl">
              Projects
            </h2>
          </div>
        </div>
      </motion.div>
      {projects.map((project) => {
        return <Project key={project.title} {...project} />;
      })}
    </Section>
  );
};
