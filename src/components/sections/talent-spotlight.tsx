import { Star, MapPin, Briefcase, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { topTalents } from "@/lib/data";

export function TalentSpotlight() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Talent Spotlight"
        title="Every expert vetted for craft, strategic thinking, and communication."
        description="Profiles include async video, work samples, references, and skills scored by peer reviewers across our network."
      />
      <div className="grid gap-6 lg:grid-cols-4">
        {topTalents.map((talent) => (
          <article
            key={talent.name}
            className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent" />
            </div>
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">{talent.name}</h3>
                  <p className="text-sm text-slate-300/80">{talent.role}</p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  {talent.completed} projects
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-300/70">
                <span className="inline-flex items-center gap-1 font-medium text-emerald-200">
                  <Star className="h-4 w-4" />
                  {talent.rating.toFixed(2)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {talent.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  {talent.rate}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-300/80">{talent.bio}</p>
            </div>
            <div className="relative mt-auto flex flex-wrap gap-2">
              {talent.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="relative inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100">
              <Sparkles className="h-4 w-4" />
              Request introduction
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TalentSpotlight;
