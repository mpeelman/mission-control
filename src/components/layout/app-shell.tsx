import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TopBar } from "@/components/layout/top-bar";

export function AppShell({
  currentPath,
  eyebrow,
  title,
  notice,
  children,
}: {
  currentPath: string;
  eyebrow: string;
  title: string;
  notice: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#090b10] text-zinc-100">
      <div className="grid min-h-screen lg:grid-cols-[260px_minmax(0,1fr)]">
        <SidebarNav currentPath={currentPath} />

        <div className="flex min-h-screen flex-col">
          <TopBar eyebrow={eyebrow} title={title} notice={notice} />
          <div className="flex-1 px-6 py-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
