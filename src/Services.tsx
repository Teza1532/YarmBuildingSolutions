function Services() {
  const data = [
    { title: "Extensions", desc: "Single & double storey home extensions fully managed from groundwork to finishing."},
    { title: "Kitchens", desc: "Full kitchen refurbishments, fit-outs, electrics, tiling & flooring."},
    { title: "Bathrooms", desc: "Modern bathroom renovations including plumbing, tiling, lighting & ventilation."},
    { title: "Orangeries", desc: "Light-filled living spaces with warm roof options and integrated lighting."},
    { title: "Bi‑Folds", desc: "Supply & fit of aluminium bi‑fold doors with structural support where required."},
    { title: "Renovations", desc: "Internal reconfiguration, steelwork, plastering and finishing trades."},
  ]
  return (
    <section id="services" className="py-20 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold underline-gold">What we do</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 p-6 hover:border-brand-gold transition">
              <div className="text-xl font-semibold text-brand-gold">{s.title}</div>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services