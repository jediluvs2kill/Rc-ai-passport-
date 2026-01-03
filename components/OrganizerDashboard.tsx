import React from 'react';
import { Store, Plus, Users, CalendarCheck, TrendingUp, AlertCircle, ShieldCheck, FileCheck } from 'lucide-react';
import { EVENTS } from '../constants';
import VerifiedBadge from './VerifiedBadge';

const OrganizerDashboard: React.FC = () => {
  const myEvents = EVENTS.slice(0, 3); // Mock: filter by organizer ID in real app

  return (
    <div className="h-full overflow-y-auto pb-8">
      
      {/* Header */}
      <div className="mb-8 flex justify-between items-end">
        <div>
           <h2 className="text-3xl font-bold text-white mb-2 display-font">Organizer Dashboard</h2>
           <p className="text-slate-400">Manage events, verify entries, and track club performance.</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/20 transition-all">
            <Plus size={20} /> Create New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
              
              {/* KPI Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
                        <Users size={16} /> Total Entries (Season)
                    </div>
                    <div className="text-4xl font-bold text-white">482</div>
                    <div className="text-emerald-400 text-xs font-bold mt-2">+12% vs last month</div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
                        <TrendingUp size={16} /> Ticket Revenue
                    </div>
                    <div className="text-4xl font-bold text-white">₹1.2L</div>
                    <div className="text-emerald-400 text-xs font-bold mt-2">Payout Pending</div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
                        <AlertCircle size={16} /> Pending Verifications
                    </div>
                    <div className="text-4xl font-bold text-white">14</div>
                    <div className="text-yellow-400 text-xs font-bold mt-2">Action Required</div>
                  </div>
              </div>

              {/* Events List */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950">
                    <h3 className="font-bold text-lg text-white">My Events</h3>
                    <button className="text-sm text-cyan-400 font-bold hover:underline">View All</button>
                  </div>
                  <div className="divide-y divide-slate-800">
                    {myEvents.map(evt => (
                        <div key={evt.id} className="p-6 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl ${evt.status === 'Live' ? 'bg-red-500/20 text-red-500 border border-red-500/30 animate-pulse' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                                  {evt.status === 'Live' ? 'LIVE' : new Date(evt.date).getDate()}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-white">{evt.name}</h4>
                                        {evt.verified && <VerifiedBadge size="sm" />}
                                    </div>
                                    <div className="text-xs text-slate-500 flex gap-3">
                                        <span>{evt.class}</span>
                                        <span>•</span>
                                        <span>{evt.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                  <div className="text-sm font-bold text-white">{evt.entries.length} Entries</div>
                                  <div className="text-xs text-slate-500">{evt.status}</div>
                                </div>
                                <button className="px-4 py-2 border border-slate-700 hover:bg-slate-800 text-slate-300 rounded-lg text-sm font-bold transition-colors">
                                    Manage
                                </button>
                            </div>
                        </div>
                    ))}
                  </div>
              </div>
          </div>

          {/* Sidebar - Verified Protocol */}
          <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 bg-emerald-500/5 blur-2xl rounded-full -mr-6 -mt-6"></div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                      <ShieldCheck className="text-emerald-500" />
                      Verified Event Protocol
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 relative z-10">
                      Adhere to the official protocol to earn the Verified Event stamp and attract serious racers.
                  </p>
                  
                  <div className="space-y-4 relative z-10">
                      {[
                          "Track safety & layout certification",
                          "Minimum marshal count requirement",
                          "Approved timing method (camera/gate)",
                          "Mandatory digital scrutineering",
                          "Official protest window process"
                      ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                              <div className="w-5 h-5 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {i < 3 ? <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> : <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>}
                              </div>
                              <span className={i < 3 ? "text-slate-200" : "text-slate-500"}>{item}</span>
                          </div>
                      ))}
                  </div>

                  <button className="mt-8 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg border border-slate-700 flex items-center justify-center gap-2 transition-colors relative z-10">
                      <FileCheck size={14} /> Download Protocol PDF
                  </button>
              </div>
          </div>

      </div>
    </div>
  );
};

export default OrganizerDashboard;