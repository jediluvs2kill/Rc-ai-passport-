import React from 'react';
import { Briefcase, Eye, MousePointer, Award, Search, ArrowUpRight } from 'lucide-react';
import { EVENTS } from '../constants';

const SponsorDashboard: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto pb-8">
      
      {/* Header */}
      <div className="mb-8">
         <h2 className="text-3xl font-bold text-white mb-2 display-font">Sponsor Console</h2>
         <p className="text-slate-400">Track brand reach and discover sponsorship opportunities.</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 border border-purple-500/30 p-6 rounded-xl">
             <div className="flex items-center gap-2 text-purple-400 mb-2">
                 <Eye size={18} /> <span className="text-xs font-bold uppercase tracking-wider">Total Impressions</span>
             </div>
             <div className="text-3xl font-bold text-white">24.5k</div>
             <div className="text-xs text-slate-400 mt-1">Across 3 Events</div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
             <div className="flex items-center gap-2 text-slate-400 mb-2">
                 <MousePointer size={18} /> <span className="text-xs font-bold uppercase tracking-wider">Profile Clicks</span>
             </div>
             <div className="text-3xl font-bold text-white">842</div>
             <div className="text-xs text-emerald-400 mt-1">3.4% CTR</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
             <div className="flex items-center gap-2 text-slate-400 mb-2">
                 <Award size={18} /> <span className="text-xs font-bold uppercase tracking-wider">Sponsored Podiums</span>
             </div>
             <div className="text-3xl font-bold text-white">12</div>
             <div className="text-xs text-slate-400 mt-1">Brand Visibility Moments</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-center">
             <button className="flex flex-col items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Search size={24} />
                <span className="font-bold text-sm">Find New Events</span>
             </button>
          </div>
      </div>

      {/* Active Campaigns */}
      <h3 className="text-lg font-bold text-white mb-4">Active Sponsorships</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {EVENTS.slice(0, 2).map(evt => (
              <div key={evt.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                  <div className="flex justify-between items-start mb-6">
                      <div>
                          <h4 className="font-bold text-white text-lg">{evt.name}</h4>
                          <p className="text-slate-500 text-sm">{evt.location} • {evt.date}</p>
                      </div>
                      <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/20">Title Sponsor</span>
                  </div>
                  
                  <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 mb-4">
                      <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400">Live Leaderboard Banner</span>
                          <span className="text-green-400 font-bold">Active</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full w-[70%]"></div>
                      </div>
                  </div>

                  <div className="flex justify-end">
                      <button className="text-sm font-bold text-slate-300 hover:text-white flex items-center gap-2">
                          View Report <ArrowUpRight size={16} />
                      </button>
                  </div>
              </div>
          ))}
      </div>

    </div>
  );
};

export default SponsorDashboard;