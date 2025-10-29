import { Lightbulb, Cpu, Rocket, LineChart } from "lucide-react";
import { talentCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

const icons = [Cpu, Lightbulb, Rocket, LineChart];

export function TalentCategories() {
  return (
    <section className="space-y-10" id="talent">
      <SectionHeading
        eyebrow="Talent Clouds"
        title="Orchestrate multidisciplinary squads in days, not months."
        description="Match with veteran operators across AI, product, design, and growth who integrate seamlessly with your rituals."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {talentCategories.map((category, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-950/40 to-slate-900/60 p-8"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/10 blur-3xl" />
              </div>
              <div className="relative space-y-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-300/80">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TalentCategories;
