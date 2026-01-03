import React from 'react';
import { Racer } from '../types';
import { EVENTS } from '../constants';
import VerifiedBadge from './VerifiedBadge';
import { Trophy, Medal, Flag, Timer, Zap, Scale, Award, Calendar, MapPin, QrCode, ScanLine } from 'lucide-react';
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

  // Derive race history from Events
  const recentResults = EVENTS
    .filter(event => event.status === 'Completed' && event.entries.some(e => e.racerId === racer.id))
    .map(event => {
        const entry = event.entries.find(e => e.racerId === racer.id);
        return {
            eventName: event.name,
            date: event.date,
            location: event.location,
            position: entry?.position,
            points: entry?.points,
            class: event.class
        };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center md:items-start justify-center p-4 gap-6 overflow-y-auto">
      
      {/* Passport Card Container */}
      <div className="w-full max-w-md flex-shrink-0 flex flex-col gap-6">
        
        {/* Digital ID Card */}
        <div className="bg-slate-900 border border-slate-700 rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
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
            <div className="bg-slate-950/50 rounded-2xl border border-slate-800 overflow-hidden mb-6">
                <div className="flex justify-between items-center p-4 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium text-sm">Name</span>
                    <span className="text-white font-bold text-lg">{racer.name}</span>
                </div>
                <div className="flex justify-between items-center p-4">
                    <span className="text-slate-400 font-medium text-sm">Category</span>
                    <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                            racer.category === 'Pro' || racer.category === 'Legend' ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-700 text-slate-300'
                        }`}>
                            {racer.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* QR Code Check-in (MVP Feature) */}
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer group">
                <div className="text-slate-900 font-bold text-sm mb-3 flex items-center gap-2">
                    <ScanLine size={18} /> Scan to Check-in
                </div>
                <div className="w-40 h-40 bg-slate-100 p-2 rounded-xl mb-2">
                    {/* Using a QR code API for visual realism */}
                    <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=racer:${racer.id}`} 
                        alt="Racer QR" 
                        className="w-full h-full mix-blend-multiply"
                    />
                </div>
                <div className="text-[10px] text-slate-500 font-mono">ID: {racer.id.toUpperCase()}</div>
                <div className="mt-3 w-full bg-slate-900 text-white py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Show to Organizer
                </div>
            </div>
        </div>
      </div>

      {/* Stats & History Column */}
      <div className="w-full max-w-md flex flex-col gap-6">
          
        {/* Stats Grid */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Season Performance</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 text-center">
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Wins</div>
                    <div className="text-xl font-bold text-white">{racer.stats.wins}</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 text-center">
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Podiums</div>
                    <div className="text-xl font-bold text-white">{racer.stats.podiums}</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 text-center">
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Starts</div>
                    <div className="text-xl font-bold text-white">{racer.stats.starts}</div>
                </div>
            </div>

            {/* Skill Rating Radar */}
            <div className="relative h-48 w-full">
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

          {/* Recent History List */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex-1">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar size={14} /> Recent Race History
              </h3>
              
              <div className="space-y-0 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-800"></div>

                  {recentResults.length > 0 ? recentResults.map((result, idx) => (
                      <div key={idx} className="relative pl-10 pb-6 last:pb-0">
                          <div className={`absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-slate-900 flex items-center justify-center text-xs font-bold z-10 ${
                              result.position === 1 ? 'bg-yellow-500 text-black' :
                              result.position === 2 ? 'bg-slate-300 text-black' :
                              result.position === 3 ? 'bg-amber-700 text-white' :
                              'bg-slate-800 text-slate-400'
                          }`}>
                              {result.position ? `P${result.position}` : '-'}
                          </div>
                          
                          <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-800 hover:border-slate-700 transition-colors">
                              <div className="flex justify-between items-start mb-1">
                                  <h4 className="font-bold text-white text-sm">{result.eventName}</h4>
                                  <span className="text-xs font-mono text-cyan-400 font-bold">+{result.points} pts</span>
                              </div>
                              <div className="flex items-center gap-3 text-xs text-slate-500">
                                  <span className="flex items-center gap-1"><Calendar size={10} /> {result.date}</span>
                                  <span className="flex items-center gap-1"><MapPin size={10} /> {result.location}</span>
                              </div>
                          </div>
                      </div>
                  )) : (
                      <div className="text-slate-500 text-sm italic pl-4">No recent race data available.</div>
                  )}
              </div>
          </div>

      </div>

    </div>
  );
};

export default RacerPassport;