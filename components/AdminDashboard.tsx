import React from 'react';
import { Gavel, CheckCircle2, XCircle, AlertTriangle, ShieldAlert } from 'lucide-react';
import { RACERS, CARS } from '../constants';

const AdminDashboard: React.FC = () => {
  const pendingCars = CARS.filter(c => !c.verified);

  return (
    <div className="h-full overflow-y-auto pb-8">
      
      {/* Header */}
      <div className="mb-8">
         <h2 className="text-3xl font-bold text-white mb-2 display-font">Federation Oversight</h2>
         <p className="text-slate-400">Review verifications, resolve disputes, and manage the rulebook.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Action Column */}
          <div className="lg:col-span-2 space-y-8">
             
             {/* Pending Verifications */}
             <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                 <div className="p-4 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <AlertTriangle size={18} className="text-yellow-500" /> Pending Car Verifications
                    </h3>
                    <span className="bg-yellow-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">{pendingCars.length}</span>
                 </div>
                 <div className="divide-y divide-slate-800">
                     {pendingCars.map(car => (
                         <div key={car.id} className="p-4 flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                 <img src={car.imageUrl} className="w-16 h-10 object-cover rounded border border-slate-700" alt="car" />
                                 <div>
                                     <div className="font-bold text-white text-sm">{car.nickname}</div>
                                     <div className="text-xs text-slate-500">{car.chassis} • {car.class}</div>
                                 </div>
                             </div>
                             <div className="flex gap-2">
                                 <button className="p-2 hover:bg-slate-800 rounded-lg text-red-400 transition-colors"><XCircle size={20} /></button>
                                 <button className="p-2 hover:bg-slate-800 rounded-lg text-emerald-400 transition-colors"><CheckCircle2 size={20} /></button>
                             </div>
                         </div>
                     ))}
                     {pendingCars.length === 0 && (
                         <div className="p-8 text-center text-slate-500 italic">No pending verifications.</div>
                     )}
                 </div>
             </div>

             {/* Recent Disputes */}
             <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                 <div className="p-4 bg-slate-950 border-b border-slate-800">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <ShieldAlert size={18} className="text-red-500" /> Open Disputes
                    </h3>
                 </div>
                 <div className="p-6 text-center text-slate-500">
                     No active disputes filed in the last 24 hours.
                 </div>
             </div>

          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                      <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold text-sm transition-colors border border-slate-700">
                          Update Rulebook
                      </button>
                      <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold text-sm transition-colors border border-slate-700">
                          Issue Global Bulletin
                      </button>
                      <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold text-sm transition-colors border border-slate-700">
                          Search User Database
                      </button>
                  </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900 border border-yellow-500/20 p-6 rounded-xl">
                  <div className="text-yellow-500 text-xs font-bold uppercase tracking-wider mb-2">Federation Status</div>
                  <div className="text-2xl font-bold text-white mb-1">Operational</div>
                  <div className="text-slate-400 text-xs">System v2.4.1 • All services online</div>
              </div>
          </div>

      </div>

    </div>
  );
};

export default AdminDashboard;