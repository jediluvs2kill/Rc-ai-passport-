import React from 'react';
import { Racer } from '../types';
import VerifiedBadge from './VerifiedBadge';
import { Trophy, Medal, Flag, Timer, Zap, Scale, Award } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface RacerPassportProps {
  racer: Racer;
}

const RacerPassport: React.FC<RacerPassportProps> = ({ racer }) => {
  
  const radarData = [
    { subject: 'Pace', A: racer.ratings.pace, fullMark: 100 },
    { subject: 'Consistency', A: racer.ratings.consistency, fullMark: 100 },
    { subject: 'Sportsmanship', A: racer.ratings.sportsmanship, fullMark: 100 },
    { subject: 'Race Craft', A: 85, fullMark: 100 },
    { subject: 'Tech', A: 90, fullMark: 100 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      
      {/* Passport Card Container */}
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 display-font tracking-wide">Racer Passport</h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
        </div>

        {/* Identity Section */}
        <div className="flex items-center gap-6 mb-8">
            <div className="relative">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-600 bg-slate-800 shadow-lg">
                    <img src={racer.avatarUrl} alt={racer.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-slate-950 rounded-full border border-slate-700 p-1">
                    <VerifiedBadge size="sm" />
                </div>
            </div>
            
            <div className="flex-1">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Unique ID</div>
                <div className="text-2xl font-mono font-bold text-white tracking-tight mb-2">{racer.id.toUpperCase()}</div>
                <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-300 font-mono">
                    {racer.team || 'Privateer'}
                </div>
            </div>
        </div>

        {/* Info Table */}
        <div className="bg-slate-950/50 rounded-2xl border border-slate-800 overflow-hidden mb-8">
            <div className="flex justify-between items-center p-4 border-b border-slate-800/50">
                <span className="text-slate-400 font-medium text-sm">Name</span>
                <span className="text-white font-bold text-lg">{racer.name}</span>
            </div>
            <div className="flex justify-between items-center p-4">
                <span className="text-slate-400 font-medium text-sm">Category</span>
                <span className="text-white font-bold text-lg">{racer.category}</span>
            </div>
        </div>

        {/* Skill Rating Radar */}
        <div className="mb-8 relative">
            <div className="flex justify-between items-center mb-2 px-1">
                 <span className="text-slate-400 font-bold text-sm">Skill Rating</span>
                 <span className="text-blue-400 font-bold text-xs bg-blue-500/10 px-2 py-0.5 rounded">RATED: {racer.ratings.skill}</span>
            </div>
           
            <div className="h-56 -ml-4 w-[calc(100%+2rem)]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name={racer.name}
                        dataKey="A"
                        stroke="#2563eb"
                        strokeWidth={3}
                        fill="#3b82f6"
                        fillOpacity={0.2}
                    />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Championships */}
        <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-5">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Championships</h3>
             <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <Trophy size={18} className="text-yellow-500" />
                 </div>
                 <div>
                     <div className="text-white font-bold text-sm">City Champion 2023</div>
                     <div className="text-slate-500 text-xs">Bangalore Regional Series</div>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default RacerPassport;
