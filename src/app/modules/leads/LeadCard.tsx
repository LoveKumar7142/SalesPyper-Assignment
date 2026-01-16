import React from "react";
import type { Lead } from "../../types";
import { useAuth } from "../../context/AuthContext";

interface LeadCardProps {
  lead: Lead;
}

const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
  const { role } = useAuth();

  return (
    <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{lead.name}</h3>
        <p className="text-sm text-slate-500">{lead.phone}</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs px-3 py-1 rounded bg-slate-100">
          {lead.status}
        </span>

        {role === "admin" && (
          <button className="text-xs text-blue-600 hover:underline">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default LeadCard;
