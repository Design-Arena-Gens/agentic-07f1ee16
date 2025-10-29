import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-24 pt-10 lg:pt-16">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
