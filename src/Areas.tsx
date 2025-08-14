function Areas() {
  const areas = ["Yarm","Coulby Newham","Wynyard Village","Normanby","Redcar","Eston","Ingleby Barwick","Stockton-on-Tees"]
  return (
    <section id="areas" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold underline-gold">Areas we cover</h2>
        <p className="mt-4 text-slate-300 max-w-3xl">
          We’re based in Yarm and cover Teesside & the surrounding areas.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {areas.map(a => (
            <li key={a} className="px-4 py-2 bg-slate-950/40 rounded-full border border-white/15">{a}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Areas