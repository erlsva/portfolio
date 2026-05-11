import { cn } from "@/utils/cn";
import type { JSX } from "react";

type IconCardProps = {
  icon: string;
  className?: string;
};

export const IconCard = ({ icon, className }: IconCardProps): JSX.Element => {
  return (
    <div className="rounded-md text-neutral-400 p-2">
      <i className={cn("size-10", `${icon}`, className)}></i>
    </div>
  );
};
