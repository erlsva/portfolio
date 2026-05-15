import { cn } from "@/utils/cn";
import type { JSX, ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export const Section = ({
  id,
  className,
  children,
}: SectionProps): JSX.Element => {
  return (
    <section className={cn("min-h-svh ", className)} id={id}>
      {children}
    </section>
  );
};
