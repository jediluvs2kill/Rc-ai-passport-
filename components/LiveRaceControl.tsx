import React, { useState, useEffect } from 'react';
import { RaceEvent, Racer } from '../types';
import VerifiedBadge from './VerifiedBadge';
import { Flag, Clock, User, Award, FileText, ChevronRight, Share2, Timer } from 'lucide-react';
import { generateRaceReport } from '../services/geminiService';

interface LiveRaceControlProps {
  events: RaceEvent[];
  racers: Racer[];
}

const LiveRaceControl: React.FC<LiveRaceControlProps> = ({ events, racers }) => {
  const [selectedEvent, setSelectedEvent] = useState<RaceEvent>(events[0]);
  const [aiReport, setAiReport] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // When event changes, reset report
  useEffect(() => {
    setAiReport(null);
  }, [selectedEvent]);

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    const report = await generateRaceReport(selectedEvent, racers);
    setAiReport(report);
    setIsGenerating(false);
  };

  const getRacerName = (id: string) => {
    return racers.find(r => r.id === id)?.name || 'Unknown Racer';
  };

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <div>
           <h2 className="text-2xl font-bold text-white mb-1">Official Race Ledger</h2>
           <p className="text-slate-400 text-sm">Immutable records of all Federation sanctioned events.</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
            + New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full min-h-[500px]">
        
        {/* Event List */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 bg-slate-950 border-b border-slate-800">
                <h3 className="font-bold text-slate-300">Season 2023-24</h3>
            </div>
            <div className="overflow-y-auto flex-1">
                {events.map(evt => (
                    <div 
                        key={evt.id} 
                        onClick={() => setSelectedEvent(evt)}
                        className={`p-4 border-b border-slate-800 cursor-pointer hover:bg-slate-800/50 transition-colors ${selectedEvent.id === evt.id ? 'bg-slate-800/80 border-l-4 border-l-cyan-500' : 'border-l-4 border-l-transparent'}`}
                    >
                        <div className="flex justify-between mb-1">
                            <span className="text-xs text-slate-500 font-mono">{evt.date}</span>
                            {evt.verified && <VerifiedBadge size="sm" />}
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1">{evt.name}</h4>
                        <div className="text-xs text-slate-400 flex items-center gap-1">
                            <Flag size={12} /> {evt.location}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Ledger Detail */}
        <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Header Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                         <div className="flex items-center gap-3 mb-2">
                             <span className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded font-mono uppercase tracking-wider">{selectedEvent.class}</span>
                             <span className={`text-xs px-2 py-1 rounded font-mono uppercase tracking-wider ${selectedEvent.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                                 {selectedEvent.status}
                             </span>
                         </div>
                         <h1 className="text-3xl font-bold text-white display-font mb-1">{selectedEvent.name}</h1>
                         <div className="flex items-center gap-4 text-slate-400 text-sm">
                             <span>ID: {selectedEvent.id.toUpperCase()}</span>
                             <span>•</span>
                             <span>Track: {selectedEvent.trackCondition}</span>
                         </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg border border-slate-700 transition-colors">
                            <Share2 size={20} />
                        </button>
                        <button 
                            onClick={handleGenerateReport}
                            disabled={isGenerating || selectedEvent.entries.length === 0}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-5 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg disabled:opacity-50"
                        >
                            {isGenerating ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> : <FileText size={20} />}
                            {aiReport ? 'Regenerate Report' : 'AI Steward Analysis'}
                        </button>
                    </div>
                </div>
            </div>

            {/* AI Report Section */}
            {aiReport && (
                <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/50 border border-indigo-500/30 p-6 rounded-xl animate-fade-in">
                    <h4 className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                        <User size={14} /> Official Steward Summary
                    </h4>
                    <p className="text-slate-200 text-sm leading-relaxed italic border-l-2 border-indigo-500 pl-4">
                        "{aiReport}"
                    </p>
                </div>
            )}

            {/* Results Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex-1">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-bold tracking-wider">
                            <tr>
                                <th className="p-4 w-16 text-center">Pos</th>
                                <th className="p-4">Driver</th>
                                <th className="p-4">Total Time</th>
                                <th className="p-4">Best Lap</th>
                                <th className="p-4">Gap</th>
                                <th className="p-4 text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {selectedEvent.entries.length > 0 ? (
                                selectedEvent.entries.map((entry) => (
                                    <tr key={entry.racerId} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="p-4 text-center">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto ${
                                                entry.position === 1 ? 'bg-yellow-500 text-black' : 
                                                entry.position === 2 ? 'bg-slate-300 text-black' :
                                                entry.position === 3 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
                                            }`}>
                                                {entry.position}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-bold text-white flex items-center gap-2">
                                                {getRacerName(entry.racerId)}
                                                {entry.position === 1 && <Award size={14} className="text-yellow-500" />}
                                            </div>
                                            <div className="text-xs text-slate-500">Laps: {entry.laps}</div>
                                        </td>
                                        <td className="p-4 text-slate-300 font-mono">{entry.totalTime}</td>
                                        <td className="p-4 text-cyan-400 font-mono font-bold">{entry.bestLap}s</td>
                                        <td className="p-4 text-slate-500 text-sm">{entry.gap || '-'}</td>
                                        <td className="p-4 text-right font-bold text-white">+{entry.points}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="p-12 text-center text-slate-500">
                                        <Clock size={48} className="mx-auto mb-4 opacity-20" />
                                        <p>Race not started yet. Waiting for timing system...</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default LiveRaceControl;
