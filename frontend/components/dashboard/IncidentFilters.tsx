"use client"

type Props = {
  status: string
  setStatus: (v: string) => void
  query: string
  setQuery: (v: string) => void
}

export default function IncidentFilters({
  status,
  setStatus,
  query,
  setQuery,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <input
        type="text"
        placeholder="Search incidents…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-64 rounded-md bg-black border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-yellow-400"
      />

      {/* Status filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full sm:w-40 rounded-md bg-black border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
      >
        <option value="all">All</option>
        <option value="open">Open</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  )
}