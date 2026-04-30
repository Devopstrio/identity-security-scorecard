import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ExecutiveDashboard from './pages/ExecutiveDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The scoring engine is calculating historical trends for this module. Visibility will be restored shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ExecutiveDashboard />} />
          <Route path="/scorecard" element={<Placeholder name="Global Identity Scorecard" />} />
          <Route path="/risk" element={<Placeholder name="Risk Heatmap & Gap Analysis" />} />
          <Route path="/maturity" element={<Placeholder name="Maturity Roadmap & Forecast" />} />
          <Route path="/benchmarks" element={<Placeholder name="Business Unit Benchmarking" />} />
          <Route path="/remediation" element={<Placeholder name="Remediation Hub & Tracking" />} />
          <Route path="/compliance" element={<Placeholder name="Compliance Readiness Portal" />} />
          <Route path="/trends" element={<Placeholder name="Long-term Trend Analytics" />} />
          <Route path="/settings" element={<Placeholder name="Platform Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
