import { ArrowRight, Clock, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { openRoles } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function JobShowcase() {
  return (
    <section className="space-y-10" id="roles">
      <SectionHeading
        eyebrow="Opportunity Hub"
        title="Strategic engagements sourced from scale-ups to Fortune 500 leaders."
        description="Access briefs that respect your craft. Every posting is pre-qualified, scoped with clear deliverables, and supported by async updates."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {openRoles.map((role) => (
          <article
            key={role.title}
            className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-slate-950/80 p-6"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-300/80">{role.company}</p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  {role.proposals} proposals
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-300/80">{role.description}</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-emerald-300" />
                {role.rate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-300" />
                {role.duration}
              </span>
              <span className="text-xs text-slate-400">{role.location}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <Button
              variant="secondary"
              className="mt-auto justify-center"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              View brief
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default JobShowcase;
