export function StatusPill({ state }: { state: string }) {
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
    <span
      className={`rounded-full border px-2.5 py-1 text-xs ${styles[state] ?? "border-white/10 bg-white/10 text-zinc-200"}`}
    >
      {state}
    </span>
  );
}
