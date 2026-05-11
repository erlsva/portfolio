import type { JSX, ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

type LinkProps = {
  href: string;
  openInNewTab?: boolean;
  children: ReactNode;
} & HTMLMotionProps<"a">;

/**
 * Parent component that returns a link around a component.
 * @param href - Link destination.
 * @param openInNewTab - Open link in a new tab. `False` by default.
 */
export const Link = ({
  href,
  openInNewTab = false,
  children,
  ...props
}: LinkProps): JSX.Element => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </motion.a>
  );
};
