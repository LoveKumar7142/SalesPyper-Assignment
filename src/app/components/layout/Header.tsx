import React from "react";
import { useAuth } from "../../context/AuthContext";
import type { Role, Tenant } from "../../types";

const Header: React.FC = () => {
  const { tenant, role, setTenant, setRole } = useAuth();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Tenant Switch */}
        <select
          value={tenant}
          onChange={(e) => setTenant(e.target.value as Tenant)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="orgA">Organization A</option>
          <option value="orgB">Organization B</option>
        </select>

        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
