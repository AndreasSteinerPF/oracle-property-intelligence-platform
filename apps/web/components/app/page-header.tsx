import { cn } from "@/lib/utils";

function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-4 py-8", className)}>
      <div className="text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-2.5 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="eyebrow eyebrow-dark">{eyebrow}</span>
        </span>
        <h1 className="mt-3 text-3xl">{title}</h1>
        <div className="mt-2 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-primary/40" />
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}

export { PageHeader };
