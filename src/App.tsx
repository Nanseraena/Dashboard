import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/Dashboard'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
      </div>
    </Router>
  );
};

export default App;