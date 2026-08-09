import type { JSX } from "react";
import { Project } from "../Project";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export const Code = (): JSX.Element => {
  return (
    <Section
      id="code"
      className="py-4 pb-14 px-4 flex items-center flex-col gap-4 md:px-8 lg:px"
    >
      {projects.map((project) => {
        return <Project key={project.title} {...project} />;
      })}
    </Section>
  );
};
