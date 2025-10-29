import Link from "next/link";

const footerLinks = [
  {
    title: "Marketplace",
    links: [
      { label: "Find Talent", href: "/find-talent" },
      { label: "Find Work", href: "/find-work" },
      { label: "Talent OS", href: "/dashboard" },
      { label: "Case Studies", href: "#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Trust & Safety", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 text-sm text-slate-400 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 text-lg font-bold text-slate-950">
              N
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">Novawork</span>
              <span className="text-xs text-slate-400">
                The modern operating system for on-demand talent.
              </span>
            </div>
          </div>
          <p>
            Built for companies shipping ambitious roadmaps and freelancers delivering meaningful outcomes.
          </p>
          <div className="flex gap-3 text-slate-400">
            <a href="mailto:hello@novawork.com" className="hover:text-emerald-300">
              hello@novawork.com
            </a>
            <span aria-hidden="true">•</span>
            <a href="tel:+11234567890" className="hover:text-emerald-300">
              +1 (123) 456-7890
            </a>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3">
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                {column.title}
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition hover:text-emerald-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Novawork Labs. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-emerald-200">
              Privacy
            </Link>
            <Link href="#" className="hover:text-emerald-200">
              Security
            </Link>
            <Link href="#" className="hover:text-emerald-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
