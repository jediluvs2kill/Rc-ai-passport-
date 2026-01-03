import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Trophy, Car, FileText, Activity, Users, Store, Briefcase, Gavel, Ticket, Search, MapPin, Calendar, Plus, User, ArrowRight } from 'lucide-react';
import RulebookModal from './RulebookModal';
import { UserRole } from '../types';

interface LandingPageProps {
  onEnter: (role: UserRole) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [showRulebook, setShowRulebook] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  const RoleCard = ({ role, icon: Icon, title, desc, color }: { role: UserRole, icon: any, title: string, desc: string, color: string }) => (
    <button 
      onClick={() => onEnter(role)}
      className="bg-slate-900 border border-slate-800 hover:border-slate-600 p-6 rounded-xl text-left transition-all hover:-translate-y-1 group relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 p-20 bg-${color}-500/5 blur-3xl rounded-full -mr-10 -mt-10 transition-colors group-hover:bg-${color}-500/10`}></div>
      <div className={`w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center mb-4 border border-slate-800 group-hover:border-${color}-500/50`}>
        <Icon size={24} className={`text-${color}-400`} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{desc}</p>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-amber-500/30 font-sans">
      
      {showRulebook && <RulebookModal onClose={() => setShowRulebook(false)} />}

      {/* Role Selector Overlay */}
      {showRoleSelector && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white display-font mb-2">Select Your Portal</h2>
              <p className="text-slate-400">Identify your role to access the correct infrastructure.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RoleCard 
                role="viewer" 
                icon={Ticket} 
                title="Spectator Box Office" 
                desc="Buy tickets, view live leaderboards, and follow race results." 
                color="cyan"
              />
              <RoleCard 
                role="racer" 
                icon={Users} 
                title="Racer Portal" 
                desc="Manage your passport, garage, and view your career stats." 
                color="blue"
              />
              <RoleCard 
                role="organizer" 
                icon={Store} 
                title="Organizer Dashboard" 
                desc="Create events, manage entries, and certify results." 
                color="emerald"
              />
              <RoleCard 
                role="sponsor" 
                icon={Briefcase} 
                title="Sponsor Console" 
                desc="Track campaign performance and brand reach." 
                color="purple"
              />
              <RoleCard 
                role="admin" 
                icon={Gavel} 
                title="Federation Admin" 
                desc="Verify vehicles, oversee safety, and manage disputes." 
                color="yellow"
              />
            </div>
            
            <button 
              onClick={() => setShowRoleSelector(false)}
              className="mt-10 mx-auto block text-slate-500 hover:text-white text-sm"
            >
              Cancel and go back
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0B0F19]/80 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center">
                <span className="font-bold text-black text-xl">K</span>
             </div>
             <span className="text-xl font-bold display-font tracking-wide text-white">KARMIC <span className="text-yellow-500">RC</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
             <button onClick={() => setShowRoleSelector(true)} className="hover:text-white transition-colors">Rankings</button>
             <button onClick={() => setShowRoleSelector(true)} className="hover:text-white transition-colors">Events</button>
             <button onClick={() => setShowRoleSelector(true)} className="hover:text-white transition-colors">Verified Races</button>
          </div>

          <div className="flex items-center gap-4">
             <button onClick={() => setShowRoleSelector(true)} className="hidden md:block text-sm font-medium text-white hover:text-yellow-500 transition-colors flex items-center gap-2">
                <User size={16} /> Login
             </button>
             <button 
               onClick={() => setShowRoleSelector(true)}
               className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
             >
               Get Started
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1532906619279-a76e05391d2d?q=80&w=2000&auto=format&fit=crop" 
             alt="Racing Background" 
             className="w-full h-full object-cover opacity-30 mask-image-gradient"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
           <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold display-font leading-[1.1] mb-6">
                The World's Official <br/>
                Ledger of <span className="text-yellow-500">RC Motorsport</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                Track your stats, verify your events, and get ranked. 
                Build your RC racing career on the only platform that matters.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-16">
                <button 
                  onClick={() => setShowRoleSelector(true)}
                  className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                >
                  Start Racing
                </button>
                <button 
                  onClick={() => setShowRulebook(true)}
                  className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white font-bold text-lg rounded-lg transition-all"
                >
                  Learn More
                </button>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center gap-8 md:gap-16 border-t border-white/10 pt-8">
                 <div>
                    <div className="text-3xl md:text-4xl font-bold text-white font-mono">50,482</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-bold mt-1">Racers</div>
                 </div>
                 <div>
                    <div className="text-3xl md:text-4xl font-bold text-white font-mono">12,391</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-bold mt-1">Events</div>
                 </div>
                 <div>
                    <div className="text-3xl md:text-4xl font-bold text-white font-mono">358</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-bold mt-1">Tracks</div>
                 </div>
              </div>
           </div>
           
           {/* Visual Element (Drone/Cars) - Hidden on mobile for space */}
           <div className="flex-1 relative hidden lg:block">
              {/* This space would typically hold the cut-out images of the cars/drone from the design */}
              <div className="relative w-full h-[500px]">
                 {/* Abstract visual placeholders */}
              </div>
           </div>
        </div>
      </section>

      {/* Dashboard & Leaderboard Preview Section */}
      <section className="py-12 bg-[#0B0F19]">
         <div className="max-w-7xl mx-auto px-6">
             
             {/* Section Tabs (Visual only) */}
             <div className="flex items-center justify-between text-sm font-bold text-slate-500 mb-6 border-b border-white/10 pb-4">
                 <div className="flex gap-8">
                     <span className="text-white">50,482 RACERS</span>
                     <span>|</span>
                     <span className="text-white">12,391 EVENTS</span>
                     <span>|</span>
                     <span className="text-white">358 TRACKS</span>
                 </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 
                 {/* Left: Your Racing Dashboard Mockup */}
                 <div>
                     <h2 className="text-2xl font-bold text-white mb-6 display-font">Your Racing Dashboard</h2>
                     
                     <div className="bg-[#131B2C] rounded-2xl p-6 border border-white/5 shadow-2xl mb-6 relative overflow-hidden group hover:border-white/10 transition-colors cursor-pointer" onClick={() => onEnter('racer')}>
                         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent pointer-events-none"></div>
                         
                         {/* Profile Header */}
                         <div className="flex items-center gap-4 mb-6 relative z-10">
                             <div className="w-16 h-16 rounded-full border-2 border-yellow-500 p-0.5">
                                 <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" alt="Profile"/>
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-white">Anuj Sharma <span className="text-slate-500 text-sm font-normal">#4791</span></h3>
                                 <div className="flex items-center gap-2 mt-1">
                                     <div className="bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded">Rookie</div>
                                     <div className="text-slate-400 text-xs">1524 Rating</div>
                                 </div>
                             </div>
                         </div>

                         {/* Stats Row */}
                         <div className="grid grid-cols-4 gap-4 border-t border-white/5 pt-6 mb-6 relative z-10">
                             <div className="text-center">
                                 <div className="text-2xl font-bold text-white">8</div>
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Verified Events</div>
                             </div>
                             <div className="text-center">
                                 <div className="text-2xl font-bold text-white">4</div>
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Wins</div>
                             </div>
                             <div className="text-center">
                                 <div className="text-2xl font-bold text-white">9</div>
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Top 3 Finishes</div>
                             </div>
                             <div className="text-center">
                                 <div className="text-2xl font-bold text-white">317</div>
                                 <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Laps Recorded</div>
                             </div>
                         </div>

                         {/* Buttons */}
                         <div className="flex gap-3 relative z-10">
                             <button className="flex-1 bg-[#1E293B] hover:bg-[#283548] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                                 <User size={16} /> My Profile
                             </button>
                             <button className="flex-1 bg-[#1E293B] hover:bg-[#283548] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                                 <Calendar size={16} /> Upcoming Events
                             </button>
                             <button className="flex-1 bg-[#1E293B] hover:bg-[#283548] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                                 <Car size={16} /> Registered Cars
                             </button>
                         </div>
                     </div>

                     {/* Sub Cards */}
                     <div className="grid grid-cols-2 gap-6">
                         <div className="bg-[#131B2C] rounded-2xl p-6 border border-white/5 relative overflow-hidden group cursor-pointer hover:border-yellow-500/50 transition-all" onClick={() => onEnter('viewer')}>
                             <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" alt="Track"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] to-transparent"></div>
                             </div>
                             <div className="relative z-10 flex flex-col items-center text-center pt-4">
                                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 backdrop-blur-sm border border-white/10">
                                     <Search size={24} className="text-white" />
                                 </div>
                                 <h3 className="font-bold text-white text-lg mb-1">Search Events</h3>
                                 <p className="text-slate-400 text-xs">Find races near you.</p>
                             </div>
                         </div>

                         <div className="bg-[#131B2C] rounded-2xl p-6 border border-white/5 relative overflow-hidden group cursor-pointer hover:border-yellow-500/50 transition-all" onClick={() => onEnter('organizer')}>
                             <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" alt="Track"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] to-transparent"></div>
                             </div>
                             <div className="relative z-10 flex flex-col items-center text-center pt-4">
                                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 backdrop-blur-sm border border-white/10">
                                     <Store size={24} className="text-white" />
                                 </div>
                                 <h3 className="font-bold text-white text-lg mb-1">Sign Up Your Track</h3>
                                 <p className="text-slate-400 text-xs">Create and manage official races.</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Right: Top Racers Leaderboard */}
                 <div>
                     <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white display-font">Top Racers</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-slate-400 text-sm">Global</span>
                            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xs cursor-pointer">+</div>
                        </div>
                     </div>

                     <div className="bg-[#131B2C] rounded-2xl border border-white/5 overflow-hidden">
                         {[
                             { name: 'Zane Mitchell', rank: '#2048', country: 'Los Angeles, USA', score: 2210, flag: '🇺🇸', pic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop' },
                             { name: 'Haruto Tanaka', rank: '#710', country: 'Tokyo, Japan', score: 2145, flag: '🇯🇵', pic: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop' },
                             { name: 'Elena Kostov', rank: '#1523', country: 'Sofia, Bulgaria', score: 2087, flag: '🇧🇬', pic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop' },
                             { name: 'Liam Carter', rank: '#987', country: 'Melbourne, Australia', score: 2087, flag: '🇦🇺', pic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop' },
                             { name: 'Joseph Lee', rank: '#2391', country: 'Toronto, Canada', score: 2381, flag: '🇨🇦', pic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop' }
                         ].map((racer, idx) => (
                             <div key={idx} className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                                 <div className="flex items-center gap-4">
                                     <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-700 group-hover:border-yellow-500 transition-colors">
                                         <img src={racer.pic} className="w-full h-full object-cover" alt={racer.name}/>
                                     </div>
                                     <div>
                                         <div className="text-white font-bold text-sm flex items-center gap-2">
                                             {racer.name} <span className="text-slate-500 font-normal text-xs">{racer.rank}</span>
                                         </div>
                                         <div className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                                             <span>{racer.flag}</span> {racer.country}
                                         </div>
                                     </div>
                                 </div>
                                 <div className="text-right">
                                     <div className="text-xl font-bold text-white font-mono">{racer.score}</div>
                                     <div className="text-[10px] text-yellow-500 font-bold uppercase flex items-center justify-end gap-1">
                                         Pro <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                     
                     <div className="mt-4 text-center">
                         <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg w-full transition-colors" onClick={() => onEnter('viewer')}>
                             View Full Rankings
                         </button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 display-font">Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             
             {/* Card 1 */}
             <div className="bg-[#131B2C] rounded-2xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all flex flex-col">
                 <div className="h-40 relative bg-blue-900/20">
                    <img src="https://images.unsplash.com/photo-1615172282427-9a5752d6486d?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Passport"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] to-transparent"></div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">Racer Passports</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">Find races near you and track your verified career history.</p>
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-lg font-bold text-sm transition-colors" onClick={() => onEnter('racer')}>
                        Find Races
                    </button>
                 </div>
             </div>

             {/* Card 2 */}
             <div className="bg-[#131B2C] rounded-2xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all flex flex-col">
                 <div className="h-40 relative bg-purple-900/20">
                    <img src="https://images.unsplash.com/photo-1583121274602-3e2820c698d9?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Cars"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] to-transparent"></div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">Car Technical Cards</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">Create and manage verified chassis configurations.</p>
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-lg font-bold text-sm transition-colors" onClick={() => onEnter('racer')}>
                        Manage Track
                    </button>
                 </div>
             </div>

             {/* Card 3 */}
             <div className="bg-[#131B2C] rounded-2xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all flex flex-col">
                 <div className="h-40 relative bg-emerald-900/20">
                    <div className="absolute top-4 right-4 z-10">
                        <div className="bg-green-500 rounded-full p-1"><ShieldCheck size={16} className="text-white"/></div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Verified"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] to-transparent"></div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">Verified Events</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">Submit results for official record and national ranking.</p>
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-lg font-bold text-sm transition-colors" onClick={() => onEnter('organizer')}>
                        Submit Results
                    </button>
                 </div>
             </div>

             {/* Card 4 */}
             <div className="bg-[#131B2C] rounded-2xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all flex flex-col">
                 <div className="h-40 relative bg-yellow-900/20">
                    <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Trophy"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] to-transparent"></div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">Rankings & Leagues</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">Win the league to get promoted to national series.</p>
                    <button className="bg-[#1E293B] hover:bg-[#283548] text-white border border-white/10 py-2.5 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2" onClick={() => onEnter('viewer')}>
                         <ShieldCheck size={16} /> View More
                    </button>
                 </div>
             </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-yellow-500 flex items-center justify-center font-bold text-black text-xs">K</div>
             <span className="text-slate-500 text-sm">© 2024 Karmic RC</span>
           </div>
           <div className="flex gap-6 text-slate-400 text-sm font-medium">
             <button onClick={() => setShowRulebook(true)} className="hover:text-yellow-500 transition-colors">Rules</button>
             <a href="#" className="hover:text-yellow-500 transition-colors">Tracks</a>
             <a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a>
             <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;