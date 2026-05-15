import { Footer } from "./Footer";
import { BGPattern } from "../BGPattern";
import type { JSX, ReactNode } from "react";
import { Nav } from "./Nav";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Nav />

      <main className="w-full flex-1 flex flex-col items-center">
        {children}
      </main>

      <div className="w-full pb-[calc(76px+env(safe-area-inset-bottom))] lg:pb-0">
        <Footer />
      </div>

      {/* Background Pattern */}
      <BGPattern variant="dots" />
    </div>
  );
};
