import React from "react";
import type { PageType } from "../../../App";

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onPageChange,
}) => {
  const linkClass = (page: PageType) =>
    `cursor-pointer px-3 py-2 rounded transition ${
      currentPage === page
        ? "bg-slate-700 text-white"
        : "text-slate-300 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col">
      {/* 🔥 BRAND / LOGO */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-wide">
          Sales<span className="text-blue-500">Pyper</span>
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Multi-Tenant Sales Platform
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="space-y-2">
        <div
          className={linkClass("leads")}
          onClick={() => onPageChange("leads")}
        >
          Leads
        </div>

        <div
          className={linkClass("calls")}
          onClick={() => onPageChange("calls")}
        >
          Call Logs
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
