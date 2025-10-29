"use client";

import { useMemo, useState } from "react";
import { CalendarCheck, Clock, Search, ArrowRight, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { marketplaceMetrics, openRoles, learningTracks } from "@/lib/data";

const jobFilters = ["All", "AI", "Design", "Growth", "Analytics"];

export function FindWorkView() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredRoles = useMemo(() => {
    if (activeFilter === "All") return openRoles;
    return openRoles.filter((role) =>
      role.skills.some((skill) =>
        skill.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  }, [activeFilter]);

  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/90 p-8 shadow-[0_30px_120px_-60px_rgba(14,165,233,0.4)] md:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <Badge variant="emerald" className="bg-emerald-500/10 text-emerald-200">
              Work on meaningful missions
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Join premium engagements with transparent scope, pay, and collaboration rituals.
            </h1>
            <p className="text-base text-slate-300/80 md:text-lg">
              Novawork curates opportunities from high-growth startups to enterprise teams reimagining their category. We surface briefs aligned to your craft, availability, and preferences.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Complete profile
              </Button>
              <Button variant="outline" size="lg">
                Refer a specialist
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-200">
              <span className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-emerald-300" />
                Guaranteed minimum 15h/week retainers
              </span>
              <span className="flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 text-emerald-300" />
                Async-first collaboration rituals
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300/80">
              <Search className="h-4 w-4 text-emerald-300" />
              <input
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                placeholder="Search by skill, role, or industry"
                aria-label="Search opportunities"
              />
            </div>
            <div className="space-y-2 text-sm text-slate-200">
              <div className="flex items-center justify-between">
                <span>AI Search Platform Architect</span>
                <span className="text-xs text-emerald-300">New</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Helios Analytics • Remote NA</span>
                <span>$130–$160/hr</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-200">
              <div className="flex items-center justify-between">
                <span>Product Design Lead (Fintech)</span>
                <span className="text-xs text-emerald-300">Interviewing</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Aperture Capital • Remote EMEA</span>
                <span>$120–$140/hr</span>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/15 p-5 text-sm text-emerald-100">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                Platform update
              </p>
              <p className="mt-2">
                “Mateo’s proposal approved. Kick-off scheduled for Monday.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="Opportunities"
            title="Briefs curated for strategic operators."
            description="Filter by stack or specialization. Every posting includes vetted scope, rituals, and compensation transparency."
          />
          <div className="flex flex-wrap items-center gap-3">
            {jobFilters.map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant={filter === activeFilter ? "primary" : "ghost"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {filteredRoles.map((role) => (
            <article
              key={role.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                  <p className="text-sm text-slate-300/80">{role.company}</p>
                </div>
                <Badge variant="emerald" className="bg-emerald-500/10 text-xs text-emerald-200">
                  {role.duration}
                </Badge>
              </div>
              <p className="text-sm text-slate-300/80">{role.description}</p>
              <div className="flex flex-col gap-2 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-300" />
                  {role.rate}
                </span>
                <span className="text-xs text-slate-400">{role.location}</span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Button
                variant="secondary"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="justify-center"
              >
                Submit proposal
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Delivery Pods"
          title="Join programs designed for focus and community."
          description="Each track includes async guild sessions, access to frameworks, and guaranteed visibility with hiring partners."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {learningTracks.map((track) => (
            <div
              key={track.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{track.title}</h3>
              <p className="text-sm text-slate-300/80">{track.description}</p>
              <div className="mt-auto rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Includes</p>
                <ul className="mt-3 space-y-2">
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

export default FindWorkView;
