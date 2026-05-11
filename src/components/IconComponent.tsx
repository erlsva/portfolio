import { type LucideIcon } from "lucide-react";
import type { HTMLAttributes, JSX } from "react";
import { cn } from "@/utils/cn";

type IconComponentProps = {
  icon: LucideIcon;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const IconComponent = ({
  icon: Icon,
  className,
  ...props
}: IconComponentProps): JSX.Element => {
  return (
    <div
      className="rounded-md hover:bg-neutral-950 text-neutral-400 transition-colors ease-in duration-200 hover:text-neutral-100 p-2"
      {...props}
    >
      <Icon className={cn("size-10", className)} />
    </div>
  );
};
