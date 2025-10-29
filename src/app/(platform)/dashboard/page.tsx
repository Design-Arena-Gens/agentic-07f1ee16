import type { Metadata } from "next";
import { dashboardStats, dashboardTimeline, platformUpdates, openRoles } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, BarChart3, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Talent OS Dashboard",
  description:
    "Monitor engagements, pipeline, and financial insights with the Novawork Talent OS dashboard.",
};

export default function DashboardPage() {
  const recommended = openRoles.slice(0, 2);

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/90 p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Good morning, Alana</p>
            <h1 className="text-3xl font-semibold text-white">Your engagement cockpit</h1>
            <p className="text-sm text-slate-300/80">
              Monitor delivery velocity, proposals, and recommended engagements in one operating canvas.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" className="border border-white/10">
              Share weekly update
            </Button>
            <Button rightIcon={<ArrowRight className="h-4 w-4" />}>New proposal</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-emerald-200/80">{stat.delta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <header className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Active engagements</h2>
              <p className="text-sm text-slate-400">Sprint milestones and upcoming rituals.</p>
            </div>
            <Button variant="ghost" className="text-sm">
              View all
            </Button>
          </header>
          <div className="space-y-4">
            {dashboardTimeline.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {item.stage}
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                    On track
                  </span>
                </div>
                <p className="text-sm text-slate-300/80">{item.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Signals & updates</h2>
              <Button variant="ghost" size="sm">
                See all
              </Button>
            </div>
            <div className="mt-5 space-y-4">
              {platformUpdates.map((update) => (
                <div
                  key={update.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <p className="text-sm font-semibold text-white">{update.title}</p>
                  <p className="text-xs text-slate-400">{update.time}</p>
                  <p className="mt-2 text-sm text-slate-300/80">{update.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Recommended opportunities</h2>
              <Button variant="ghost" size="sm">
                View marketplace
              </Button>
            </div>
            <div className="mt-5 space-y-4">
              {recommended.map((role) => (
                <div key={role.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{role.title}</h3>
                      <p className="text-xs text-slate-400">{role.company}</p>
                    </div>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                      {role.rate}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300/80">{role.description}</p>
                  <Button size="sm" variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Review brief
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-emerald-300" />
            <h3 className="text-lg font-semibold text-white">Velocity intelligence</h3>
          </div>
          <p className="mt-3 text-sm text-slate-300/80">
            Impact metrics benchmarked against network peers to highlight strengths and opportunities.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-emerald-300" />
            <h3 className="text-lg font-semibold text-white">Growth pipeline</h3>
          </div>
          <p className="mt-3 text-sm text-slate-300/80">
            Track proposals, interviews, and contract renewals with predictive close-likelihood scoring.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-emerald-300" />
            <h3 className="text-lg font-semibold text-white">Financial pulse</h3>
          </div>
          <p className="mt-3 text-sm text-slate-300/80">
            Monitor invoicing, payments, and rate optimization with automated reminders and alerts.
          </p>
          <Button variant="ghost" className="mt-3 text-sm text-emerald-200">
            View statements
          </Button>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Upcoming rituals</h2>
            <p className="text-sm text-slate-400">
              Auto-synced from your calendar and client workspaces.
            </p>
          </div>
          <Button variant="ghost" size="sm">
            Sync calendar
          </Button>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Helios AI squad retro",
              time: "Mon 9:30am GMT-5",
              detail: "Async doc ready for insights.",
            },
            {
              title: "Nimbus growth lab planning",
              time: "Tue 1:00pm GMT-5",
              detail: "Review experiment backlog and analytics.",
            },
            {
              title: "Aperture design QA",
              time: "Thu 11:00am GMT-5",
              detail: "Sign off on motion specs and accessibility notes.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                <CalendarDays className="h-4 w-4 text-emerald-300" />
                Ritual
              </div>
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400">{item.time}</p>
              <p className="text-sm text-slate-300/80">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
