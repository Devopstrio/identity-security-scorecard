import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Trophy, 
  ShieldAlert, 
  Zap, 
  Activity,
  ArrowUpRight,
  TrendingDown,
  AlertCircle
} from 'lucide-react';

const radarData = [
  { subject: 'MFA Coverage', A: 120, fullMark: 150 },
  { subject: 'PAM Exposure', A: 98, fullMark: 150 },
  { subject: 'JML Maturity', A: 86, fullMark: 150 },
  { subject: 'Machine ID', A: 99, fullMark: 150 },
  { subject: 'Governance', A: 85, fullMark: 150 },
  { subject: 'Zero Trust', A: 65, fullMark: 150 },
];

const trendData = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 68 },
  { month: 'Mar', score: 72 },
  { month: 'Apr', score: 75 },
  { month: 'May', score: 78 },
];

const KPI_CARDS = [
  { title: 'Identity Health Score', value: '78', trend: '+3.2%', color: 'rose', icon: Trophy },
  { title: 'Critical Risk Gaps', value: '14', trend: '-2 this week', color: 'rose', icon: ShieldAlert },
  { title: 'MFA Adoption Rate', value: '92.4%', trend: '+0.5%', color: 'emerald', icon: Activity },
  { title: 'Auto-Remediated', value: '842', trend: '+124 total', color: 'rose', icon: Zap },
];

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Executive Security Scorecard</h1>
          <p className="text-slate-400">Quantitative measurement of identity risk and governance maturity.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Generate Board Pack
          </button>
          <button className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Recalculate Scores
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-slate-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Maturity Radar */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Security Dimension Maturity</h3>
          <div className="h-80 w-full flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#1e293b" />
                <Radar
                  name="Maturity"
                  dataKey="A"
                  stroke="#f43f5e"
                  fill="#f43f5e"
                  fillOpacity={0.6}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Score Trend */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Identity Health Trend</h3>
            <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
              <TrendingUp size={16} />
              <span>+14% Improvement</span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="score" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorScore)" name="Health Score" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Critical Gaps Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Top Critical Remediation Targets</h3>
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Prioritized by Risk Impact</span>
        </div>
        <div className="divide-y divide-slate-800">
          {[
            { area: 'Privileged Access', issue: '12 Admin accounts missing MFA', impact: 'High', score: -14 },
            { area: 'Directory Hygiene', issue: '240 Dormant workforce accounts found', impact: 'Medium', score: -8 },
            { area: 'Machine Identity', issue: '14 expired service principal secrets', impact: 'High', score: -12 },
          ].map((item) => (
            <div key={item.issue} className="p-4 flex items-center justify-between hover:bg-slate-800/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-rose-500/10 rounded-lg text-rose-500">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{item.area}</p>
                  <p className="text-xs text-slate-400">{item.issue}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-rose-500">{item.score} pts</span>
                <p className="text-xs text-slate-500">{item.impact} Impact</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
