import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import {
  enterpriseFeatures,
  marketplaceMetrics,
  workflowSteps,
  learningTracks,
} from "@/lib/data";
import { ArrowRight, ShieldCheck, Building2, Workflow, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Talent Solutions",
  description:
    "Design scalable, compliant talent programs with Novawork for AI, product, and growth initiatives.",
};

export default function EnterprisePage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/90 p-8 md:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <Badge variant="emerald" className="bg-emerald-500/10 text-emerald-200">
              Enterprise solutions
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Strategic talent programs to accelerate innovation, securely and at scale.
            </h1>
            <p className="text-base text-slate-300/80 md:text-lg">
              Partner with Novawork Engagement Leads to design elastic squads, streamline procurement, and monitor program velocity with live dashboards aligned to your KPIs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Book an executive briefing
              </Button>
              <Button variant="outline" size="lg">
                Download capabilities deck
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Program metrics</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span>Average ramp time</span>
                  <span className="text-lg font-semibold text-white">9.5 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Compliance-ready geos</span>
                  <span className="text-lg font-semibold text-white">39</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Security posture</span>
                  <span className="text-lg font-semibold text-white">SOC 2 Type II</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/15 p-5 text-sm text-emerald-100">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                Partner highlight
              </p>
              <p className="mt-2">
                “Our Novawork pod launched an AI-driven claims platform across three regions while maintaining compliance in every jurisdiction.” — SVP Technology, Polaris
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Strategic Value"
          title="Unified talent operations managed with enterprise discipline."
          description="Engagement leads embed with your PMO to orchestrate onboarding, velocity, and governance from day one."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {enterpriseFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-slate-300/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Program Blueprint"
          title="Co-create outcomes with structured delivery frameworks."
          description="We collaborate with your leaders to define the charter, orchestrate squads, and surface velocity data across the engagement."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Phase {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-slate-300/80">{step.description}</p>
              <div className="mt-auto flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-slate-300/80">
                <Workflow className="h-4 w-4 text-emerald-300" />
                Shared RACI, rituals, and tooling configured for hybrid teams.
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Elastic Pods"
          title="Calibrated rosters for each strategic initiative."
          description="Activate pods with product strategists, AI engineers, designers, and growth leaders who integrate seamlessly."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {learningTracks.map((track) => (
            <div
              key={track.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="flex items-center gap-3 text-sm text-emerald-200">
                <Building2 className="h-4 w-4" />
                {track.title}
              </div>
              <p className="text-sm text-slate-300/80">{track.description}</p>
              <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300/80">
                <BarChart2 className="mb-2 h-4 w-4 text-emerald-300" />
                <ul className="space-y-2">
                  {track.deliverables.map((deliverable) => (
                    <li key={deliverable}>• {deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 md:grid-cols-4">
        {marketplaceMetrics.map((metric) => (
          <div key={metric.label} className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {metric.label}
            </span>
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
