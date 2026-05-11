import type { JSX, ReactNode } from "react";
import { cn } from "@/utils/cn";

export const Section = ({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}): JSX.Element => {
  return (
    <section className={cn("h-dvh ", className)} id={id}>
      {children}
    </section>
  );
};
