import React, { useState } from "react";
import { leadsData } from "./leads.data";
import LeadCard from "./LeadCard";
import { useAuth } from "../../context/AuthContext";
import type { LeadStatus } from "../../types";

const LeadsList: React.FC = () => {
  const { tenant } = useAuth();
  const [statusFilter, setStatusFilter] =
    useState<LeadStatus | "all">("all");

  const filteredLeads = leadsData.filter((lead) => {
    if (lead.tenant !== tenant) return false;
    if (statusFilter === "all") return true;
    return lead.status === statusFilter;
  });

  return (
    <div className="flex flex-col h-full">
      {/* Fixed Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Leads</h2>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as LeadStatus | "all")
          }
          className="border rounded px-3 py-1 text-sm bg-white"
        >
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* ✅ ONLY THIS SCROLLS */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {filteredLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
};

export default LeadsList;
