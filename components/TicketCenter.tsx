import React from 'react';
import { EVENTS } from '../constants';
import { Calendar, MapPin, Tag, Ticket, CreditCard, Clock, CheckCircle2 } from 'lucide-react';
import VerifiedBadge from './VerifiedBadge';

const TicketCenter: React.FC = () => {
  const upcomingEvents = EVENTS.filter(e => e.status === 'Upcoming');

  return (
    <div className="h-full overflow-y-auto pb-8">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 display-font">Box Office</h2>
        <p className="text-slate-400 max-w-2xl">
          Secure your spot trackside. Purchase official spectator tickets for verified Federation events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map(event => (
          <div key={event.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group flex flex-col h-full">
            
            {/* Banner Mockup (using gradients as placeholders) */}
            <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 relative">
               <div className="absolute inset-0 bg-slate-950/20"></div>
               <div className="absolute top-4 right-4">
                  {event.verified && <VerifiedBadge className="bg-slate-950/80 backdrop-blur rounded-full px-2 py-1" size="sm" label="Federation Verified" />}
               </div>
               <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-slate-900 to-transparent">
                  <span className="text-xs font-bold bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30 uppercase tracking-wider">
                    {event.class}
                  </span>
               </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{event.name}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">{event.description || 'Join us for an exciting day of RC racing action.'}</p>
              
              <div className="space-y-3 mb-8">
                 <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Calendar size={16} className="text-slate-500" />
                    <span>{event.date}</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Clock size={16} className="text-slate-500" />
                    <span>10:00 AM - 6:00 PM</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <MapPin size={16} className="text-slate-500" />
                    <span>{event.location}</span>
                 </div>
              </div>

              <div className="mt-auto border-t border-slate-800 pt-4 flex items-center justify-between">
                 <div>
                    <div className="text-xs text-slate-500 uppercase font-bold">Price</div>
                    <div className="text-xl font-bold text-white">₹{event.ticketPrice || 'Free'}</div>
                 </div>
                 <button className="bg-white hover:bg-slate-200 text-slate-950 font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
                    <Ticket size={18} />
                    Get Tickets
                 </button>
              </div>
            </div>

          </div>
        ))}

        {/* Placeholder for no events */}
        {upcomingEvents.length === 0 && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-800 rounded-2xl">
             <Ticket size={48} className="mx-auto text-slate-700 mb-4" />
             <h3 className="text-xl font-bold text-slate-500">No Upcoming Ticketed Events</h3>
             <p className="text-slate-600">Check back later for new race announcements.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default TicketCenter;