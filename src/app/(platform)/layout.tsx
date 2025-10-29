import type { ReactNode } from "react";
import Link from "next/link";
import { Bell, Menu } from "lucide-react";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-white lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 text-slate-950">
                N
              </span>
              Novawork Talent OS
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-xs font-semibold text-slate-900">
                3
              </span>
            </button>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500" />
              <div className="hidden flex-col leading-tight sm:flex">
                <span className="text-sm font-semibold text-white">Alana Chen</span>
                <span>Principal LLM Architect</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:flex-row">
        <aside className="hidden w-64 flex-shrink-0 space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300 lg:block">
          <nav className="space-y-3">
            {[
              "Overview",
              "Active contracts",
              "Proposals",
              "Insights",
              "Payments",
              "Settings",
            ].map((item, idx) => (
              <Link
                key={item}
                href="#"
                className={`flex items-center justify-between rounded-2xl px-4 py-3 transition ${
                  idx === 0
                    ? "bg-emerald-400/10 text-emerald-200"
                    : "hover:bg-white/5"
                }`}
              >
                <span>{item}</span>
                {idx === 0 && (
                  <span className="rounded-full bg-emerald-400/30 px-2 py-0.5 text-[10px] text-emerald-100">
                    Live
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 space-y-8">{children}</main>
      </div>
    </div>
  );
}
