import React, { useState, lazy, Suspense } from "react";
import PageWrapper from "./app/components/layout/PageWrapper";
import Loader from "./app/components/common/Loader";

const LeadsList = lazy(() => import("./app/modules/leads/LeadsList"));
const CallLogsList = lazy(() => import("./app/modules/callLogs/CallLogsList"));

export type PageType = "leads" | "calls";

const App: React.FC = () => {
  const [page, setPage] = useState<PageType>("leads");

  return (
    <PageWrapper currentPage={page} onPageChange={setPage}>
      <Suspense fallback={<Loader />}>
        {page === "leads" && <LeadsList />}
        {page === "calls" && <CallLogsList />}
      </Suspense>
    </PageWrapper>
  );
};

export default App;
