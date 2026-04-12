import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";

const journalMoments = [
  {
    title: "2026-04-12 kickoff",
    summary:
      "Established the Discord structure, team operating system, GitHub workflow, Mission Control brief, implementation plan, issue seed, and UI specification.",
  },
  {
    title: "Chief of Staff role defined",
    summary:
      "The assistant was formalized as Chief of Staff, responsible for sequencing, coordination, summaries, and operational continuity.",
  },
  {
    title: "GitHub work tracking activated",
    summary:
      "Mission Control now has a real repository, GitHub Project board, and seeded issue backlog tied into the dashboard UI.",
  },
];

const memoryPrinciples = [
  "Capture what happened, not every message.",
  "Promote durable lessons into long-term memory when they will improve future work.",
  "Keep next steps visible so work can resume without friction.",
  "Use journals to preserve decisions, blockers, and operating improvements.",
];

export default function MemoryPage() {
  return (
    <AppShell
      currentPath="/memory"
      eyebrow="Memory"
      title="Project Memory"
      notice="Daily journals and durable lessons feed future work"
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard
          title="Recent Journal Highlights"
          description="High-value moments preserved from the early Mission Control build"
        >
          <div className="space-y-4">
            {journalMoments.map((entry) => (
              <div
                key={entry.title}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
              >
                <h2 className="text-lg font-semibold text-white">{entry.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{entry.summary}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Memory Rules"
          description="How this system should preserve context for future projects"
        >
          <div className="space-y-3">
            {memoryPrinciples.map((rule) => (
              <div
                key={rule}
                className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm text-zinc-100"
              >
                {rule}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
