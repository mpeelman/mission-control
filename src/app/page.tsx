import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { StatusPill } from "@/components/ui/status-pill";
import {
  links,
  projectBoardUrl,
  projects,
  sprintItems,
  team,
  wins,
} from "@/lib/data";
import { getMissionControlLiveSnapshot } from "@/lib/github";
import { getChiefOfStaffSnapshot } from "@/lib/operating-system";
import { portfolioWorkstreams, roadmapMilestones } from "@/lib/portfolio";

export default async function Home() {
  const [snapshot, chiefOfStaff] = await Promise.all([
    getMissionControlLiveSnapshot(),
    getChiefOfStaffSnapshot(),
  ]);

  const stats = [
    {
      label: "Active Projects",
      value: String(snapshot.metrics.activeProjects),
      detail: "Mission Control operating lanes",
    },
    {
      label: "In Progress",
      value: String(snapshot.metrics.inProgressCount),
      detail: "Live board activity",
    },
    {
      label: "Blocked",
      value: String(snapshot.metrics.blockedCount),
      detail: "High-priority items",
    },
    {
      label: "Recent Wins",
      value: String(snapshot.metrics.recentWinsCount),
      detail: "Delivered milestone surfaces",
    },
  ];

  return (
    <AppShell
      currentPath="/"
      eyebrow="Overview"
      title="Mission Control"
      notice={`${snapshot.metrics.blockedCount} blockers need review`}
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <SectionCard
          title="Active Projects"
          description="Current delivery lanes and project momentum"
        >
          <div className="space-y-4">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-white">{project.name}</h3>
                      <StatusPill state={project.status} />
                    </div>
                    <p className="mt-2 max-w-2xl text-sm text-zinc-400">{project.summary}</p>
                  </div>
                  <p className="text-sm text-zinc-500">{project.owner}</p>
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Link
                    href={project.githubUrl}
                    className="rounded-xl border border-white/6 bg-black/20 px-3 py-2 text-xs text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                  >
                    {project.githubLabel}
                  </Link>
                  <Link
                    href={project.discordUrl}
                    className="rounded-xl border border-white/6 bg-black/20 px-3 py-2 text-xs text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                  >
                    {project.discordLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Alerts and Blockers"
          description="High-signal items that need attention"
        >
          <div className="space-y-3">
            {snapshot.highPriority.map((issue) => (
              <Link
                key={issue.number}
                href={issue.url}
                className="block rounded-2xl border border-amber-400/15 bg-amber-400/10 p-4 text-sm text-zinc-200 transition hover:border-amber-300/30"
              >
                #{issue.number} {issue.title}
              </Link>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Current Sprint" description="Active work lane for Sprint 1">
          <div className="space-y-3">
            {sprintItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-zinc-500">Owner: {item.owner}</p>
                </div>
                <Link href={item.githubUrl}>
                  <StatusPill state={item.state} />
                </Link>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Team Roles"
          description="Current functional lanes for the build team"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {team.slice(0, 4).map((member) => (
              <div
                key={member.role}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <p className="text-sm font-medium text-cyan-200">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{member.focus}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard
          title="Chief of Staff Brief"
          description="What leadership attention should focus on right now"
        >
          <div className="space-y-3">
            {chiefOfStaff.recommendations.map((recommendation) => (
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
          title="Knowledge Signals"
          description="Current continuity surfaces available to the team"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Docs tracked</p>
              <p className="mt-2 text-2xl font-semibold text-white">{chiefOfStaff.metrics.docsTracked}</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Memory signals</p>
              <p className="mt-2 text-2xl font-semibold text-white">{chiefOfStaff.metrics.memorySignals}</p>
            </div>
          </div>
        </SectionCard>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard
          title="Portfolio Roadmap"
          description="The next layers Mission Control is being shaped to support"
        >
          <div className="space-y-3">
            {roadmapMilestones.map((milestone) => (
              <div
                key={milestone.name}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{milestone.name}</p>
                  <StatusPill state={milestone.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{milestone.focus}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Portfolio Workstreams"
          description="The broader operating model this dashboard is growing into"
        >
          <div className="space-y-3">
            {portfolioWorkstreams.slice(0, 4).map((workstream) => (
              <Link
                key={workstream.id}
                href={workstream.issueUrl}
                className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{workstream.name}</p>
                  <StatusPill state={workstream.status} />
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{workstream.summary}</p>
              </Link>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Recent Wins" description="Momentum and completed planning work">
          <div className="space-y-3">
            {wins.map((win) => (
              <div
                key={win}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-sm text-zinc-100"
              >
                {win}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Quick Links"
          description="Jump points to the surrounding operating system"
        >
          <div className="mb-4 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
            Live board: <Link href={projectBoardUrl} className="underline underline-offset-4">Mission Control Sprint Board</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-400/30 hover:text-white"
              >
                <p className="text-sm font-medium text-zinc-200">{link.label}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">{link.caption}</p>
              </Link>
            ))}
          </div>
        </SectionCard>
      </section>
    </AppShell>
  );
}
