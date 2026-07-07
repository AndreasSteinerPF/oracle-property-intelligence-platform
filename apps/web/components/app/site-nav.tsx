import Link from "next/link";

const links = [
  { href: "/properties", label: "Parcels" },
  { href: "/tenants", label: "Tenants" },
  { href: "/businesses", label: "Businesses" },
  { href: "/contractors", label: "Contractors" },
  { href: "/insights", label: "Insights" },
  { href: "/ask", label: "Ask" },
  { href: "/sources", label: "Sources" },
];

function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-ink text-white">
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center gap-6 px-6" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="inline-block h-5 w-1.5 rounded-full bg-primary" aria-hidden />
          Property Hub
        </Link>
        <div className="hidden items-center gap-5 text-sm text-white/78 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="tracking-wide underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/insights"
          className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-full border border-primary/60 bg-transparent px-4 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          Explore <span aria-hidden>&rarr;</span>
        </Link>
      </nav>
    </header>
  );
}

export { SiteNav };
