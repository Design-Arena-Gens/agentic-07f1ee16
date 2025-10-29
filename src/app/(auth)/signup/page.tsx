import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Create your Novawork account",
  description: "Join Novawork to collaborate on elite freelance engagements and manage your talent profile.",
};

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-white">Join Novawork</h1>
        <p className="text-sm text-slate-400">
          Create a profile to access curated engagements and talent programs.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Full name
          </label>
          <input
            type="text"
            placeholder="Jordan Lee"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none focus-visible:border-emerald-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@studio.com"
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
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Primary focus
          </label>
          <select
            className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none focus-visible:border-emerald-400"
          >
            <option className="bg-slate-950 text-white">Freelancer</option>
            <option className="bg-slate-950 text-white">Company hiring</option>
            <option className="bg-slate-950 text-white">Agency partner</option>
          </select>
        </div>
        <Button type="submit" className="w-full" rightIcon={<ArrowRight className="h-4 w-4" />}>
          Create account
        </Button>
      </form>
      <div className="text-center text-xs text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-emerald-300 hover:text-emerald-200">
          Log in
        </Link>
      </div>
    </div>
  );
}
