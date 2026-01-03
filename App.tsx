import React, { useState } from 'react';
import { LayoutDashboard, Users, CarFront, Trophy, Menu, X, ArrowLeft, Ticket, Store, Briefcase, Gavel, LogOut } from 'lucide-react';
import RacerPassport from './components/RacerPassport';
import CarGarage from './components/CarGarage';
import LiveRaceControl from './components/LiveRaceControl';
import LandingPage from './components/LandingPage';
import TicketCenter from './components/TicketCenter';
import OrganizerDashboard from './components/OrganizerDashboard';
import SponsorDashboard from './components/SponsorDashboard';
import AdminDashboard from './components/AdminDashboard';
import SeasonLeaderboard from './components/SeasonLeaderboard';
import { RACERS, CARS, EVENTS, CURRENT_USER_ID } from './constants';
import { UserRole } from './types';

// Types for Navigation Views
type View = 'dashboard' | 'passport' | 'garage' | 'ledger' | 'leaderboard' | 'tickets' | 'organizer_dash' | 'sponsor_dash' | 'admin_dash';

const App: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [activeView, setActiveView] = useState<View>('passport');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock current user
  const currentUser = RACERS.find(r => r.id === CURRENT_USER_ID) || RACERS[0];
  const myCars = CARS.filter(c => c.ownerId === CURRENT_USER_ID);

  // Navigation Item Helper
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

  // Handle Role Selection Entry
  const handleRoleEnter = (role: UserRole) => {
    setCurrentRole(role);
    
    // Set default view based on role
    switch(role) {
        case 'racer': setActiveView('passport'); break;
        case 'organizer': setActiveView('organizer_dash'); break;
        case 'sponsor': setActiveView('sponsor_dash'); break;
        case 'viewer': setActiveView('tickets'); break;
        case 'admin': setActiveView('admin_dash'); break;
        default: setActiveView('passport');
    }
  };

  const handleLogout = () => {
      setCurrentRole(null);
      setActiveView('passport');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'passport': return <RacerPassport racer={currentUser} />;
      case 'garage': return <CarGarage cars={myCars} />;
      case 'ledger': return <LiveRaceControl events={EVENTS} racers={RACERS} />;
      case 'tickets': return <TicketCenter />;
      case 'organizer_dash': return <OrganizerDashboard />;
      case 'sponsor_dash': return <SponsorDashboard />;
      case 'admin_dash': return <AdminDashboard />;
      case 'leaderboard': return <SeasonLeaderboard />; // Updated to use new component
      default:
        return (
            <div className="flex items-center justify-center h-full text-slate-500">
                Work in Progress: {activeView}
            </div>
        );
    }
  };

  // If no role selected, show Landing Page
  if (!currentRole) {
    return <LandingPage onEnter={handleRoleEnter} />;
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
          
          <div className="px-3 py-1.5 bg-slate-800 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest text-center border border-slate-700">
             {currentRole} Portal
          </div>
        </div>

        <nav className="px-4 space-y-2 overflow-y-auto h-[calc(100vh-200px)]">
            
            {/* RACER NAVIGATION */}
            {currentRole === 'racer' && (
                <>
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">My Career</div>
                    <NavItem view="passport" icon={Users} label="Racer Passport" />
                    <NavItem view="garage" icon={CarFront} label="Car Garage" />
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mt-6">Competition</div>
                    <NavItem view="ledger" icon={LayoutDashboard} label="Race Ledger" />
                    <NavItem view="leaderboard" icon={Trophy} label="Rankings" />
                    <NavItem view="tickets" icon={Ticket} label="Box Office" />
                </>
            )}

            {/* ORGANIZER NAVIGATION */}
            {currentRole === 'organizer' && (
                <>
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Management</div>
                    <NavItem view="organizer_dash" icon={Store} label="Dashboard" />
                    <NavItem view="ledger" icon={LayoutDashboard} label="Race Ledger" />
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mt-6">Tools</div>
                    <NavItem view="garage" icon={CarFront} label="Scrutineering" />
                </>
            )}

            {/* SPONSOR NAVIGATION */}
            {currentRole === 'sponsor' && (
                <>
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Brand</div>
                    <NavItem view="sponsor_dash" icon={Briefcase} label="Console" />
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mt-6">Discovery</div>
                    <NavItem view="ledger" icon={LayoutDashboard} label="Events Ledger" />
                    <NavItem view="leaderboard" icon={Trophy} label="Top Talent" />
                </>
            )}

            {/* ADMIN NAVIGATION */}
            {currentRole === 'admin' && (
                <>
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Federation</div>
                    <NavItem view="admin_dash" icon={Gavel} label="Oversight" />
                    <NavItem view="ledger" icon={LayoutDashboard} label="Master Ledger" />
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mt-6">Database</div>
                    <NavItem view="passport" icon={Users} label="Racer Registry" />
                    <NavItem view="garage" icon={CarFront} label="Car Registry" />
                </>
            )}

             {/* VIEWER NAVIGATION */}
             {currentRole === 'viewer' && (
                <>
                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Spectator</div>
                    <NavItem view="tickets" icon={Ticket} label="Box Office" />
                    <NavItem view="ledger" icon={LayoutDashboard} label="Live Results" />
                    <NavItem view="leaderboard" icon={Trophy} label="Rankings" />
                </>
            )}

        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800 bg-slate-900">
           {currentRole === 'racer' ? (
               <div className="flex items-center gap-3">
                  <img src={currentUser.avatarUrl} className="w-10 h-10 rounded-full border border-slate-600" alt="Avatar"/>
                  <div className="flex-1 overflow-hidden">
                      <div className="text-sm font-bold text-white truncate">{currentUser.name}</div>
                      <button onClick={handleLogout} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 mt-0.5">
                          <LogOut size={10} /> Sign Out
                      </button>
                  </div>
               </div>
           ) : (
                <button onClick={handleLogout} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors w-full">
                    <LogOut size={16} /> <span className="text-sm font-bold">Exit Portal</span>
                </button>
           )}
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