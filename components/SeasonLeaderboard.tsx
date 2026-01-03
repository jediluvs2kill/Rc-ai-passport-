import React, { useState } from 'react';
import { RACERS } from '../constants';
import { Trophy, Users, ChevronUp, ChevronDown, Minus } from 'lucide-react';
import VerifiedBadge from './VerifiedBadge';

const SeasonLeaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'members' | 'leaderboard'>('leaderboard');
  
  // Mock Points Data derived from racers
  const leaderboardData = RACERS.map((racer, idx) => ({
      ...racer,
      rank: idx + 1,
      points: racer.ratings.skill - 1000 + (Math.floor(Math.random() * 200)), // mock points calculation
      change: idx === 0 ? 0 : idx % 2 === 0 ? 1 : -1 // mock rank change
  })).sort((a, b) => b.points - a.points).map((r, i) => ({...r, rank: i + 1}));

  return (
    <div className="flex justify-center h-full overflow-y-auto">
        <div className="w-full max-w-md bg-white text-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 h-fit min-h-[600px]">
            
            {/* Club Header */}
            <div className="p-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
                    <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Club</div>
                        <h2 className="text-2xl font-bold font-sans">Apex Racers</h2>
                    </div>
                </div>
                
                {/* Tabs */}
                <div className="flex bg-slate-100 p-1 rounded-xl mt-6">
                    <button 
                        onClick={() => setActiveTab('members')}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'members' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Members
                    </button>
                    <button 
                        onClick={() => setActiveTab('leaderboard')}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'leaderboard' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Season Leaderboard
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-0">
                {activeTab === 'leaderboard' ? (
                    <div className="divide-y divide-slate-100">
                        {/* Table Header */}
                        <div className="flex text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-3 bg-slate-50">
                            <div className="w-12">Rank</div>
                            <div className="flex-1">Name</div>
                            <div className="w-16 text-right">Points</div>
                        </div>

                        {leaderboardData.map((racer) => (
                            <div key={racer.id} className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                                <div className="w-12 flex flex-col items-start justify-center">
                                    <span className={`text-lg font-bold ${racer.rank <= 3 ? 'text-slate-900' : 'text-slate-500'}`}>{racer.rank}</span>
                                    <div className="flex items-center text-[10px] font-bold mt-0.5">
                                        {racer.change > 0 ? (
                                            <span className="text-emerald-500 flex items-center"><ChevronUp size={10} /> {racer.change}</span>
                                        ) : racer.change < 0 ? (
                                            <span className="text-red-500 flex items-center"><ChevronDown size={10} /> {Math.abs(racer.change)}</span>
                                        ) : (
                                            <span className="text-slate-300 flex items-center"><Minus size={10} /></span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-3">
                                    <img src={racer.avatarUrl} alt={racer.name} className="w-8 h-8 rounded-full bg-slate-200 object-cover" />
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{racer.name}</div>
                                        {racer.rank === 1 && <div className="text-[10px] text-amber-500 font-bold bg-amber-50 px-1.5 rounded inline-block">Season Leader</div>}
                                    </div>
                                </div>
                                <div className="w-16 text-right font-mono font-bold text-slate-900">
                                    {racer.points}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-6">
                        <div className="text-center py-10">
                            <Users size={48} className="mx-auto text-slate-300 mb-4" />
                            <h3 className="text-slate-500 font-medium">Member list view</h3>
                        </div>
                    </div>
                )}
            </div>

        </div>
    </div>
  );
};

export default SeasonLeaderboard;