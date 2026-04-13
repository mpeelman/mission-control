import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SectionCard } from "@/components/dashboard/section-card";
import { getRepoDocCount, getWorkspaceDocs } from "@/lib/workspace";

export default async function DocsPage() {
  const [docs, repoDocCount] = await Promise.all([
    getWorkspaceDocs(),
    getRepoDocCount().catch(() => 0),
  ]);

  return (
    <AppShell
      currentPath="/docs"
      eyebrow="Docs"
      title="Documentation Library"
      notice={`${repoDocCount} repo docs currently tracked`}
    >
      <SectionCard
        title="Operational Documentation"
        description="The documents that define how Mission Control is being planned and built"
      >
        <div className="mb-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
          This view is now reading from the workspace-backed documentation layer rather than only hardcoded display copy.
        </div>

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
