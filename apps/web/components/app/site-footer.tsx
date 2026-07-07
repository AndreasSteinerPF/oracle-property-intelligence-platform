import Link from "next/link";

function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-ink px-6 py-10 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="inline-block h-5 w-1.5 rounded-full bg-primary" aria-hidden />
            Property Hub
          </p>
          <p className="mt-3 max-w-md text-sm text-white/72">
            Lee County property records, reconciled and source-cited. Built on the Elephant
            open-data network. <span className="text-primary">One source of truth, cited everywhere.</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/72">
          <Link href="/sources" className="hover:text-white">
            Data &amp; sources
          </Link>
          <a href="https://www.elephant.xyz/" className="hover:text-white">
            Elephant Network
          </a>
        </div>
        <div className="text-sm text-white/56">
          Built by Andreas Steiner
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
