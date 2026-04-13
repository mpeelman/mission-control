import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { StatusPill } from "@/components/ui/status-pill";
import { getChiefOfStaffSnapshot } from "@/lib/operating-system";

export default async function ConsolePage() {
  const snapshot = await getChiefOfStaffSnapshot();

  const stats = [
    { label: "Open Issues", value: String(snapshot.metrics.openIssues), detail: "Live tracked work in GitHub" },
    { label: "High Priority", value: String(snapshot.metrics.highPriority), detail: "Issues that need close attention" },
    { label: "In Progress", value: String(snapshot.metrics.inProgress), detail: "Current execution lane" },
    { label: "Docs + Memory", value: String(snapshot.metrics.docsTracked + snapshot.metrics.memorySignals), detail: "Context surfaces available to the team" },
  ];

  return (
    <AppShell
      currentPath="/console"
      eyebrow="Chief of Staff"
      title="Chief of Staff Console"
      notice={`${snapshot.metrics.highPriority} priority items require active review`}
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard
          title="Executive Recommendations"
          description="Current guidance for how the portfolio should be driven"
        >
          <div className="space-y-3">
            {snapshot.recommendations.map((recommendation) => (
              <div
                key={recommendation}
                className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100"
              >
                {recommendation}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Roadmap Control"
          description="What is now, next, and later across the portfolio"
        >
          <div className="space-y-3">
            {snapshot.roadmap.map((milestone) => (
              <div key={milestone.name} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{milestone.name}</p>
                  <StatusPill state={milestone.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{milestone.focus}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard
          title="Workstream Control"
          description="The major lanes under active Chief of Staff management"
        >
          <div className="space-y-3">
            {snapshot.workstreams.map((workstream) => (
              <Link
                key={workstream.id}
                href={workstream.issueUrl}
                className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{workstream.name}</p>
                  <StatusPill state={workstream.status} />
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{workstream.outcome}</p>
              </Link>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Attention Queue"
          description="Issues currently driving the operating tempo"
        >
          <div className="space-y-3">
            {snapshot.issues.slice(0, 8).map((issue) => (
              <Link
                key={issue.number}
                href={issue.url}
                className="block rounded-2xl border border-white/8 bg-black/20 p-4 transition hover:border-cyan-400/30"
              >
                <p className="text-sm font-medium text-white">#{issue.number} {issue.title}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  {issue.labels.map((label) => label.name).join(" • ") || "no labels"}
                </p>
              </Link>
            ))}
          </div>
        </SectionCard>
      </section>
    </AppShell>
  );
}
