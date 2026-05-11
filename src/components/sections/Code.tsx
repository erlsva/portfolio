import type { JSX } from "react";
import { Section } from "@/components/Section";

export const Code = (): JSX.Element => {
  return (
    <Section id="code" className="">
      <div>
        <div className="bg-neutral-800 flex flex-row rounded-3xl overflow-hidden">
          <iframe
            src="https://react-vite-ts-memory-game.netlify.app/"
            width={480}
            height={600}
          ></iframe>
          <div>
            <div>
              <h2>Memory Game</h2>
              <p></p>
            </div>
            <div>
              <i className="fa-brands fa-tailwind-css"></i>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
