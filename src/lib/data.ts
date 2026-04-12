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
};

export type TeamRole = {
  role: string;
  focus: string;
};

export type QuickLink = {
  label: string;
  href: string;
  caption: string;
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
  { label: "Active Projects", value: "4", detail: "+1 this week" },
  { label: "In Progress", value: "12", detail: "3 high priority" },
  { label: "Blocked", value: "2", detail: "Needs decisions" },
  { label: "Recent Wins", value: "7", detail: "Last 7 days" },
];

export const projects: Project[] = [
  {
    name: "Mission Control",
    status: "Active",
    progress: 32,
    owner: "Chief of Staff + Frontend",
    summary: "Building the first dashboard shell and operational UI system.",
    githubLabel: "View repo",
    githubUrl: "https://github.com/mpeelman/mission-control",
    discordLabel: "Open status channel",
    discordUrl: "https://discord.com/channels/1492906786590556321/1492958441139077252",
  },
  {
    name: "GitHub Workflow",
    status: "Planning",
    progress: 65,
    owner: "Chief of Staff",
    summary: "Converting issue seeds and process docs into a real delivery lane.",
    githubLabel: "Open workflow doc",
    githubUrl: "https://github.com/mpeelman/mission-control",
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
    progress: 24,
    owner: "Chief of Staff",
    summary: "Defining the operating system that coordinates projects, roles, and memory.",
    githubLabel: "Open docs repo lane",
    githubUrl: "https://github.com/mpeelman/mission-control",
    discordLabel: "Open agent lab",
    discordUrl: "https://discord.com/channels/1492906786590556321/1492958440861990974",
  },
];

export const sprintItems: SprintItem[] = [
  {
    title: "Refine dashboard shell",
    state: "In Progress",
    owner: "Frontend",
  },
  {
    title: "Seed GitHub issues from planning docs",
    state: "Ready",
    owner: "Chief of Staff",
  },
  {
    title: "Define project board structure",
    state: "Blocked",
    owner: "Product",
  },
  {
    title: "Add dedicated Projects screen",
    state: "In Progress",
    owner: "Frontend",
  },
];

export const team: TeamRole[] = [
  {
    role: "Chief of Staff",
    focus: "Planning, sequencing, decision support, and status visibility",
  },
  {
    role: "Product Lead",
    focus: "Scope, requirements, and V1 success criteria",
  },
  {
    role: "Frontend Engineering",
    focus: "Dashboard shell, cards, layout, and responsive behavior",
  },
  {
    role: "Design and UX",
    focus: "Dark operational UI language and information hierarchy",
  },
  {
    role: "Backend Engineering",
    focus: "Future data integration, APIs, and GitHub/Discord sync paths",
  },
  {
    role: "QA and Review",
    focus: "Acceptance criteria, visual review, and release confidence",
  },
];

export const wins = [
  "Discord operating structure created",
  "Mission Control brief and implementation plan drafted",
  "Issue seed and UI spec completed",
  "GitHub access configured for build work",
];

export const links: QuickLink[] = [
  {
    label: "GitHub Repo",
    href: "https://github.com/mpeelman/mission-control",
    caption: "Source code and future pull requests",
  },
  {
    label: "Projects Channel",
    href: "https://discord.com/channels/1492906786590556321/1492958505244688584",
    caption: "Discussion threads for active initiatives",
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
