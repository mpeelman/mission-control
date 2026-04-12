import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";

const docs = [
  {
    title: "Project Brief",
    description: "Product vision, goals, V1 scope, and success criteria for Mission Control.",
    href: "https://github.com/mpeelman/mission-control",
  },
  {
    title: "Implementation Plan",
    description: "Phases, technical direction, and delivery sequencing for the dashboard.",
    href: "https://github.com/mpeelman/mission-control",
  },
  {
    title: "Issue Seed",
    description: "Initial issue structure used to seed the real GitHub backlog.",
    href: "https://github.com/mpeelman/mission-control/issues",
  },
  {
    title: "GitHub Projects Plan",
    description: "How the newer GitHub Projects board is structured for Mission Control.",
    href: "https://github.com/mpeelman/mission-control/blob/main/docs/github-projects-plan.md",
  },
  {
    title: "Sprint 1",
    description: "Current sprint goal, backlog, and definition of success.",
    href: "https://github.com/mpeelman/mission-control/blob/main/docs/sprint-1.md",
  },
];

export default function DocsPage() {
  return (
    <AppShell
      currentPath="/docs"
      eyebrow="Docs"
      title="Documentation Library"
      notice="Core planning docs are available"
    >
      <SectionCard
        title="Operational Documentation"
        description="The documents that define how Mission Control is being planned and built"
      >
        <div className="grid gap-4 xl:grid-cols-2">
          {docs.map((doc) => (
            <Link
              key={doc.title}
              href={doc.href}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:text-white"
            >
              <h2 className="text-lg font-semibold text-white">{doc.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{doc.description}</p>
            </Link>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  );
}
