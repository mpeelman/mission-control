const navigation = [
  { name: "Overview", active: true, badge: null },
  { name: "Tasks", active: false, badge: "12" },
  { name: "Projects", active: false, badge: "4" },
  { name: "Team", active: false, badge: "6" },
  { name: "Calendar", active: false, badge: null },
  { name: "Docs", active: false, badge: null },
  { name: "Memory", active: false, badge: null },
  { name: "Alerts", active: false, badge: "2" },
  { name: "Settings", active: false, badge: null },
];

const stats = [
  { label: "Active Projects", value: "4", detail: "+1 this week" },
  { label: "In Progress", value: "12", detail: "3 high priority" },
  { label: "Blocked", value: "2", detail: "Needs decisions" },
  { label: "Recent Wins", value: "7", detail: "Last 7 days" },
];

const projects = [
  {
    name: "Mission Control",
    status: "Active",
    progress: 32,
    owner: "Chief of Staff + Frontend",
    summary: "Building the first dashboard shell and operational UI system.",
    github: "Repo bootstrap complete",
    discord: "Sprint 1 planning live",
  },
  {
    name: "GitHub Workflow",
    status: "Planning",
    progress: 65,
    owner: "Chief of Staff",
    summary: "Converting issue seeds and process docs into a real delivery lane.",
    github: "Issue flow pending",
    discord: "Tracked in CONTROL",
  },
  {
    name: "Discord Ops",
    status: "Healthy",
    progress: 78,
    owner: "Ops",
    summary: "Channels, status surfaces, and communication structure are in place.",
    github: "Low code demand",
    discord: "Operating smoothly",
  },
];

const sprintItems = [
  {
    title: "Refine dashboard shell",
    state: "In Progress",
    owner: "Frontend",
  },
  {
    title: "Seed GitHub issues from planning docs",
    state: "Ready",
    owner: "Chief of Staff",
  },
  {
    title: "Define project board structure",
    state: "Blocked",
    owner: "Product",
  },
  {
    title: "Add dedicated Projects screen",
    state: "Next Up",
    owner: "Frontend",
  },
];

const team = [
  {
    role: "Chief of Staff",
    focus: "Planning, sequencing, decision support, and status visibility",
  },
  {
    role: "Product Lead",
    focus: "Scope, requirements, and V1 success criteria",
  },
  {
    role: "Frontend Engineering",
    focus: "Dashboard shell, cards, layout, and responsive behavior",
  },
  {
    role: "Design and UX",
    focus: "Dark operational UI language and information hierarchy",
  },
];

const wins = [
  "Discord operating structure created",
  "Mission Control brief and implementation plan drafted",
  "Issue seed and UI spec completed",
  "GitHub access configured for build work",
];

const links = [
  {
    label: "GitHub Repo",
    href: "https://github.com/mpeelman/mission-control",
    caption: "Source code and future pull requests",
  },
  {
    label: "Projects Channel",
    href: "#",
    caption: "Discussion threads for active initiatives",
  },
  {
    label: "Agent Status",
    href: "#",
    caption: "Progress updates and journal summaries",
  },
  {
    label: "Project Brief",
    href: "#",
    caption: "Vision, requirements, and project direction",
  },
];

function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm text-zinc-500">{detail}</p>
    </div>
  );
}

function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#101218] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function StatusPill({ state }: { state: string }) {
  const styles: Record<string, string> = {
    Active: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    Healthy: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    Planning: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    Blocked: "border-rose-400/20 bg-rose-400/10 text-rose-200",
    Ready: "border-blue-400/20 bg-blue-400/10 text-blue-200",
    "In Progress": "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    "Next Up": "border-violet-400/20 bg-violet-400/10 text-violet-200",
  };

  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs ${styles[state] ?? "border-white/10 bg-white/10 text-zinc-200"}`}>
      {state}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090b10] text-zinc-100">
      <div className="grid min-h-screen lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="border-r border-white/10 bg-[#0d1016] px-5 py-6">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
              Mission Control
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              Dark operational dashboard for projects, agents, and delivery.
            </p>
          </div>

          <nav className="mt-8 space-y-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className={[
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                  item.active
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200",
                ].join(" ")}
              >
                <span>{item.name}</span>
                {item.badge ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                    {item.badge}
                  </span>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300/80">
              System status
            </p>
            <p className="mt-2 text-sm text-zinc-200">Healthy, building Sprint 1 shell</p>
            <p className="mt-2 text-xs text-zinc-400">Mock data first, live integrations later</p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="border-b border-white/10 bg-[#0b0e14]/95 px-6 py-4 backdrop-blur">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-sm text-cyan-300">Overview</p>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">
                  Mission Control
                </h1>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-400">
                  Search projects, issues, docs, memory
                </div>
                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                  2 blockers need review
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 px-6 py-6">
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
                  {projects.map((project) => (
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
                      <div className="mt-4 grid gap-3 text-xs text-zinc-500 md:grid-cols-2">
                        <div className="rounded-xl border border-white/6 bg-black/20 px-3 py-2">
                          GitHub: <span className="text-zinc-300">{project.github}</span>
                        </div>
                        <div className="rounded-xl border border-white/6 bg-black/20 px-3 py-2">
                          Discord: <span className="text-zinc-300">{project.discord}</span>
                        </div>
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
              <SectionCard
                title="Current Sprint"
                description="Active work lane for Sprint 1"
              >
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
                  {team.map((member) => (
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
                title="Recent Wins"
                description="Momentum and completed planning work"
              >
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
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-400/30 hover:text-white"
                    >
                      <p className="text-sm font-medium text-zinc-200">{link.label}</p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">{link.caption}</p>
                    </a>
                  ))}
                </div>
              </SectionCard>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
