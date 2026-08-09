import { type JSX } from "react";
import { NavItem } from "@/components/NavItem";
import { IconComponent } from "@/components/IconComponent";
import { House, Code, IdCard, Link } from "lucide-react";
import { motion } from "motion/react";

export const Nav = (): JSX.Element => {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-row gap-4 fixed z-50 bottom-0 w-full h-19 pb-[env(safe-area-inset-bottom)] lg:pb-0 lg:bg-transparent lg:flex-col lg:h-dvh lg:left-0 lg:justify-center lg:ml-2 lg:w-fit shadow-[0_-10px_20px_-1px_rgba(0,0,0,0.5)] lg:shadow-none"
    >
      <ul className="flex flex-row gap-8 p-2 w-full justify-center bg-neutral-800 lg:flex-col lg:gap-2 lg:rounded-2xl ">
        <li>
          <NavItem href="#home" text="Home" tooltipPlacement="right">
            <IconComponent icon={House} />
          </NavItem>
        </li>
        <li>
          <NavItem href="#about" text="About" tooltipPlacement="right">
            <IconComponent icon={IdCard} />
          </NavItem>
        </li>
        <li>
          <NavItem href="#code" text="Code" tooltipPlacement="right">
            <IconComponent icon={Code} />
          </NavItem>
        </li>
        <li>
          <NavItem href="#socials" text="Socials" tooltipPlacement="right">
            <IconComponent icon={Link} />
          </NavItem>
        </li>
      </ul>
    </motion.nav>
  );
};
