import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950/80 p-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            <ShieldCheck className="h-4 w-4" />
            Enterprise ready
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Unlock the operating system for high-performing talent programs.
          </h2>
          <p className="text-base text-emerald-100/90 md:text-lg">
            Partner with Novawork Engagement Leads to build custom talent clouds, orchestrate delivery, and surface live metrics aligned to your KPIs.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
              Book an enterprise consult
            </Button>
            <Button variant="outline" size="lg">
              Download capabilities deck
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-slate-950/80 p-6 text-sm text-emerald-100/90">
          <div className="flex items-center justify-between">
            <span>Average onboarding</span>
            <span className="text-lg font-semibold text-white">12 days</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Compliance-ready geos</span>
            <span className="text-lg font-semibold text-white">39 countries</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Talent satisfaction</span>
            <span className="text-lg font-semibold text-white">98%</span>
          </div>
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
              Including
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Embedded program advisors</li>
              <li>• Velocity intelligence dashboards</li>
              <li>• Security & compliance workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
