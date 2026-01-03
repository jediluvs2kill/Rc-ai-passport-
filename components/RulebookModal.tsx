import React from 'react';
import { X, Book, AlertTriangle, Scale, Flag } from 'lucide-react';

interface RulebookModalProps {
  onClose: () => void;
}

const RulebookModal: React.FC<RulebookModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <Book size={24} />
             </div>
             <div>
                <h2 className="text-xl font-bold text-white display-font">Federation Rulebook</h2>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Official 2024 Standards • v2.4</p>
             </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
           
           {/* Section 1 */}
           <section>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-l-4 border-yellow-500 pl-3">
                <AlertTriangle size={20} className="text-yellow-500" />
                1. General Conduct & Safety
              </h3>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-white mb-1">1.1 Marshalling Protocol</h4>
                    <p>All drivers must marshal the race immediately following their own. Failure to marshal results in a DQ for the driver's previous heat. Marshals must remain attentive and only enter the track surface when safe.</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-white mb-1">1.2 Unsportsmanlike Conduct</h4>
                    <p>Zero tolerance for verbal abuse towards race directors or fellow competitors. Intentional wrecking or "cutting" the track to gain advantage will result in an immediate stop-and-go penalty or disqualification.</p>
                  </div>
              </div>
           </section>

           {/* Section 2 */}
           <section>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
                <Scale size={20} className="text-purple-500" />
                2. Technical Standards
              </h3>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-purple-300 mb-2">2.1 Stock 17.5T Class</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                            <li>Motor: ROAR Approved 17.5T Brushless</li>
                            <li>ESC: Blinky Mode (Zero Timing)</li>
                            <li>Min Weight: 1320g (Touring Car)</li>
                            <li>Max Voltage: 8.40v</li>
                        </ul>
                     </div>
                     <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-cyan-300 mb-2">2.2 Modified Class</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                            <li>Motor: Open Brushless</li>
                            <li>ESC: Open Timing</li>
                            <li>Min Weight: 1320g</li>
                            <li>Tires: Spec Control Tire (32-36R)</li>
                        </ul>
                     </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-white mb-1">2.3 Battery Safety</h4>
                    <p>LiPo sacks are mandatory during charging. Charging rate must not exceed 2C. Swollen or damaged packs are strictly prohibited from the pit area.</p>
                  </div>
              </div>
           </section>

           {/* Section 3 */}
           <section>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
                <Flag size={20} className="text-emerald-500" />
                3. Race Procedure
              </h3>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-white mb-1">3.1 Qualifying Format</h4>
                    <p>Qualifying is based on "Rocket Round" (fastest single run) or "Points" (best 2 of 3) depending on event tier. 5-minute heats with staggered starts.</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-white mb-1">3.2 Jump Starts</h4>
                    <p>Any movement before the tone results in a 10-second penalty added to the final time. False starts in Finals require a restart and the offender starts from the back of the grid.</p>
                  </div>
              </div>
           </section>

        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
             <button onClick={onClose} className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-colors">
                Close Rulebook
             </button>
        </div>

      </div>
    </div>
  );
};

export default RulebookModal;