import { featuredClients } from "@/lib/data";

export function TrustedCompanies() {
  return (
    <section className="mt-20" aria-label="Trusted enterprise clients">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-6 overflow-x-auto px-2 py-2 text-sm text-slate-300/80 md:text-base">
          {featuredClients.map((client) => (
            <div
              key={client.name}
              className="flex min-w-[120px] flex-col items-center gap-2 text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                {client.logo}
              </span>
              <span className="text-slate-200">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
