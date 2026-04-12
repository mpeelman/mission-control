import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { team } from "@/lib/data";

export default function TeamPage() {
  return (
    <AppShell
      currentPath="/team"
      eyebrow="Team"
      title="Role Grid"
      notice="6 functional roles visible"
    >
      <SectionCard
        title="Team Structure"
        description="A clear view of the current operating lanes for the Mission Control build"
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.role}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-white">{member.role}</h2>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">
                  {member.lane}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{member.focus}</p>
              <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Linked Project</p>
                <p className="mt-2 text-sm text-zinc-200">{member.linkedProject}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  );
}
