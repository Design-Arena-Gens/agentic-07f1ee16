import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-300/80 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
