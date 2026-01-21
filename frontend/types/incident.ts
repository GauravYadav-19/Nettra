export type IncidentSeverity = "low" | "medium" | "high" | "critical"
export type IncidentStatus = "open" | "investigating" | "resolved"

export type Incident = {
  id: string
  title: string
  severity: IncidentSeverity
  status: IncidentStatus
  source: "logs" | "network" | "ai"
  updatedAt: string
}