import type { ReactNode } from "react";

type SectionProps = {
  tone?: "white" | "mint";
  className?: string;
  children: ReactNode;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white",
  mint: "bg-mint-pale",
};

const Section = ({ tone = "white", className = "", children }: SectionProps) => {
  return (
    <section className={`w-full ${toneClasses[tone]}`}>
      <div
        className={`mx-auto max-w-6xl px-6 py-20 md:py-28 ${className}`.trim()}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
