import { Mulish } from "next/font/google";
import React from "react";
import { cn } from "../lib/utils";

const mulish = Mulish({ subsets: ["latin"] });

function Technology({
  tech,
  className,
  variant = "default",
}: {
  tech: string;
  className?: string;
  variant?: "default" | "compact";
}) {
  return (
    <p
      className={cn(
        "bg-white whitespace-nowrap text-black shadow-sm font-semibold transition-all hover:scale-105",
        variant === "default" && "text-primary py-[1rem] px-[1.3rem] shadow-lg",
        variant === "compact" &&
          "text-xs py-1.5 px-3 border border-gray-100 rounded-lg",
        mulish.className,
        className
      )}
    >
      {tech}
    </p>
  );
}

export default Technology;
