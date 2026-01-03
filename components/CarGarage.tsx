import React, { useState } from 'react';
import { Car } from '../types';
import VerifiedBadge from './VerifiedBadge';
import { CheckCircle2, AlertCircle, Play, Image as ImageIcon } from 'lucide-react';

interface CarGarageProps {
  cars: Car[];
}

const CarGarage: React.FC<CarGarageProps> = ({ cars }) => {
  const [selectedCar, setSelectedCar] = useState<Car>(cars[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-140px)]">
      
      {/* Car List Sidebar */}
      <div className="w-full md:w-1/3 space-y-3 overflow-y-auto pr-2">
        <h2 className="text-xl font-bold text-white mb-4 px-2">My Garage</h2>
        {cars.map(car => (
          <div 
            key={car.id}
            onClick={() => setSelectedCar(car)}
            className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 group ${
              selectedCar.id === car.id 
                ? 'bg-slate-800 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)]' 
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-white text-md group-hover:text-orange-400 transition-colors">{car.nickname}</h3>
              {car.verified && <CheckCircle2 size={16} className="text-emerald-500" />}
            </div>
            <p className="text-slate-500 text-xs">{car.chassis}</p>
          </div>
        ))}
        
        <button className="w-full py-3 rounded-xl border-2 border-dashed border-slate-700 text-slate-500 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all font-medium text-sm flex items-center justify-center gap-2">
            + Register New Chassis
        </button>
      </div>

      {/* Car Passport Detail View */}
      <div className="flex-1 flex justify-center overflow-y-auto">
        
        <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-[2.5rem] p-6 md:p-8 shadow-2xl h-fit">
            
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 display-font tracking-wide">Car Passport</h2>
                <div className="h-1.5 w-24 bg-orange-500 rounded-full"></div>
            </div>

            {/* Car Image */}
            <div className="mb-8 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 aspect-video relative group">
                <img src={selectedCar.imageUrl} alt={selectedCar.nickname} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Specs Table */}
            <div className="bg-slate-950/50 rounded-2xl border border-slate-800 overflow-hidden mb-8">
                {/* Chassis ID */}
                <div className="flex justify-between items-center p-4 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium text-sm">Chassis ID</span>
                    <span className="text-white font-mono font-bold">{selectedCar.id.toUpperCase().replace('CAR', 'URM-C')}</span>
                </div>
                
                {/* Class */}
                <div className="flex justify-between items-center p-4 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium text-sm">Class</span>
                    <span className="text-white font-bold">{selectedCar.class.split(' ')[0]}</span>
                </div>

                {/* Motor */}
                <div className="flex justify-between items-center p-4 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium text-sm">Motor</span>
                    <span className="text-white font-bold text-sm">
                        {selectedCar.parts.find(p => p.type === 'Motor')?.spec || 'Unknown'} Brushless
                    </span>
                </div>

                {/* Weight */}
                <div className="flex justify-between items-center p-4">
                    <span className="text-slate-400 font-medium text-sm">Weight</span>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold">{selectedCar.weight}g</span>
                        {selectedCar.verified ? (
                             <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold uppercase">(Verified)</span>
                        ) : (
                             <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded border border-yellow-500/30 font-bold uppercase">(Pending)</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Proof Timeline */}
            <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Photo/Video Proof Timeline</h3>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-colors cursor-pointer">
                        <ImageIcon size={20} />
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-colors cursor-pointer">
                         <Play size={20} />
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-colors cursor-pointer opacity-50">
                         <ImageIcon size={20} />
                    </div>
                     <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-colors cursor-pointer opacity-50">
                         <Play size={20} />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CarGarage;
