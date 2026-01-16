import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import type { PageType } from "../../../App";

interface PageWrapperProps {
  children: React.ReactNode;
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      {/* Right Side */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        {/* 🔒 MAIN CONTENT AREA (NO SCROLL HERE) */}
        <main className="flex-1 p-6 bg-slate-100 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
