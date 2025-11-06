import { useEffect, useState } from 'react';
import { Clock, Heart, Ticket, Landmark } from 'lucide-react';

function Countdown({ target }) {
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const t = new Date(target).getTime() - Date.now();
      if (t <= 0) {
        setTimeLeft('00:00:00');
        clearInterval(interval);
        return;
      }
      const hrs = Math.floor(t / 1000 / 60 / 60).toString().padStart(2, '0');
      const mins = Math.floor((t / 1000 / 60) % 60).toString().padStart(2, '0');
      const secs = Math.floor((t / 1000) % 60).toString().padStart(2, '0');
      setTimeLeft(`${hrs}:${mins}:${secs}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);
  return <span className="font-mono tabular-nums">{timeLeft}</span>;
}

export default function CarouselGiveaways() {
  const items = [
    {
      id: 1,
      title: 'Win ₹5L Home Renovation Voucher',
      ngo: 'Supported by Habitat India',
      type: 'ticket',
      price: 499,
      goal: 5000000,
      sold: 8421,
      total: 200000,
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 20).toISOString(),
    },
    {
      id: 2,
      title: 'iPhone 16 Pro Giveaway',
      ngo: 'Supported by Teach For India',
      type: 'time',
      price: 99,
      goal: 1500000,
      sold: 22140,
      total: 0,
      endsAt: new Date(Date.now() + 1000 * 60 * 90).toISOString(),
    },
    {
      id: 3,
      title: 'Mega ₹1Cr Housing Voucher',
      ngo: 'Supported by Habitat India',
      type: 'ticket',
      price: 999,
      goal: 10000000,
      sold: 5112,
      total: 100000,
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    },
  ];

  return (
    <section id="giveaways" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Live Giveaways</h2>
          <p className="text-slate-600">Enter now. Every ticket fuels a cause.</p>
        </div>
        <a href="#all" className="text-blue-700 hover:underline">View all</a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g) => {
          const progress = Math.min(100, Math.round((g.sold * (g.price || 0)) / g.goal * 100));
          return (
            <div key={g.id} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {g.type === 'ticket' ? <Ticket className="h-3.5 w-3.5"/> : <Clock className="h-3.5 w-3.5"/>}
                    {g.type === 'ticket' ? 'Ticket-based' : 'Time-based'}
                  </span>
                  <span className="text-xs text-slate-500 inline-flex items-center gap-1"><Heart className="h-3.5 w-3.5 text-rose-500"/> {g.ngo}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-slate-950">{g.title}</h3>

                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <div className="text-slate-500">Ticket</div>
                    <div className="font-semibold">₹{g.price}</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <div className="text-slate-500">Time left</div>
                    <div className="font-semibold"><Countdown target={g.endsAt} /></div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1 text-slate-500">
                    <span>₹ collected</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-amber-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="text-slate-600 inline-flex items-center gap-1"><Landmark className="h-4 w-4 text-amber-500"/> Charity 12%</div>
                  <button className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Donate & Enter</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
