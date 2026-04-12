export type NavItem = {
  name: string;
  href: string;
  badge?: string | null;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type Project = {
  name: string;
  status: string;
  progress: number;
  owner: string;
  summary: string;
  githubLabel: string;
  githubUrl: string;
  discordLabel: string;
  discordUrl: string;
};

export type SprintItem = {
  title: string;
  state: string;
  owner: string;
  githubUrl: string;
};

export type TeamRole = {
  role: string;
  focus: string;
  lane: string;
  linkedProject: string;
};

export type QuickLink = {
  label: string;
  href: string;
  caption: string;
};

export type TaskCard = {
  title: string;
  owner: string;
  project: string;
  priority: "High" | "Medium" | "Low";
  githubUrl: string;
};

export const navigation: NavItem[] = [
  { name: "Overview", href: "/", badge: null },
  { name: "Tasks", href: "/tasks", badge: "12" },
  { name: "Projects", href: "/projects", badge: "4" },
  { name: "Team", href: "/team", badge: "6" },
  { name: "Calendar", href: "/calendar", badge: null },
  { name: "Docs", href: "/docs", badge: null },
  { name: "Memory", href: "/memory", badge: null },
  { name: "Alerts", href: "/alerts", badge: "2" },
  { name: "Settings", href: "/settings", badge: null },
];

export const stats: Stat[] = [
  { label: "Active Projects", value: "4", detail: "13 seeded issues live" },
  { label: "In Progress", value: "12", detail: "Tracked across board lanes" },
  { label: "Blocked", value: "2", detail: "Needs decisions" },
  { label: "Recent Wins", value: "7", detail: "Last 7 days" },
];

export const projectBoardUrl = "https://github.com/users/mpeelman/projects/1";

export const projects: Project[] = [
  {
    name: "Mission Control",
    status: "Active",
    progress: 38,
    owner: "Chief of Staff + Frontend",
    summary: "Building the dashboard shell, linked views, and work-visualization surfaces.",
    githubLabel: "Open project board",
    githubUrl: projectBoardUrl,
    discordLabel: "Open status channel",
    discordUrl: "https://discord.com/channels/1492906786590556321/1492958441139077252",
  },
  {
    name: "GitHub Workflow",
    status: "Active",
    progress: 72,
    owner: "Chief of Staff",
    summary: "Issue seeding and GitHub Project setup are now active parts of the system.",
    githubLabel: "Open seeded issues",
    githubUrl: "https://github.com/mpeelman/mission-control/issues",
    discordLabel: "Open control room",
    discordUrl: "https://discord.com/channels/1492906786590556321/1492958441428484146",
  },
  {
    name: "Discord Ops",
    status: "Healthy",
    progress: 78,
    owner: "Ops",
    summary: "Channels, status surfaces, and communication structure are in place.",
    githubLabel: "Open repo",
    githubUrl: "https://github.com/mpeelman/mission-control",
    discordLabel: "Open projects hub",
    discordUrl: "https://discord.com/channels/1492906786590556321/1492958505244688584",
  },
  {
    name: "Agent Team OS",
    status: "Planning",
    progress: 30,
    owner: "Chief of Staff",
    summary: "Defining the operating system that coordinates projects, roles, memory, and reporting.",
    githubLabel: "Open docs and issue lane",
    githubUrl: "https://github.com/mpeelman/mission-control/issues",
    discordLabel: "Open agent lab",
    discordUrl: "https://discord.com/channels/1492906786590556321/1492958440861990974",
  },
];

export const sprintItems: SprintItem[] = [
  {
    title: "Refine dashboard shell",
    state: "In Progress",
    owner: "Frontend",
    githubUrl: "https://github.com/mpeelman/mission-control/issues/11",
  },
  {
    title: "Seed GitHub issues from planning docs",
    state: "Done",
    owner: "Chief of Staff",
    githubUrl: "https://github.com/mpeelman/mission-control/issues/1",
  },
  {
    title: "Define project board structure",
    state: "In Progress",
    owner: "Product",
    githubUrl: projectBoardUrl,
  },
  {
    title: "Add dedicated Projects screen",
    state: "Done",
    owner: "Frontend",
    githubUrl: "https://github.com/mpeelman/mission-control/issues/5",
  },
];

export const team: TeamRole[] = [
  {
    role: "Chief of Staff",
    focus: "Planning, sequencing, decision support, and status visibility",
    lane: "Operations",
    linkedProject: "Mission Control",
  },
  {
    role: "Product Lead",
    focus: "Scope, requirements, and V1 success criteria",
    lane: "Product",
    linkedProject: "Mission Control",
  },
  {
    role: "Frontend Engineering",
    focus: "Dashboard shell, cards, layout, and responsive behavior",
    lane: "Implementation",
    linkedProject: "Mission Control",
  },
  {
    role: "Design and UX",
    focus: "Dark operational UI language and information hierarchy",
    lane: "Design",
    linkedProject: "Mission Control",
  },
  {
    role: "Backend Engineering",
    focus: "Future data integration, APIs, and GitHub/Discord sync paths",
    lane: "Systems",
    linkedProject: "GitHub Workflow",
  },
  {
    role: "QA and Review",
    focus: "Acceptance criteria, visual review, and release confidence",
    lane: "Quality",
    linkedProject: "Mission Control",
  },
];

export const wins = [
  "Discord operating structure created",
  "Mission Control brief and implementation plan drafted",
  "Issue seed and UI spec completed",
  "GitHub Project and seeded issue set are now live",
];

export const links: QuickLink[] = [
  {
    label: "GitHub Project Board",
    href: projectBoardUrl,
    caption: "Live Mission Control Sprint Board",
  },
  {
    label: "GitHub Issues",
    href: "https://github.com/mpeelman/mission-control/issues",
    caption: "Seeded issue backlog for Mission Control",
  },
  {
    label: "Agent Status",
    href: "https://discord.com/channels/1492906786590556321/1492958441139077252",
    caption: "Progress updates and journal summaries",
  },
  {
    label: "Control Room",
    href: "https://discord.com/channels/1492906786590556321/1492958441428484146",
    caption: "Admin decisions, setup, and Chief of Staff coordination",
  },
];

export const taskBoard: Record<string, TaskCard[]> = {
  Backlog: [
    {
      title: "Create Team screen shell",
      owner: "Frontend",
      project: "Mission Control",
      priority: "Medium",
      githubUrl: "https://github.com/mpeelman/mission-control/issues/6",
    },
    {
      title: "Write GitHub Projects setup doc",
      owner: "Chief of Staff",
      project: "GitHub Workflow",
      priority: "Medium",
      githubUrl: projectBoardUrl,
    },
  ],
  "In Progress": [
    {
      title: "Build Tasks screen",
      owner: "Frontend",
      project: "Mission Control",
      priority: "High",
      githubUrl: "https://github.com/mpeelman/mission-control/issues/7",
    },
    {
      title: "Refine project visualization links",
      owner: "Chief of Staff",
      project: "Mission Control",
      priority: "High",
      githubUrl: "https://github.com/mpeelman/mission-control/issues/10",
    },
  ],
  Review: [
    {
      title: "Dashboard shell QA pass",
      owner: "QA",
      project: "Mission Control",
      priority: "Medium",
      githubUrl: "https://github.com/mpeelman/mission-control/issues/13",
    },
  ],
  Done: [
    {
      title: "Bootstrap app and repo",
      owner: "Frontend",
      project: "Mission Control",
      priority: "High",
      githubUrl: "https://github.com/mpeelman/mission-control/issues/1",
    },
    {
      title: "Add Projects screen",
      owner: "Frontend",
      project: "Mission Control",
      priority: "High",
      githubUrl: "https://github.com/mpeelman/mission-control/issues/5",
    },
  ],
};
