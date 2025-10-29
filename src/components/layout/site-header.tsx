"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { label: "Find Talent", href: "/find-talent" },
  { label: "Find Work", href: "/find-work" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Resources", href: "#resources" },
];

export function SiteHeader({ sticky = true }: { sticky?: boolean }) {
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "z-50 w-full transition-all",
        sticky && "sticky top-0 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 text-lg font-semibold text-white"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 text-slate-950">
              <span className="text-xl font-black">N</span>
              <span className="absolute inset-0 rounded-2xl border border-white/40" />
            </span>
            <span className="flex flex-col leading-tight">
              <span>Novawork</span>
              <span className="text-xs font-medium text-slate-300/80">
                Elite talent marketplace
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-200 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative flex items-center gap-1 transition-colors hover:text-white"
            >
              <span>{link.label}</span>
              {link.href.startsWith("/enterprise") && (
                <ArrowUpRight className="h-4 w-4 text-emerald-300" />
              )}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="flex items-center gap-1 text-sm text-emerald-300 transition hover:text-emerald-200"
          >
            <span>Talent OS</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get started</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-3 text-white lg:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden",
          isMobileOpen ? "grid" : "hidden"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pb-8">
          <nav className="flex flex-col gap-4 text-base text-slate-200">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-emerald-300" />
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-emerald-200"
            >
              <span>Talent OS</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
          <div className="flex flex-col gap-3">
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                Log in
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/signup" onClick={() => setMobileOpen(false)}>
                Get started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
