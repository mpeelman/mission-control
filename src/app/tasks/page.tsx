import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { taskBoard } from "@/lib/data";

function PriorityChip({ priority }: { priority: "High" | "Medium" | "Low" }) {
  const styles = {
    High: "border-rose-400/20 bg-rose-400/10 text-rose-200",
    Medium: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    Low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  };

  return (
    <span className={`rounded-full border px-2 py-1 text-[11px] ${styles[priority]}`}>
      {priority}
    </span>
  );
}

export default function TasksPage() {
  return (
    <AppShell
      currentPath="/tasks"
      eyebrow="Tasks"
      title="Work Board"
      notice="2 active build lanes"
    >
      <SectionCard
        title="Current Task Board"
        description="A first operational view of active work across the Mission Control effort"
      >
        <div className="grid gap-4 xl:grid-cols-4">
          {Object.entries(taskBoard).map(([column, items]) => (
            <div
              key={column}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-white">{column}</h2>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-400">
                  {items.length}
                </span>
              </div>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium text-zinc-100">{item.title}</p>
                      <PriorityChip priority={item.priority} />
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">Owner: {item.owner}</p>
                    <p className="mt-1 text-xs text-zinc-500">Project: {item.project}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  );
}
