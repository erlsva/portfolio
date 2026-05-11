import { Link } from "@/components/Link";
import { Tooltip } from "@/components/Tooltip";

import type { JSX, ReactNode } from "react";
import type { Placement } from "@/types/placement";

type NavItemProps = {
  href: string;
  text: string;
  openInNewTab?: boolean;
  tooltipPlacement?: Placement;
  children: ReactNode;
};

export const NavItem = ({
  href,
  text,
  openInNewTab,
  tooltipPlacement = "top",
  children,
}: NavItemProps): JSX.Element => {
  return (
    <Tooltip text={text} placement={tooltipPlacement}>
      <Link href={href} openInNewTab={openInNewTab} aria-label={text}>
        {children}
      </Link>
    </Tooltip>
  );
};
