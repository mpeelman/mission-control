export type WorkstreamStatus = "Active" | "Ready" | "Planning" | "Blocked";
export type MilestoneStatus = "Now" | "Next" | "Later";

export type PortfolioWorkstream = {
  id: string;
  name: string;
  status: WorkstreamStatus;
  owner: string;
  horizon: string;
  summary: string;
  outcome: string;
  issueUrl: string;
  issueNumber: number;
  priority: "High" | "Medium" | "Low";
};

export type RoadmapMilestone = {
  name: string;
  window: string;
  status: MilestoneStatus;
  focus: string;
};

export type ArchitectureLayer = {
  name: string;
  description: string;
  capabilities: string[];
};

export const portfolioWorkstreams: PortfolioWorkstream[] = [
  {
    id: "core-dashboard",
    name: "Core Dashboard",
    status: "Active",
    owner: "Chief of Staff + Frontend",
    horizon: "Now",
    summary: "The operational shell for status, tasks, projects, alerts, docs, memory, and team visibility.",
    outcome: "A dark, credible operating surface that becomes the front door for the whole system.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/16",
    issueNumber: 16,
    priority: "High",
  },
  {
    id: "team-memory",
    name: "Team Memory",
    status: "Ready",
    owner: "Chief of Staff + Data",
    horizon: "Now",
    summary: "Workspace docs, journals, durable memory, and knowledge ingestion that preserve context between work sessions.",
    outcome: "Mission Control can recover context quickly and expose the right operating memory in the UI.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/17",
    issueNumber: 17,
    priority: "High",
  },
  {
    id: "github-integration",
    name: "GitHub Integration",
    status: "Active",
    owner: "Chief of Staff + Backend",
    horizon: "Now",
    summary: "Live issues, project state, backlog shaping, and board-linked operational signals throughout the app.",
    outcome: "The dashboard reflects real tracked work instead of static placeholders.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/19",
    issueNumber: 19,
    priority: "High",
  },
  {
    id: "chief-of-staff-console",
    name: "Chief of Staff Console",
    status: "Planning",
    owner: "Chief of Staff",
    horizon: "Next",
    summary: "Decision support, prioritization, status synthesis, and orchestration surfaces for coordinating the team.",
    outcome: "A focused command layer for portfolio review, sequencing, and executive visibility.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/21",
    issueNumber: 21,
    priority: "Medium",
  },
  {
    id: "idea-to-execution",
    name: "Idea to Execution",
    status: "Planning",
    owner: "Chief of Staff + Ops",
    horizon: "Next",
    summary: "Capture raw ideas, shape them into scoped work, and link them to backlog, projects, and delivery lanes.",
    outcome: "Interesting ideas stop getting lost and start entering a repeatable execution system.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/22",
    issueNumber: 22,
    priority: "Medium",
  },
  {
    id: "discord-integration",
    name: "Discord Integration",
    status: "Planning",
    owner: "Ops + Backend",
    horizon: "Next",
    summary: "Connect channels, idea intake, status summaries, and work linking into the Mission Control operating loop.",
    outcome: "Discord becomes a live input and output surface instead of just a place to post updates.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/20",
    issueNumber: 20,
    priority: "Medium",
  },
  {
    id: "agent-orchestration",
    name: "Agent Orchestration",
    status: "Planning",
    owner: "Chief of Staff + Systems",
    horizon: "Later",
    summary: "Foundations for coordinated agent work, linked execution runs, and operational supervision.",
    outcome: "Mission Control can coordinate multiple AI work lanes without becoming chaotic.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/23",
    issueNumber: 23,
    priority: "Low",
  },
  {
    id: "security-hosting",
    name: "Security and Hosting",
    status: "Ready",
    owner: "Ops",
    horizon: "Now",
    summary: "Define the safe remote operating model, access boundaries, deployment posture, and hosting approach.",
    outcome: "The system is private, usable remotely, and grounded in a sane risk posture.",
    issueUrl: "https://github.com/mpeelman/mission-control/issues/24",
    issueNumber: 24,
    priority: "High",
  },
];

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    name: "Foundation",
    window: "Now",
    status: "Now",
    focus: "Dashboard shell, IA, live GitHub signals, docs, memory, and system architecture.",
  },
  {
    name: "Operating Memory",
    window: "Next",
    status: "Next",
    focus: "Workspace ingestion, long-term knowledge shaping, and practical memory retrieval surfaces.",
  },
  {
    name: "Chief of Staff Layer",
    window: "Next",
    status: "Next",
    focus: "Portfolio review, prioritization, executive summaries, and decision support workflows.",
  },
  {
    name: "Execution System",
    window: "Later",
    status: "Later",
    focus: "Idea intake, Discord linking, and orchestrated multi-agent execution support.",
  },
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    name: "Presentation Layer",
    description: "Next.js dashboard surfaces for overview, projects, tasks, alerts, docs, memory, and team operations.",
    capabilities: ["Operational dashboard shell", "Role-based views", "Cross-linked work surfaces"],
  },
  {
    name: "Live Snapshot Layer",
    description: "Shared server-side data composition that combines GitHub signals, workspace content, and operational summaries.",
    capabilities: ["GitHub issue snapshots", "Project board state", "Metrics and notices"],
  },
  {
    name: "Workspace Knowledge Layer",
    description: "Local docs, journals, durable memory, and future ingestion pipelines for filesystem-backed knowledge.",
    capabilities: ["Docs indexing", "Journal highlights", "Long-term memory surfaces"],
  },
  {
    name: "Integration Layer",
    description: "External system connections for GitHub, Discord, automation, and future orchestration flows.",
    capabilities: ["GitHub connectivity", "Discord work linking", "Automation hooks"],
  },
  {
    name: "Operating Model Layer",
    description: "Decision logic for priorities, sequencing, ownership, cadence, and Chief of Staff coordination.",
    capabilities: ["Portfolio prioritization", "Roadmaps and milestones", "Execution governance"],
  },
];
