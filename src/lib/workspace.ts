import fs from "node:fs/promises";
import path from "node:path";

export type WorkspaceDoc = {
  title: string;
  description: string;
  href: string;
  path: string;
};

export type JournalEntry = {
  title: string;
  summary: string;
};

export type MemoryInsight = {
  title: string;
  summary: string;
};

const workspaceRoot = "/home/openclaw/.openclaw/workspace";
const repoRoot = "/home/openclaw/.openclaw/workspace/mission-control";

const topLevelDocDescriptions: Record<string, string> = {
  "mission-control-project-brief.md": "Product vision, goals, V1 scope, and success criteria.",
  "mission-control-implementation-plan.md": "Phases, technical direction, and delivery sequencing.",
  "mission-control-ui-spec.md": "UI direction, shell behavior, and visual system guidance.",
  "mission-control-issue-seed.md": "Issue seed inventory and backlog shaping for Mission Control work.",
  "github-workflow.md": "Repository, issue, and GitHub Projects operating guidance.",
  "team-operating-system.md": "Roles, operating rhythms, and the team coordination model.",
  "discord-structure.md": "Discord channel structure and how communication lanes are intended to work.",
  "daily-journal-system.md": "How journals should be written, maintained, and used for continuity.",
  "MEMORY.md": "Curated long-term memory and durable operating decisions.",
};

const repoDocDescriptions: Record<string, string> = {
  "github-projects-plan.md": "How the live GitHub Project board is structured.",
  "sprint-1.md": "Current sprint goal, backlog, and definition of success.",
  "portfolio-prioritization.md": "How portfolio workstreams should be prioritized and sequenced.",
  "portfolio-roadmap.md": "Roadmap framing for Mission Control beyond the initial dashboard shell.",
  "chief-of-staff-console-brief.md": "MVP framing for the Chief of Staff operating surface.",
  "team-memory-system-brief.md": "Design notes for long-term memory and team knowledge handling.",
  "idea-to-execution-brief.md": "How ideas should become structured work and tracked backlog.",
  "agent-orchestration-brief.md": "Planning notes for orchestrated multi-agent work.",
  "security-and-hosting-strategy.md": "Remote access, hosting, and safe operating posture guidance.",
  "overnight-chief-of-staff-plan.md": "Overnight planning and execution intent for the repo.",
};

function toRepoBlobUrl(relativePath: string) {
  return `https://github.com/mpeelman/mission-control/blob/main/${relativePath}`;
}

function titleFromFilename(filename: string) {
  return filename
    .replace(/\.md$/i, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function readMarkdownFiles(dir: string) {
  const files = await fs.readdir(dir);
  return files.filter((file) => file.endsWith(".md")).sort();
}

export async function getWorkspaceDocs(): Promise<WorkspaceDoc[]> {
  const [topLevelFiles, repoDocFiles] = await Promise.all([
    readMarkdownFiles(workspaceRoot),
    readMarkdownFiles(path.join(repoRoot, "docs")),
  ]);

  const topLevelDocs = topLevelFiles
    .filter((file) => file !== "BOOTSTRAP.md")
    .map((file) => ({
      title: titleFromFilename(file),
      description: topLevelDocDescriptions[file] ?? "Workspace documentation relevant to Mission Control operations.",
      href: toRepoBlobUrl(`../${file}`),
      path: file,
    }));

  const repoDocs = repoDocFiles.map((file) => ({
    title: titleFromFilename(file),
    description: repoDocDescriptions[file] ?? "Repository documentation supporting the Mission Control build.",
    href: toRepoBlobUrl(`docs/${file}`),
    path: `docs/${file}`,
  }));

  return [...topLevelDocs, ...repoDocs];
}

export async function getJournalHighlights(): Promise<JournalEntry[]> {
  const memoryDir = path.join(workspaceRoot, "memory");
  const files = (await fs.readdir(memoryDir))
    .filter((file) => /^\d{4}-\d{2}-\d{2}\.md$/.test(file))
    .sort()
    .reverse()
    .slice(0, 2);

  const entries = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(memoryDir, file);
      const content = await fs.readFile(fullPath, "utf8");
      const durableMatch = content.match(/## Durable memory checkpoint\n([\s\S]*?)(\n## |$)/);
      const builtMatch = content.match(/## What was built\n([\s\S]*?)(\n## |$)/);
      const nextMatch = content.match(/## Immediate next build direction\n([\s\S]*?)(\n## |$)/);

      const sections = [durableMatch?.[1], builtMatch?.[1], nextMatch?.[1]]
        .filter(Boolean)
        .flatMap((section) =>
          section!
            .split("\n")
            .filter((line) => line.startsWith("- "))
            .map((line) => line.replace(/^- /, "").trim()),
        )
        .slice(0, 3);

      return sections.map((item, index) => ({
        title: `${file.replace(/\.md$/, "")} highlight ${index + 1}`,
        summary: item,
      }));
    }),
  );

  return entries.flat();
}

export async function getMemoryInsights(): Promise<MemoryInsight[]> {
  const memoryPath = path.join(workspaceRoot, "MEMORY.md");
  const content = await fs.readFile(memoryPath, "utf8");
  const lines = content
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim())
    .slice(0, 8);

  return lines.map((line, index) => ({
    title: `Durable memory ${index + 1}`,
    summary: line,
  }));
}

export async function getRepoDocCount() {
  const docsDir = path.join(repoRoot, "docs");
  const files = await fs.readdir(docsDir);
  return files.filter((file) => file.endsWith(".md")).length;
}
