export function SectionCard({
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
