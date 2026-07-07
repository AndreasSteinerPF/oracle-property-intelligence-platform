import type { Metadata } from "next";
import { SiteNav } from "@/components/app/site-nav";
import { SiteFooter } from "@/components/app/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lee County Property Intelligence Hub",
    template: "%s — Lee County Property Hub",
  },
  description:
    "Lee County property intelligence on the Elephant open-data network — parcels, permits, businesses, and contractors with source-cited answers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-sans": 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          "--font-display":
            "'Sora', 'ui-sans-serif', 'system-ui', sans-serif",
        } as React.CSSProperties
      }
    >
      <body className="font-sans flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
