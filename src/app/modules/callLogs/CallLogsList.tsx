import React from "react";
import { useAuth } from "../../context/AuthContext";
import { callLogsData } from "./callLogs.data";

const CallLogsList: React.FC = () => {
  const { tenant } = useAuth();

  const tenantLogs = callLogsData.filter(
    (log) => log.tenant === tenant
  );

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-4">Call Logs</h2>

      {/* ✅ ONLY TABLE SCROLLS */}
      <div className="flex-1 overflow-y-auto bg-white rounded shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 sticky top-0 z-10">
            <tr>
              <th className="text-left px-4 py-2">Lead</th>
              <th className="text-left px-4 py-2">Date & Time</th>
              <th className="text-left px-4 py-2">Duration</th>
              <th className="text-left px-4 py-2">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {tenantLogs.map((log) => (
              <tr key={log.id} className="border-t">
                <td className="px-4 py-2">{log.leadName}</td>
                <td className="px-4 py-2">{log.dateTime}</td>
                <td className="px-4 py-2">{log.duration}</td>
                <td className="px-4 py-2">{log.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallLogsList;
