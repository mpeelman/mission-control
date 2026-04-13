export type GitHubIssueLite = {
  number: number;
  title: string;
  state: string;
  url: string;
  labels: { name: string; color: string }[];
};

export type GitHubProjectItemLite = {
  title: string;
  status: string;
  url: string;
  labels: string[];
};

export type GitHubTaskBoard = Record<string, GitHubIssueLite[]>;

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "mission-control",
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`GitHub fetch failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getGitHubIssues(): Promise<GitHubIssueLite[]> {
  const issues = await fetchJson<
    {
      number: number;
      title: string;
      state: string;
      html_url: string;
      labels: { name: string; color: string }[];
      pull_request?: unknown;
    }[]
  >("https://api.github.com/repos/mpeelman/mission-control/issues?state=open&per_page=50");

  return issues
    .filter((issue) => !issue.pull_request)
    .map((issue) => ({
      number: issue.number,
      title: issue.title,
      state: issue.state,
      url: issue.html_url,
      labels: issue.labels,
    }));
}

function inferBoardStatus(issue: GitHubIssueLite): string {
  const labelNames = issue.labels.map((label) => label.name);

  if (labelNames.includes("done")) return "Done";
  if (labelNames.includes("review")) return "Review";
  if (labelNames.includes("blocked")) return "Blocked";
  if (labelNames.includes("ready")) return "Todo";
  if (labelNames.includes("priority-high")) return "In Progress";

  return "Todo";
}

export async function getGitHubProjectSnapshot(): Promise<GitHubProjectItemLite[]> {
  const issues = await getGitHubIssues().catch(() => []);

  return issues.slice(0, 10).map((issue) => ({
    title: issue.title,
    status: inferBoardStatus(issue),
    url: issue.url,
    labels: issue.labels.map((label) => label.name),
  }));
}

export async function getGitHubTaskBoard(): Promise<GitHubTaskBoard> {
  const issues = await getGitHubIssues().catch(() => []);

  const board: GitHubTaskBoard = {
    Todo: [],
    "In Progress": [],
    Review: [],
    Blocked: [],
  };

  for (const issue of issues) {
    const status = inferBoardStatus(issue);
    if (status in board) {
      board[status].push(issue);
    }
  }

  return board;
}

export async function getMissionControlLiveSnapshot() {
  const issues = await getGitHubIssues().catch(() => []);
  const board = await getGitHubProjectSnapshot();

  const highPriority = issues.filter((issue) =>
    issue.labels.some((label) => label.name === "priority-high"),
  );
  const inProgress = board.filter((item) => item.status === "In Progress");
  const done = issues.filter((issue) =>
    issue.labels.some((label) => label.name === "done"),
  ).length;

  return {
    issues,
    board,
    metrics: {
      activeProjects: 8,
      inProgressCount: inProgress.length,
      blockedCount: highPriority.length,
      recentWinsCount: done,
    },
    highPriority,
  };
}
