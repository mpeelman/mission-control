import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";

const schedule = [
  {
    day: "Monday",
    items: ["Sprint planning review", "Status summary pass"],
  },
  {
    day: "Tuesday",
    items: ["Frontend build block", "GitHub board cleanup"],
  },
  {
    day: "Wednesday",
    items: ["Design polish review", "Task and issue triage"],
  },
  {
    day: "Thursday",
    items: ["Docs and memory maintenance", "Operational check-in"],
  },
  {
    day: "Friday",
    items: ["Sprint recap", "Journal summary and next-step planning"],
  },
];

export default function CalendarPage() {
  return (
    <AppShell
      currentPath="/calendar"
      eyebrow="Calendar"
      title="Weekly Rhythm"
      notice="Recurring operating cadence"
    >
      <SectionCard
        title="Operating Schedule"
        description="A lightweight calendar view for the team’s recurring rhythm"
      >
        <div className="grid gap-4 xl:grid-cols-5">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-4"
            >
              <h2 className="text-sm font-semibold text-white">{day.day}</h2>
              <div className="mt-4 space-y-3">
                {day.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-3 py-3 text-sm text-zinc-100"
                  >
                    {item}
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
