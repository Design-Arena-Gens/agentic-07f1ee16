import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-[0_40px_160px_-80px_rgba(16,185,129,0.45)]">
        {children}
      </div>
      <p className="mt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} Novawork Labs. All rights reserved.
      </p>
    </div>
  );
}
