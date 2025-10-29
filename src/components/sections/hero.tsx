"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trendingSkills = [
  "Multi-agent AI",
  "Growth Architecture",
  "Design Systems",
  "Lifecycle Automation",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/80 p-8 shadow-[0_40px_120px_-60px_rgba(16,185,129,0.45)] md:p-14">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200">
            <Sparkles className="h-4 w-4" />
            <span>Hire elite product, AI, and growth talent</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-[1.15] text-white md:text-5xl lg:text-6xl">
              Build without compromise using curated talent clouds on demand.
            </h1>
            <p className="text-base text-slate-300/80 md:text-lg">
              Novawork pairs your most ambitious roadmap with specialists vetted for craft, communication, and velocity. Spin up pods, embed strategic operators, and ship outcomes faster than internal hiring allows.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg">
              Start hiring now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg" className="text-slate-200">
              Browse talent
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300/70">
            <TrendingUp className="h-4 w-4 text-emerald-300" />
            <span className="font-medium text-white">Trending specializations:</span>
            {trendingSkills.map((skill) => (
              <Badge key={skill} variant="emerald" className="bg-transparent text-emerald-200">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -top-20 -right-4 hidden h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl lg:block" />
          <div className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.4)] backdrop-blur-xl">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm font-semibold text-emerald-300">Project snapshot</p>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Engagement</span>
                  <span className="text-white">AI copilot launch</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Velocity</span>
                  <span className="text-white">9 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Squad</span>
                  <span className="text-white">5 specialists</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["AI Architect", "Design Lead", "Growth Partner", "Product Ops"].map(
                (role) => (
                  <div
                    key={role}
                    className="flex flex-col gap-1 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/10 p-4"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Role
                    </span>
                    <span className="text-sm font-medium text-white">{role}</span>
                  </div>
                )
              )}
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">Avg. time to match</p>
                <p className="text-xl font-semibold text-white">46 hours</p>
              </div>
              <Badge variant="emerald" className="bg-emerald-500/20 text-sm text-emerald-100">
                2.3× faster than industry
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 md:grid-cols-4">
        {[
          { label: "Enterprise retention", value: "97%" },
          { label: "Average NPS", value: "72" },
          { label: "Delivery runways", value: "9.5 weeks" },
          { label: "Specialist network", value: "68k" },
        ].map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {stat.label}
            </p>
            <p className="text-2xl font-semibold text-white md:text-3xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
