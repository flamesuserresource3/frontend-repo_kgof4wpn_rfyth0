export default function ImpactSection() {
  const stats = [
    { label: 'Total Raised', value: '₹5.64Cr' },
    { label: 'NGO Partners', value: '17' },
    { label: 'Winners Fulfilled', value: '203' },
  ];

  const partners = [
    { name: 'Habitat India' },
    { name: 'Teach For India' },
    { name: 'WaterAid' },
    { name: 'Goonj' },
  ];

  return (
    <section id="impact" className="border-y border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900">Impact & Transparency</h2>
            <p className="text-slate-600 mt-2">A portion of every entry funds real projects. We publish receipts and reports for full clarity.</p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 p-4">
                  <div className="text-xs text-slate-500">{s.label}</div>
                  <div className="text-xl font-semibold text-slate-900">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm text-slate-500">Partners</div>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((p) => (
                <div key={p.name} className="rounded-lg border border-slate-200 p-4 text-center text-slate-700 bg-slate-50">{p.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
