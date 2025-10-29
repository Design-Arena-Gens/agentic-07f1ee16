import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Log in to Novawork",
  description: "Access your Novawork dashboard, proposals, and engagement insights.",
};

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-white">Log in to Novawork</h1>
        <p className="text-sm text-slate-400">
          Access your engagements, proposals, and velocity metrics.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none focus-visible:border-emerald-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none focus-visible:border-emerald-400"
            required
          />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-slate-900" />
            Remember me
          </label>
          <Link href="#" className="text-emerald-300 hover:text-emerald-200">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full" rightIcon={<ArrowRight className="h-4 w-4" />}>
          Log in
        </Button>
      </form>
      <div className="text-center text-xs text-slate-400">
        New to Novawork?{" "}
        <Link href="/signup" className="font-semibold text-emerald-300 hover:text-emerald-200">
          Create an account
        </Link>
      </div>
    </div>
  );
}
