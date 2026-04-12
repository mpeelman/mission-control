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
  >("https://api.github.com/repos/mpeelman/mission-control/issues?state=open&per_page=20");

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

export async function getGitHubProjectSnapshot(): Promise<GitHubProjectItemLite[]> {
  return [
    {
      title: "Refine visual design to match Mission Control aesthetic direction",
      status: "In Progress",
      url: "https://github.com/mpeelman/mission-control/issues/11",
      labels: ["design", "frontend", "ui"],
    },
    {
      title: "Implement Quick Links panel for GitHub, Discord, and docs",
      status: "In Progress",
      url: "https://github.com/mpeelman/mission-control/issues/10",
      labels: ["feature", "frontend", "ui"],
    },
    {
      title: "Improve responsiveness and usability for dashboard V1",
      status: "In Progress",
      url: "https://github.com/mpeelman/mission-control/issues/12",
      labels: ["frontend", "ui", "chore"],
    },
    {
      title: "Run Mission Control V1 review and acceptance pass",
      status: "Todo",
      url: "https://github.com/mpeelman/mission-control/issues/13",
      labels: ["review", "priority-high"],
    },
  ];
}
