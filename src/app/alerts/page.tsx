import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { getGitHubIssues, getGitHubProjectSnapshot, getGitHubTaskBoard } from "@/lib/github";
import { getChiefOfStaffSnapshot } from "@/lib/operating-system";

export default async function AlertsPage() {
  const [issues, projectItems, taskBoard, chiefOfStaff] = await Promise.all([
    getGitHubIssues().catch(() => []),
    getGitHubProjectSnapshot(),
    getGitHubTaskBoard(),
    getChiefOfStaffSnapshot(),
  ]);

  const highPriority = issues.filter((issue) =>
    issue.labels.some((label) => label.name === "priority-high"),
  );

  return (
    <AppShell
      currentPath="/alerts"
      eyebrow="Alerts"
      title="Operational Alerts"
      notice={`${highPriority.length} high-priority open issues`}
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard
          title="High Priority Issues"
          description="Live GitHub issue data for the most important open work"
        >
          <div className="space-y-3">
            {highPriority.map((issue) => (
              <Link
                key={issue.number}
                href={issue.url}
                className="block rounded-2xl border border-rose-400/15 bg-rose-400/10 p-4 transition hover:border-rose-300/30"
              >
                <p className="text-sm font-medium text-white">
                  #{issue.number} {issue.title}
                </p>
                <p className="mt-2 text-xs text-zinc-300">GitHub issue, live data</p>
              </Link>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Board Snapshot"
          description="Current work state from the active project board model"
        >
          <div className="space-y-3">
            {projectItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-[11px] text-cyan-200">
                    {item.status}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-500">{item.labels.join(" • ")}</p>
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard
          title="Blocked and Review Queue"
          description="Issues that need attention before the backlog can move cleanly"
        >
          <div className="space-y-3">
            {[...(taskBoard.Blocked ?? []), ...(taskBoard.Review ?? [])].slice(0, 8).map((issue) => (
              <Link
                key={issue.number}
                href={issue.url}
                className="block rounded-2xl border border-amber-400/15 bg-amber-400/10 p-4 transition hover:border-amber-300/30"
              >
                <p className="text-sm font-medium text-white">#{issue.number} {issue.title}</p>
                <p className="mt-2 text-xs text-zinc-300">
                  {issue.labels.map((label) => label.name).join(" • ") || "no labels"}
                </p>
              </Link>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Chief of Staff Attention Notes"
          description="Current executive guidance derived from the live operating state"
        >
          <div className="space-y-3">
            {chiefOfStaff.recommendations.map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100"
              >
                {note}
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </AppShell>
  );
}
