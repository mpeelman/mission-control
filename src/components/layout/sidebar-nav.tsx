import Link from "next/link";
import { navigation } from "@/lib/data";

export function SidebarNav({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <aside className="border-r border-white/10 bg-[#0d1016] px-4 py-5 sm:px-5 sm:py-6">
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
          Mission Control
        </p>
        <p className="mt-2 text-sm text-zinc-300">
          Dark operational dashboard for projects, agents, and delivery.
        </p>
      </div>

      <nav className="mt-8 space-y-2">
        {navigation.map((item) => {
          const isActive = item.href === currentPath;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={[
                "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                isActive
                  ? "border border-white/10 bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200",
              ].join(" ")}
            >
              <span>{item.name}</span>
              {item.badge ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-emerald-300/80">
          System status
        </p>
        <p className="mt-2 text-sm text-zinc-200">Healthy, building live work surfaces</p>
        <p className="mt-2 text-xs text-zinc-400">GitHub issues are now the active lane for execution</p>
      </div>
    </aside>
  );
}
