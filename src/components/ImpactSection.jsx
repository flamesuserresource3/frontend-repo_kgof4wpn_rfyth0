import { Building2, Droplets, GraduationCap, HeartHandshake } from 'lucide-react';

export default function ImpactSection() {
  const causes = [
    { icon: Building2, title: 'Housing Support', raised: '₹3.2Cr', blurb: 'Rebuilding homes and providing safe shelter.' },
    { icon: GraduationCap, title: 'Education', raised: '₹1.1Cr', blurb: 'Scholarships and digital classrooms across India.' },
    { icon: Droplets, title: 'Clean Water', raised: '₹78L', blurb: 'Community water projects in rural regions.' },
    { icon: HeartHandshake, title: 'Healthcare', raised: '₹56L', blurb: 'Medical aid and preventive care access.' },
  ];

  return (
    <section id="impact" className="bg-gradient-to-b from-white to-blue-50/40 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Our Impact</h2>
            <p className="text-slate-600">Transparent giving with live totals and verified partners.</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Total Raised for Charity</div>
            <div className="text-2xl font-semibold text-blue-700">₹5.64Cr</div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {causes.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-semibold text-slate-900">{c.title}</div>
              <div className="text-sm text-slate-600">{c.blurb}</div>
              <div className="mt-3 text-sm"><span className="text-slate-500">Raised:</span> <span className="font-semibold text-slate-900">{c.raised}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
