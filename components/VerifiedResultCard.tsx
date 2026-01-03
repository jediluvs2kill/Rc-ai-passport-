import React from 'react';
import { BadgeCheck, Trophy } from 'lucide-react';

interface VerifiedResultCardProps {
  eventName: string;
  round: string;
  position: number;
  racerName: string;
  verified: boolean;
}

const VerifiedResultCard: React.FC<VerifiedResultCardProps> = ({ eventName, round, position, racerName, verified }) => {
  return (
    <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 max-w-xs w-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>
      
      <div className="relative z-10">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Race:</div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight">
            {eventName} <span className="text-slate-400 font-normal">{round}</span>
          </h3>

          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Result:</div>
          <div className="flex justify-between items-end mb-6">
             <div>
                <div className="text-4xl font-bold text-slate-900 leading-none">
                    {position}
                    <span className="text-sm align-top ml-1">
                        {position === 1 ? 'st' : position === 2 ? 'nd' : position === 3 ? 'rd' : 'th'}
                    </span>
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase mt-1">Place</div>
             </div>
             
             {verified && (
                 <div className="flex flex-col items-center">
                    <BadgeCheck size={48} className="text-emerald-500 fill-emerald-50 mb-1" />
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">Verified</span>
                    <span className="text-[8px] text-slate-400">By Organizer</span>
                 </div>
             )}
          </div>

          <div className="border-t border-slate-100 pt-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Racer:</div>
              <div className="font-bold text-slate-900">{racerName}</div>
          </div>
      </div>
    </div>
  );
};

export default VerifiedResultCard;