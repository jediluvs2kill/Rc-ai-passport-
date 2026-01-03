import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Trophy, Car, FileText, Activity } from 'lucide-react';
import RulebookModal from './RulebookModal';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [showRulebook, setShowRulebook] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      
      {showRulebook && <RulebookModal onClose={() => setShowRulebook(false)} />}

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-3 h-3 bg-white rounded-full transform -rotate-45"></div>
            </div>
            <span className="text-xl font-bold display-font tracking-wide">KARMIC<span className="text-cyan-400">RC</span></span>
          </div>
          <button 
            onClick={onEnter}
            className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
          >
            MEMBER LOGIN <ChevronRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
           <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-cyan-400 tracking-widest uppercase mb-8 animate-fade-in">
            The Official Racing Ledger
          </div>
          <h1 className="text-5xl md:text-7xl font-bold display-font leading-tight mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Your Permanent <br/> Racing Identity.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop racing in a vacuum. Karmic RC is the infrastructure layer for RC motorsport. 
            We track your identity, verify your chassis, and immortalize your race history on the ledger.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={onEnter}
              className="w-full md:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
            >
              Access Dashboard <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => setShowRulebook(true)}
              className="w-full md:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold text-lg rounded-xl transition-all"
            >
              Federation Rulebook
            </button>
          </div>
        </div>
      </section>

      {/* Product Pillars Grid */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 1. Racer Passport */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 display-font">Racer Passport</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A unified Federation ID for every racer. Track your category (Rookie to Pro), accumulated rating, and reputation across every club.
              </p>
            </div>

            {/* 2. Car Passport */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Car className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 display-font">Car Passport</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                End the "cheater motor" rumors. Register chassis, verify weights, and log component upgrades. A verifiable spec history for every car.
              </p>
            </div>

             {/* 3. Race Ledger */}
             <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 display-font">Race Ledger</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Immutable race results. Every heat, every lap time, and every penalty is recorded forever. The ultimate source of truth.
              </p>
            </div>

             {/* 4. AI Analytics */}
             <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-yellow-500/50 transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 display-font">Live Stats</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Real-time skill ratings and seasonal rankings. We don't just count points; we measure pace, consistency, and sportsmanship.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Trusted by Premier Organizations</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos using text for simplicity, in a real app these would be SVGs */}
             <span className="text-2xl font-black display-font text-white">URBAN<span className="text-cyan-500">RC</span></span>
             <span className="text-2xl font-black display-font text-white">TARMAC<span className="text-purple-500">TITANS</span></span>
             <span className="text-2xl font-black display-font text-white">SPEED<span className="text-yellow-500">WORLD</span></span>
             <span className="text-2xl font-black display-font text-white">DRIFT<span className="text-emerald-500">KINGS</span></span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-slate-500 text-sm">
             © 2024 Karmic RC Passport. All rights reserved.
           </div>
           <div className="flex gap-6 text-slate-400 text-sm font-bold">
             <button onClick={() => setShowRulebook(true)} className="hover:text-cyan-400">Rules</button>
             <a href="#" className="hover:text-cyan-400">Tracks</a>
             <a href="#" className="hover:text-cyan-400">Privacy</a>
             <a href="#" className="hover:text-cyan-400">Contact</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;