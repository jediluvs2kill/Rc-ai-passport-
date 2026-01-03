import React, { useState } from 'react';
import { LayoutDashboard, Users, CarFront, Trophy, Menu, X, ArrowLeft } from 'lucide-react';
import RacerPassport from './components/RacerPassport';
import CarGarage from './components/CarGarage';
import LiveRaceControl from './components/LiveRaceControl';
import LandingPage from './components/LandingPage';
import { RACERS, CARS, EVENTS, CURRENT_USER_ID } from './constants';

// Types for Navigation
type View = 'dashboard' | 'passport' | 'garage' | 'ledger' | 'leaderboard';

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeView, setActiveView] = useState<View>('passport');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock current user
  const currentUser = RACERS.find(r => r.id === CURRENT_USER_ID) || RACERS[0];
  const myCars = CARS.filter(c => c.ownerId === CURRENT_USER_ID);

  const renderContent = () => {
    switch (activeView) {
      case 'passport':
        return <RacerPassport racer={currentUser} />;
      case 'garage':
        return <CarGarage cars={myCars} />;
      case 'ledger':
        return <LiveRaceControl events={EVENTS} racers={RACERS} />;
      default:
        return (
            <div className="flex items-center justify-center h-full text-slate-500">
                Work in Progress: {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
            </div>
        );
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: React.ElementType; label: string }) => (
    <button
      onClick={() => {
        setActiveView(view);
        setIsMobileMenuOpen(false);
      }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full text-left ${
        activeView === view 
          ? 'bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar Navigation */}
      <aside className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-slate-900/95 backdrop-blur border-r border-slate-800 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col gap-6">
           <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-3 h-3 bg-white rounded-full transform -rotate-45"></div>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white display-font">
              KARMIC<span className="text-cyan-400">RC</span>
            </h1>
          </div>
          
          <button 
            onClick={() => setShowLanding(true)}
            className="text-xs text-slate-500 hover:text-white flex items-center gap-1 transition-colors pl-1"
          >
            <ArrowLeft size={12} /> Back to Home
          </button>
        </div>

        <nav className="px-4 space-y-2">
            <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">My Career</div>
            <NavItem view="passport" icon={Users} label="Racer Passport" />
            <NavItem view="garage" icon={CarFront} label="Car Garage" />
            
            <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mt-6">Competition</div>
            <NavItem view="ledger" icon={LayoutDashboard} label="Race Ledger" />
            <NavItem view="leaderboard" icon={Trophy} label="Rankings" />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800 bg-slate-900">
           <div className="flex items-center gap-3">
              <img src={currentUser.avatarUrl} className="w-10 h-10 rounded-full border border-slate-600" alt="Avatar"/>
              <div className="flex-1 overflow-hidden">
                  <div className="text-sm font-bold text-white truncate">{currentUser.name}</div>
                  <div className="text-xs text-slate-500 truncate">{currentUser.handle}</div>
              </div>
           </div>
        </div>
      </aside>

      {/* Mobile Toggle & Overlay */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-slate-900 border-b border-slate-800 z-30 flex items-center justify-between px-4">
         <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded flex items-center justify-center"></div>
            <span className="font-bold text-white">KARMIC RC</span>
         </div>
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
         </button>
      </div>
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>}

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 overflow-x-hidden">
        {renderContent()}
      </main>

    </div>
  );
};

export default App;