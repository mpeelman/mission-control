import fs from "node:fs/promises";
import path from "node:path";

export type WorkspaceDoc = {
  title: string;
  description: string;
  href: string;
};

export type JournalEntry = {
  title: string;
  summary: string;
};

const workspaceRoot = "/home/openclaw/.openclaw/workspace";
const repoRoot = "/home/openclaw/.openclaw/workspace/mission-control";

function toGitHubBlobUrl(relativePath: string) {
  return `https://github.com/mpeelman/mission-control/blob/main/${relativePath}`;
}

export async function getWorkspaceDocs(): Promise<WorkspaceDoc[]> {
  const docs = [
    {
      title: "Mission Control Project Brief",
      description: "Product vision, goals, V1 scope, and success criteria.",
      href: toGitHubBlobUrl("../mission-control-project-brief.md"),
    },
    {
      title: "Mission Control Implementation Plan",
      description: "Phases, technical direction, and delivery sequencing.",
      href: toGitHubBlobUrl("../mission-control-implementation-plan.md"),
    },
    {
      title: "Mission Control UI Spec",
      description: "UI direction, shell behavior, and visual system guidance.",
      href: toGitHubBlobUrl("../mission-control-ui-spec.md"),
    },
    {
      title: "GitHub Projects Plan",
      description: "How the live GitHub Project board is structured.",
      href: "https://github.com/mpeelman/mission-control/blob/main/docs/github-projects-plan.md",
    },
    {
      title: "Sprint 1",
      description: "Current sprint goal, backlog, and definition of success.",
      href: "https://github.com/mpeelman/mission-control/blob/main/docs/sprint-1.md",
    },
  ];

  return docs;
}

export async function getJournalHighlights(): Promise<JournalEntry[]> {
  const journalPath = path.join(workspaceRoot, "memory", "2026-04-12.md");
  const content = await fs.readFile(journalPath, "utf8");

  const summaryMatch = content.match(/## Summary\n([\s\S]*?)\n\n## Work completed/);
  const notesMatch = content.match(/## Notes worth considering for long-term memory\n([\s\S]*)$/);

  const summary = summaryMatch?.[1]?.trim() ?? "Mission Control project work is in progress.";
  const notes = notesMatch?.[1]
    ?.split("\n")
    .filter((line) => line.startsWith("- "))
    .slice(0, 3)
    .map((line) => line.replace(/^- /, "").trim()) ?? [];

  return [
    {
      title: "2026-04-12 project summary",
      summary,
    },
    ...notes.map((note, index) => ({
      title: `Long-term takeaway ${index + 1}`,
      summary: note,
    })),
  ];
}

export async function getRepoDocCount() {
  const docsDir = path.join(repoRoot, "docs");
  const files = await fs.readdir(docsDir);
  return files.length;
}
