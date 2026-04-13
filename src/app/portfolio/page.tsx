import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatusPill } from "@/components/ui/status-pill";
import {
  architectureLayers,
  portfolioWorkstreams,
  roadmapMilestones,
} from "@/lib/portfolio";

function PriorityPill({ priority }: { priority: "High" | "Medium" | "Low" }) {
  const styles = {
    High: "border-rose-400/20 bg-rose-400/10 text-rose-200",
    Medium: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    Low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  };

  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs ${styles[priority]}`}>
      {priority}
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <AppShell
      currentPath="/portfolio"
      eyebrow="Portfolio"
      title="Portfolio Architecture"
      notice="Architecture, roadmap, and workstreams are now visible in-product"
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <SectionCard
          title="Workstreams"
          description="The major lanes Mission Control will organize over time"
        >
          <div className="space-y-4">
            {portfolioWorkstreams.map((workstream) => (
              <div
                key={workstream.id}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-semibold text-white">{workstream.name}</h2>
                      <StatusPill state={workstream.status} />
                      <PriorityPill priority={workstream.priority} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{workstream.summary}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Owner</p>
                    <p className="mt-1 text-sm text-zinc-200">{workstream.owner}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-500">Horizon</p>
                    <p className="mt-1 text-sm text-cyan-200">{workstream.horizon}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                  Outcome: {workstream.outcome}
                </div>

                <Link
                  href={workstream.issueUrl}
                  className="mt-4 inline-flex rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                >
                  Open issue #{workstream.issueNumber}
                </Link>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="space-y-6">
          <SectionCard
            title="Roadmap"
            description="The recommended build order for the broader portfolio"
          >
            <div className="space-y-3">
              {roadmapMilestones.map((milestone) => (
                <div
                  key={milestone.name}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-white">{milestone.name}</h3>
                    <StatusPill state={milestone.status} />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                    {milestone.window}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{milestone.focus}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Architecture Layers"
            description="The system model being used to shape this product"
          >
            <div className="space-y-3">
              {architectureLayers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4"
                >
                  <h3 className="text-sm font-semibold text-white">{layer.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{layer.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] text-cyan-200"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </AppShell>
  );
}
