import React, { lazy, Suspense, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard"));

const App: React.FC = () => {
  const router = useMemo(
    () => (
      <Router>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    ),
    []
  );

  return <div className="flex flex-col min-h-screen">{router}</div>;
};

export default App;
