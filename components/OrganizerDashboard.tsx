import React from 'react';
import { Store, Plus, Users, CalendarCheck, TrendingUp, AlertCircle } from 'lucide-react';
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

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
  );
};

export default OrganizerDashboard;