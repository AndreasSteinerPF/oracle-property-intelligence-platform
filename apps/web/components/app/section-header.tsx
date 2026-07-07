import { cn } from "@/lib/utils";

function SectionHeader({
  eyebrow,
  title,
  description,
  dark,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-2.5 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className={`eyebrow ${dark ? "eyebrow-light" : "eyebrow-dark"}`}>{eyebrow}</span>
        </span>
      ) : null}
      <h2 className={`mt-3 text-3xl md:text-4xl ${dark ? "text-white" : ""}`}>{title}</h2>
      <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-primary/40" />
      {description ? (
        <p className={`mt-3 text-sm ${dark ? "text-white/72" : "text-muted-foreground"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeader };
