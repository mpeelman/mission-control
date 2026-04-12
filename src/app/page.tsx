import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { StatusPill } from "@/components/ui/status-pill";
import { links, projects, sprintItems, stats, team, wins } from "@/lib/data";

export default function Home() {
  return (
    <AppShell
      currentPath="/"
      eyebrow="Overview"
      title="Mission Control"
      notice="2 blockers need review"
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
            {[
              "Convert issue seed doc into real GitHub issues",
              "Define exact sprint board structure in GitHub Projects",
              "Decide how future agent roles will map to repo ownership",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-amber-400/15 bg-amber-400/10 p-4 text-sm text-zinc-200"
              >
                {item}
              </div>
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
                <StatusPill state={item.state} />
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
