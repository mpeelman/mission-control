import { getGitHubIssues, getGitHubTaskBoard } from "@/lib/github";
import { portfolioWorkstreams, roadmapMilestones } from "@/lib/portfolio";
import { getMemoryInsights, getWorkspaceDocs } from "@/lib/workspace";

export async function getChiefOfStaffSnapshot() {
  const [issues, taskBoard, docs, memoryInsights] = await Promise.all([
    getGitHubIssues().catch(() => []),
    getGitHubTaskBoard().catch(() => ({ Todo: [], "In Progress": [], Review: [], Blocked: [] })),
    getWorkspaceDocs().catch(() => []),
    getMemoryInsights().catch(() => []),
  ]);

  const highPriority = issues.filter((issue) =>
    issue.labels.some((label) => label.name === "priority-high"),
  );

  const recommendations = [
    "Keep building product-visible surfaces before expanding planning-only artifacts.",
    "Use GitHub issues as the tracked execution lane and Mission Control as the visibility layer.",
    "Prioritize memory, live data, and executive signal before deeper orchestration work.",
  ];

  return {
    issues,
    taskBoard,
    docs,
    memoryInsights,
    workstreams: portfolioWorkstreams,
    roadmap: roadmapMilestones,
    metrics: {
      openIssues: issues.length,
      highPriority: highPriority.length,
      inProgress: taskBoard["In Progress"]?.length ?? 0,
      blocked: taskBoard.Blocked?.length ?? 0,
      docsTracked: docs.length,
      memorySignals: memoryInsights.length,
    },
    recommendations,
  };
}
