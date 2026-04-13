import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { StatusPill } from "@/components/ui/status-pill";
import { projects } from "@/lib/data";
import { getMissionControlLiveSnapshot } from "@/lib/github";
import { portfolioWorkstreams } from "@/lib/portfolio";

export default async function ProjectsPage() {
  const snapshot = await getMissionControlLiveSnapshot();

  return (
    <AppShell
      currentPath="/projects"
      eyebrow="Projects"
      title="Project Grid"
      notice={`${snapshot.metrics.inProgressCount} active board items`}
    >
      <SectionCard
        title="Active Project Portfolio"
        description="A clearer view of the work Mission Control is organizing right now"
      >
        <div className="mb-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
          Live GitHub signal: {snapshot.board.length} tracked board items currently surfaced.
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold text-white">{project.name}</h2>
                    <StatusPill state={project.status} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{project.summary}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {project.owner}
                </p>
              </div>

              <div className="mt-5">
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

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href={project.githubUrl}
                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                >
                  <p className="font-medium">GitHub</p>
                  <p className="mt-1 text-xs text-zinc-500">{project.githubLabel}</p>
                </Link>
                <Link
                  href={project.discordUrl}
                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                >
                  <p className="font-medium">Discord</p>
                  <p className="mt-1 text-xs text-zinc-500">{project.discordLabel}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        {portfolioWorkstreams.map((workstream) => (
          <Link
            key={workstream.id}
            href={workstream.issueUrl}
            className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-cyan-400/30"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">{workstream.name}</h2>
              <StatusPill state={workstream.status} />
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{workstream.summary}</p>
            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-zinc-500">
              <span>{workstream.owner}</span>
              <span>{workstream.horizon}</span>
            </div>
          </Link>
        ))}
      </section>
    </AppShell>
  );
}
