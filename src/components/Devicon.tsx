import { cn } from "@/utils/cn";
import type { JSX } from "react";

type DeviconProps = {
  icon: string;
  className?: string;
};

export const Devicon = ({
  icon,
  className = "text-4xl",
}: DeviconProps): JSX.Element => {
  return <i className={cn(`${icon}`, className)}></i>;
};
