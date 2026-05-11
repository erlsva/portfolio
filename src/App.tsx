import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Code } from "./components/sections/Code";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Socials } from "./components/sections/Socials";
import type { JSX } from "react";
import { BGPattern } from "./components/BGPattern";

function App(): JSX.Element {
  return (
    <div className="h-full flex justify-center items-center flex-col relative overflow-y-auto">
      <Nav />
      <Home />
      <div className="flex flex-col w-full md:w-3xl lg:w-4xl justify-center px-4 md:px-0 lg:px-0">
        <About />
        <Code />
        <Socials />
      </div>
      <Footer />
      <BGPattern variant="dots" />
    </div>
  );
}

export default App;
