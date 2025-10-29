"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Filter, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  marketplaceMetrics,
  talentCategories,
  topTalents,
  workflowSteps,
} from "@/lib/data";

const specializationOptions = [
  "All",
  "LLM Ops",
  "Design Systems",
  "Growth",
  "Lifecycle",
  "DevOps",
];

export function FindTalentView() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredTalents = useMemo(() => {
    if (activeFilter === "All") return topTalents;
    return topTalents.filter((talent) =>
      talent.skills.some((skill) =>
        skill.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  }, [activeFilter]);

  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      <section className="space-y-10 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <Badge variant="emerald" className="bg-emerald-500/10 text-emerald-200">
              Hire with confidence
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Build your next product squad from a network of elite operators.
            </h1>
            <p className="text-base text-slate-300/80 md:text-lg">
              Every talent profile beams with signal: async video, verified case studies, references, and peer-reviewed skill ratings. Our strategists curate shortlists tailored to your roadmap, culture, and velocity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Brief our strategists
              </Button>
              <Button variant="outline" size="lg">
                Download talent report
              </Button>
            </div>
          </div>
          <div className="flex min-w-[280px] flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-sm text-slate-200">
            <div className="flex items-center justify-between">
              <span>Median time-to-match</span>
              <span className="text-lg font-semibold text-white">46h</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Average engagement length</span>
              <span className="text-lg font-semibold text-white">4.3 months</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Success rating</span>
              <span className="text-lg font-semibold text-white">97%</span>
            </div>
            <p className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-xs text-emerald-200">
              “Novawork delivered a fully embedded AI squad that launched our copilot in record time.” — Gridwave VP Product
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="Curated Experts"
            title="Activate operators aligned with your domain, stack, and rituals."
            description="Use instant filters to explore specializations or tap a strategist for shortlist curation."
          />
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="border-emerald-400/50 text-emerald-200">
              Avg. rating 4.95 / 5
            </Badge>
            <Badge variant="outline" className="border-white/20 text-slate-200">
              68k vetted experts
            </Badge>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {specializationOptions.map((specialization) => (
            <Button
              key={specialization}
              variant={activeFilter === specialization ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter(specialization)}
              leftIcon={<Filter className="h-4 w-4" />}
            >
              {specialization}
            </Button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {filteredTalents.map((talent) => (
            <article
              key={talent.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{talent.name}</h3>
                  <p className="text-sm text-slate-300/80">{talent.role}</p>
                </div>
                <Badge variant="emerald" className="bg-emerald-500/10 text-xs text-emerald-200">
                  {talent.rate}
                </Badge>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {talent.location}
              </p>
              <p className="text-sm text-slate-300/80">{talent.bio}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {talent.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Engagement Playbook"
          title="A structured workflow designed for velocity and clarity."
          description="From scoping to delivery, our engagement leads orchestrate check-ins, tooling, and checkpoints across your workstream."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                Step {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-slate-300/80">{step.description}</p>
              <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300/70">
                <ShieldCheck className="mb-2 h-4 w-4 text-emerald-300" />
                <p>Accountable partner: Engagement Lead ensures handoffs and milestones stay on track.</p>
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

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Talent Clouds"
          title="Curated rosters across critical functions."
          description="Mix and match multi-disciplinary specialists to create pods aligned to your mission."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {talentCategories.map((category) => (
            <div
              key={category.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300/80">
                  {category.description}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FindTalentView;
