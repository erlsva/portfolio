import type { JSX, ReactNode } from "react";
import type { Placement } from "@/types/placement";

export const Tooltip = ({
  text,
  placement = "top",
  children,
}: {
  text: string;
  placement?: Placement;
  children: ReactNode;
}): JSX.Element => {
  const placements = {
    top: {
      tooltip: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      arrow:
        "bottom-full left-1/2 -translate-x-1/2 translate-y-full border-x-8 border-t-8 border-x-transparent border-t-white origin-top mb-2",
    },
    bottom: {
      tooltip: "top-full left-1/2 -translate-x-1/2 mt-2",
      arrow:
        "top-full left-1/2 -translate-x-1/2 -translate-y-full border-x-8 border-b-8 border-x-transparent border-b-white origin-bottom mt-2",
    },
    left: {
      tooltip: "right-full top-1/2 -translate-y-1/2 mr-2",
      arrow:
        "right-full top-1/2 -translate-y-1/2 translate-x-full border-y-8 border-l-8 border-y-transparent border-l-white origin-left mr-2",
    },
    right: {
      tooltip: "left-full top-1/2 -translate-y-1/2 ml-2",
      arrow:
        "left-full top-1/2 -translate-y-1/2 -translate-x-full border-y-8 border-r-8 border-y-transparent border-r-white origin-right ml-2",
    },
  };

  const current = placements[placement];

  return (
    <div
      className="group relative inline-flex items-center justify-center outline-none"
      aria-label={text}
    >
      {/* Tooltip */}
      <span
        role="tooltip"
        className={`pointer-events-none absolute font-paragraph ${current.tooltip} scale-95 opacity-0 rounded-md bg-neutral-100 px-3 py-1 text-sm text-neutral-950 shadow transition-all duration-200
        group-hover:scale-100 group-hover:opacity-100
        group-focus-within:scale-100 group-focus-within:opacity-100 z-50`}
      >
        {text}
      </span>

      {/* Arrow */}
      <span
        className={`pointer-events-none absolute ${current.arrow} scale-0 opacity-0 transition-all duration-200
        group-hover:scale-100 group-hover:opacity-100
        group-focus-within:scale-100 group-focus-within:opacity-100 z-50`}
      />

      {children}
    </div>
  );
};
