import type { JSX } from "react";
import { Code } from "./components/sections/Code";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Socials } from "./components/sections/Socials";
import { Layout } from "./components/layout/Layout";

function App(): JSX.Element {
  return (
    <Layout>
      <Home />
      <div className="flex flex-col w-full md:w-3xl lg:w-4xl justify-center md:px-0 lg:px-0">
        <About />
        <Code />
        <Socials />
      </div>
    </Layout>
  );
}

export default App;
