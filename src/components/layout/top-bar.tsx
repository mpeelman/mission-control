export function TopBar({
  eyebrow,
  title,
  notice,
}: {
  eyebrow: string;
  title: string;
  notice: string;
}) {
  return (
    <header className="border-b border-white/10 bg-[#0b0e14]/95 px-6 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm text-cyan-300">{eyebrow}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">{title}</h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-400">
            Search projects, issues, docs, memory
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
            {notice}
          </div>
        </div>
      </div>
    </header>
  );
}
