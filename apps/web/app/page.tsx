import Link from "next/link";
import { SectionHeader } from "@/components/app/section-header";
import { StatFlap } from "@/components/app/stat-flap";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const DATASET = {
  properties: "480,844",
  sourceRecords: "511,695",
  permits: "112,431",
  sunbiz: "57,388",
  bbb: "870",
};

const views = [
  {
    href: "/properties",
    title: "Properties",
    description: "Ownership records, permits, tenants, and renovation history for every parcel.",
    stat: `${DATASET.properties} records`,
    span: true,
  },
  {
    href: "/tenants",
    title: "Tenants",
    description: "Occupancy derived from business registrations, tracked over time.",
    stat: `${DATASET.sunbiz} matches`,
    span: false,
  },
  {
    href: "/businesses",
    title: "Businesses",
    description: "State registrations, officers, locations, and linked permits.",
    stat: `${DATASET.sunbiz} registrations`,
    span: false,
  },
  {
    href: "/contractors",
    title: "Contractors",
    description: "Permit history cross-referenced with BBB ratings, complaints, and reviews.",
    stat: `${DATASET.bbb} BBB profiles`,
    span: false,
  },
];

const steps = [
  {
    n: "1",
    title: "County records ingested",
    detail: `${DATASET.permits} permits, ${DATASET.sunbiz} registrations, ${DATASET.bbb} profiles`,
  },
  {
    n: "2",
    title: "Reconciled into one graph",
    detail: `${DATASET.properties} canonical parcels from ${DATASET.sourceRecords} source records`,
  },
  {
    n: "3",
    title: "Cited answers out",
    detail: "Every claim links to its source",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — left-aligned split */}
      <section className="bg-ink px-6 py-20 text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 md:flex-row md:items-start">
          <div className="w-full md:w-3/5">
            <p className="eyebrow eyebrow-light text-left">Lee County, Florida</p>
            <h1 className="mt-6 max-w-2xl text-left text-4xl leading-tight md:text-5xl">
              Every property record. Every permit. <span className="text-gradient-gold">Every source — cited.</span>
            </h1>
            <p className="mt-4 max-w-lg text-left text-sm text-white/72">
              Browse parcels, permits, businesses, and contractors — or ask a question in plain
              English and get answers backed by county records.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/properties"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start exploring <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="/ask"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                or ask a question
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <StatFlap
              value={DATASET.properties}
              label={`canonical parcels with full source provenance — reconciled from ${DATASET.sourceRecords} source records.`}
            />
          </div>
        </div>
      </section>

      {/* Four entry points — bento grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Four entry points"
            title="What you can look up"
            description="Each view pulls from real county records, with source links on every claim."
          />
          <div className="bento-grid mt-10">
            {views.map((v) => (
              <Link key={v.href} href={v.href} className={`group ${v.span ? "bento-span-2" : ""}`}>
                <Card variant="accent" className="h-full transition-shadow group-hover:shadow-sm">
                  <CardContent className="p-6">
                    <p className="nums font-display text-sm text-muted-foreground">{v.stat}</p>
                    <CardTitle className="mt-2">{v.title}</CardTitle>
                    <CardDescription className="mt-2">{v.description}</CardDescription>
                    <p className="mt-4 text-sm font-semibold">
                      View <span aria-hidden>&rarr;</span>
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline — 3-step process */}
      <section className="bg-secondary px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="The pipeline"
            title="From county records to cited answers"
            dark
          />
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:gap-0">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-start gap-4 md:flex-1 md:flex-col md:gap-0">
                <div className="flex items-center gap-3 md:flex-col md:items-start">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary font-display text-lg text-primary">
                    {s.n}
                  </span>
                  <div className="md:mt-4">
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/72">{s.detail}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-primary/30 md:mt-5 md:ml-4 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
